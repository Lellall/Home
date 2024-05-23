import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseUrl } from "../utils/config";
import { getAccessToken, isTokenExpired, refreshTokens } from "./token-utils";

const baseQuery = fetchBaseQuery({
  baseUrl: BaseUrl,
  prepareHeaders: async (headers, { getState, endpoint }) => {
    // List of paths to exclude from authorization
    const excludePaths = [
      "auth/login",
      "auth/register",
      "users/password-reset-request",
    ];

    let token = await getAccessToken();
    const tokenExpired = await isTokenExpired(token);

    console.log('====================================');
    console.log(tokenExpired);
    console.log('====================================');

    if (tokenExpired) {
      try {
        token = await refreshTokens();
      } catch (error) {
        console.error("Token refresh failed:", error);
      }
    }

    if (token) {
      const requestPath = endpoint;
      if (!excludePaths.some((path) => requestPath.includes(path))) {
        headers.set("Authorization", `Bearer ${token}`);
      }
    }

    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    try {
      const newAccessToken = await refreshTokens();
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
      console.error("Failed to refresh token:", error);
    }
  }

  return result;
};

export const baseApi = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ["AUTH", "SHOP"],
  reducerPath: "baseApi",
  endpoints: () => ({}),
  keepUnusedDataFor: 5000,
});
