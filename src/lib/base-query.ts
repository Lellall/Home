import { Mutex } from 'async-mutex';
import axios, { AxiosError } from 'axios';
import { retry } from '@reduxjs/toolkit/dist/query';

const mutex = new Mutex();

export function createStaggeredBaseQuery(
  baseUrl: string,
  maxRetries: number = 5
) {
  return retry(createBaseQuery({ baseUrl }), { maxRetries });
}

export function createBaseQuery(opts) {
  const axiosInstance = axios.create({ baseURL: opts.baseUrl });
  axiosInstance.interceptors.request.use(requestInterceptor);

  return async function baseQuery(requestConfig, api) {
    try {
      await mutex.waitForUnlock();
      const resp = await axiosInstance(requestConfig);
      return { data: resp.data };
    } catch (error) {
      const err = error as AxiosError;
      const token = localStorage.getItem('access_token');

      if (err.response?.status === 401 && token) {
        const refreshToken = localStorage.getItem('refresh_token'); // refresh token
        const tokenRefreshUrl = `${opts.baseUrl}/authentication/refresh-token/${refreshToken}`;

        if (!mutex.isLocked()) {
          await tokenRefresh(tokenRefreshUrl, api);
        }

        await mutex.waitForUnlock();
        const resp = await baseQuery(requestConfig, api);
        return resp;
      }

      return formatError(error);
    }
  };
}

async function tokenRefresh(url: string, api) {
  const unlock = await mutex.acquire();
  try {
    const resp = await axios.get(url);
    localStorage.setItem('access_token', resp.data.token);
  } catch (err) {
    api.dispatch({ type: 'clear' });
    localStorage.clear();
    window.location.replace('/login');
  } finally {
    unlock();
  }
}

async function requestInterceptor(requestConfig) {
  attachToken(requestConfig.headers);
  return requestConfig;
}

function attachToken(headers) {
  const accessToken = localStorage.getItem('access_token');
  if (accessToken) {
    headers.authorization = `Bearer ${accessToken}`;
  }
}

function formatError(error) {
  if (error.response) {
    const { status, data } = error.response;
    const message = data?.details || error.message;
    return { error: { status, message } };
  }
}
