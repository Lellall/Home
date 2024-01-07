import { useEffect } from "react";
import useAuthStore from "./authStore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();
  const {
    accessToken,
    isAuthenticated,
    isLoading,
    user,
    login,
    register,
    refreshAccessToken,
    logout,
    checkAuth,
    googleLogin
  } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return {
    accessToken,
    isAuthenticated,
    isLoading,
    user,
    login: async (userData) => {
      try {
        await login(userData);
        navigate('/shop')
      } catch (error) {
        // Handle login error
      }
    },
    googleLogin: async (userData) => {
      try {
        await googleLogin();
        // navigate('/shop')
      } catch (error) {
        // Handle login error
      }
    },
    register: async (userData) => {
      try {
        await register(userData);
        navigate('/success')
      } catch (error) {
        console.log(error, "error");
        // toast.success('yeeeees')
      }
    },
    refreshAccessToken: async () => {
      try {
        await refreshAccessToken();
      } catch (error) {
        // Handle refresh token error
      }
    },
    logout: async () => {
      try {
        await logout();
      } catch (error) {
        // Handle logout error
      }
    },
  };
};

export default useAuth;
