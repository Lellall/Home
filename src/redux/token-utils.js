// token-utils.js
import localForage from "localforage";
import { BaseUrl } from "../utils/config";
import localforage from "localforage";
import { jwtDecode } from "jwt-decode";

export const getAccessToken = async () => {
  const token = await localForage.getItem("accessToken");
  return await token;
};

export const getRefreshToken = async () => {
  return await localForage.getItem("refreshToken");
};

export const setAccessToken = async (token) => {
  await localForage.setItem("accessToken", token);
};

export const setRefreshToken = async (token) => {
  await localForage.setItem("refreshToken", token);
};
export const isTokenExpired = async (token) => {
  if (!token) return true;
  const { exp } = jwtDecode(token);
  return Date.now() >= exp * 1000;
};

export const refreshTokens = async () => {
  const refreshToken = await localforage.getItem("refreshToken");
  const response = await fetch(`${BaseUrl}/auth/refresh-token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      refreshToken: refreshToken,
      role: "CONSUMER",
    }),
  });

  if (response.ok) {
    const { access_token, refresh_token, user } = await response.json();
    await localforage.setItem("accessToken", access_token);
    await localforage.setItem("refreshToken", refresh_token);
    await localforage.setItem("user", user);
    return access_token;
  } else {
    throw new Error("Unable to refresh token");
  }
};
