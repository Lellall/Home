import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BaseUrl } from '../utils/config';
import {
  getAccessToken,
  isTokenExpired,
  refreshTokens,
  setRefreshToken,
} from './token-utils';
import { setUser } from '../features/auth/authSlice';

const excludePaths = [
  'auth/login',
  'auth/register',
  'auth/password-reset/request',
];

const baseQuery = fetchBaseQuery({
  baseUrl: BaseUrl,
  prepareHeaders: async (headers, { getState, endpoint }) => {
    const requestPath = endpoint;

    // If the request path is in the excludePaths, skip token handling
    if (excludePaths.some((path) => requestPath.includes(path))) {
      return headers;
    }

    let token = await getAccessToken();
    const tokenExpired = await isTokenExpired(token);

    if (tokenExpired) {
      try {
        token = await refreshTokens();
      } catch (error) {
        console.error('Token refresh failed:', error);
      }
    }

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

const refreshExpiredToken = async (refreshToken) => {
  try {
    const refreshResult = await fetch(`${BaseUrl}auth/refresh-token`, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken: refreshToken, role: 'CONSUMER' }),
      method: 'POST',
    });
    return refreshResult.json();
  } catch (error) {
    return undefined;
  }
};

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const requestPath = args.url;

  // If the request path is in the excludePaths, skip token handling
  if (excludePaths.some((path) => requestPath.includes(path))) {
    return await baseQuery(args, api, extraOptions);
  }

  let result = await baseQuery(args, api, extraOptions);
  let token = await getAccessToken();
  if (result.error && result.error.status === 401) {
    const res = await refreshExpiredToken(token);
    console.log('res', res);
    try {
      // const newAccessToken = await refreshTokens(token);

      api.dispatch(
        setUser({
          access_token: res.access_token,
          user: res,
          isLogin: true,
          refresh_token: res.refresh_token, // Update with new token
        })
      );
      result = await baseQuery(
        {
          ...args,
          headers: {
            ...args.headers,
            Authorization: `Bearer ${res.access_token}`,
          },
        },
        api,
        extraOptions
      );
    } catch (error) {
      console.error('Failed to refresh token:', error);
    }
  }

  return result;
};

export const baseApi = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['AUTH', 'SHOP'],
  reducerPath: 'baseApi',
  endpoints: () => ({}),
  keepUnusedDataFor: 5000,
});
