import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BaseUrl } from '../utils/config';
import { getAccessToken, isTokenExpired, refreshTokens } from './token-utils';

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

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const requestPath = args.url;

  // If the request path is in the excludePaths, skip token handling
  if (excludePaths.some((path) => requestPath.includes(path))) {
    return await baseQuery(args, api, extraOptions);
  }

  let result = await baseQuery(args, api, extraOptions);
  let token = await getAccessToken();
  if (result.error && result.error.status === 401) {
    try {
      const newAccessToken = await refreshTokens(token);
      result = await baseQuery(
        {
          ...args,
          headers: {
            ...args.headers,
            Authorization: `Bearer ${newAccessToken}`,
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
