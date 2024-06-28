import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { usePostLoginMutation, usePostSignupMutation } from './auth-api';
import { appPaths } from '../../app/app-paths';
import localforage from 'localforage';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import axios from 'axios';

const authContext = createContext({});

const saveDataToLocalForage = (data) => {
  const { access_token, refresh_token, user } = data;
  try {
    localforage.setItem('accessToken', access_token);
    localforage.setItem('refreshToken', refresh_token);
    localforage.setItem('user', user);
  } catch (error) {
    console.error('Error saving data to localForage:', error);
    throw error;
  }
};

export function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const getUser = async () => {
    try {
      const value = await localforage.getItem('user');
      return value;
    } catch (err) {
      console.error('Error getting user', err);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getUser();
        setUser(user);
        const token = await localforage.getItem('accessToken');
        setAccessToken(token);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchData();
  }, []);

  const [
    loginReq,
    {
      isLoading: isLoggingIn,
      error: loginError,
      isSuccess: isLoginSuccess,
      data: loginResponse,
    },
  ] = usePostLoginMutation();
  const [
    registerReq,
    {
      isLoading: isRegistering,
      error: registerError,
      isSuccess: isRegisterSuccess,
      data: registerResponse,
    },
  ] = usePostSignupMutation();

  useEffect(() => {
    if (loginError?.data) {
      toast.error(`${loginError?.data?.message}`);
    }
  }, [loginError]);
  useEffect(() => {
    if (registerError?.data) {
      toast.error(`${registerError?.data?.message}`);
    }
  }, [registerError]);

  const login = async (data) => {
    const dataform = { ...data, role: 'CONSUMER' };
    await loginReq(dataform);
  };
  const register = async (data) => {
    const dataform = { ...data, role: 'CONSUMER', platformType: 'WEB' };
    await registerReq(dataform);
  };

  useEffect(() => {
    const registerRes = registerResponse;
    if (registerRes) {
      Cookies.set('authToken', registerRes.access_token, {
        secure: false,
        sameSite: 'strict',
        path: '/',
      });
      saveDataToLocalForage(registerRes);
    }
  }, [registerResponse]);

  useEffect(() => {
    const loginRes = loginResponse;
    if (loginRes) {
      Cookies.set('authToken', loginRes.access_token, {
        secure: false,
        sameSite: 'strict',
        path: '/',
      });
      saveDataToLocalForage(loginRes);
    }
  }, [loginResponse]);

  const logout = useCallback(() => {
    Cookies.remove('authToken');
    localforage.removeItem('accessToken');
    localforage.removeItem('refreshToken');
    localforage.removeItem('user');
    window.location.replace(appPaths.login);
  }, []);

  const isAuthenticated = () => {
    const authToken = Cookies.get('authToken');
    return !!authToken;
  };

  const refreshAccessToken = async () => {
    try {
      const refreshToken = await localforage.getItem('refreshToken');
      if (!refreshToken) throw new Error('No refresh token found');
      const response = await axios.post('/auth/refresh-token', {
        refresh_token: refreshToken,
      });
      const { access_token } = response.data;
      localforage.setItem('accessToken', access_token);
      Cookies.set('authToken', access_token, {
        secure: false,
        sameSite: 'strict',
        path: '/',
      });
      setAccessToken(access_token);
      return access_token;
    } catch (error) {
      console.error('Failed to refresh access token:', error);
      logout();
      return null;
    }
  };

  const isTokenExpired = (token) => {
    if (!token) return true;
    const [, payload] = token.split('.');
    const decoded = JSON.parse(atob(payload));
    return decoded.exp * 1000 < Date.now();
  };

  const fetchWithAuth = async (url, options = {}) => {
    let token = accessToken;
    if (isTokenExpired(token)) {
      token = await refreshAccessToken();
      if (!token) {
        throw new Error('Unable to refresh token');
      }
    }
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };
    return fetch(url, options);
  };

  return (
    <authContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isAuthenticated,
        isLoggingIn,
        isLoginSuccess,
        loginError,
        isRegistering,
        registerError,
        registerResponse,
        isRegisterSuccess,
        fetchWithAuth,
        isTokenExpired,
        refreshAccessToken,
        setUser,
        loginResponse,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
}

export const useAuth = () => useContext(authContext);
