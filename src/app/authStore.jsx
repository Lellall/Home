// authStore.js
import create from "zustand";
import axios from "axios";
import localforage from "localforage";
import { BaseUrl } from "../utils/config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useAuthStore = create((set) => ({
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  isLoading: false,
  user: null,

  login: async (data) => {
    try {
      set({ isLoading: true });
      const response = await axios.post(`${BaseUrl}/auth/login`, {
        ...data,
        role: "CONSUMER",
      });

      const { access_token, refresh_token, user } = response.data;
      set({
        accessToken: access_token,
        refreshToken: refresh_token,
        isAuthenticated: true,
        user,
        isLoading: false,
      });
      await localforage.setItem("accessToken", access_token);
      await localforage.setItem("refreshToken", refresh_token);
      await localforage.setItem("user", user);
    } catch (error) {
      if (error.response) {
        toast.error(`${error?.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      set({ isLoading: false });
      throw error;
    }
  },
  adminLogin: async (data) => {
    try {
      set({ isLoading: true });
      const response = await axios.post(`${BaseUrl}/auth/login`, {
        ...data,
        role: "ADMIN",
      });

      const { access_token, refresh_token, user } = response.data;
      set({
        accessToken: access_token,
        refreshToken: refresh_token,
        isAuthenticated: true,
        user,
        isLoading: false,
      });
      await localforage.setItem("accessToken", access_token);
      await localforage.setItem("refreshToken", refresh_token);
      await localforage.setItem("user", user);
    } catch (error) {
      if (error.response) {
        toast.error(`${error?.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      set({ isLoading: false });
      throw error;
    }
  },

  register: async (userData) => {
    try {
      set({ isLoading: true });
      const response = await axios.post(`${BaseUrl}/auth/register`, userData);

      const { access_token, refresh_token, user } = response.data;
      set({
        accessToken: access_token,
        refreshToken: refresh_token,
        isAuthenticated: true,
        user,
        isLoading: false,
      });
      await localforage.setItem("accessToken", access_token);
      await localforage.setItem("refreshToken", refresh_token);
      await localforage.setItem("user", user);
    } catch (error) {
      // alert(1)
      // toast.error(`Error Message Here`, {
      //   position: toast.POSITION.TOP_RIGHT,
      // });
      set({ isLoading: false });
      
     
      throw error;
    }
  },

  refreshAccessToken: async () => {
    try {
      const refreshToken = await localforage.getItem("refreshToken");
      if (refreshToken) {
        const response = await axios.post(`${BaseUrl}/auth/refresh-token`, {
          refreshToken: refreshToken,
          role: "CONSUMER",
        });
        const { access_token } = response.data;
        set({ accessToken: access_token });
        await localforage.setItem("accessToken", access_token);
      }
    } catch (error) {
      console.error("Failed to refresh access token:", error.message);
      // Handle token refresh failure, possibly redirect to login
    }
  },
  refreshAccessTokenAdmin: async () => {
    try {
      const refreshToken = await localforage.getItem("refreshToken");
      if (refreshToken) {
        const response = await axios.post(`${BaseUrl}/auth/refresh-token`, {
          refreshToken: refreshToken,
          role: "ADMIN",
        });
        const { access_token } = response.data;
        set({ accessToken: access_token });
        await localforage.setItem("accessToken", access_token);
      }
    } catch (error) {
      console.error("Failed to refresh access token:", error.message);
      // Handle token refresh failure, possibly redirect to login
    }
  },

  logout: async () => {
    set({
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      user: null,
    });
    await localforage.removeItem("accessToken");
    await localforage.removeItem("refreshToken");
    await localforage.removeItem("user");
  },

  checkAuth: async () => {
    const accessToken = await localforage.getItem("accessToken");
    if (accessToken) {
      set({ accessToken, isAuthenticated: true });
    }
  },

  // Function for initiating Google OAuth login
  // authStore.js
  googleLogin: () => {
    try {
      // Redirect the user to the Google OAuth authorization URL
      window.location.href = `${BaseUrl}/auth/oauth2/google/authorize?role=CONSUMER&platform_type=WEB&callback_url=%2Fshop`;
    } catch (error) {
      console.error("Google login error:", error);
    }
  },
}));

export default useAuthStore;
