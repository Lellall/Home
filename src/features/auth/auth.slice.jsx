import { createSlice } from '@reduxjs/toolkit';
// import { APP_PREFIX } from "@/utils/constants";
// import storage from "redux-persist/lib/storage";
import { useSelector } from 'react-redux';

const initialState = { session: { timeRemaining: 0, isExpired: true } };

const setAuthHandler = (state, { payload: auth }) => {
  state = { ...state, ...auth };
  return state;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: setAuthHandler,
    clearAuth() {
      //   storage.removeItem(APP_PREFIX);
      return initialState;
    },
    setTokens(state, { payload: tokens }) {
      state.token = tokens.token;
      state.refreshToken = tokens.refreshToken;
    },
    updateSessionTime(state, { payload: newTimeInSec }) {
      state.session.timeRemaining = newTimeInSec;
    },
    setSessionExpired(state, { payload: isExpired }) {
      state.session.isExpired = isExpired;
    },
  },
});

export const {
  setAuth,
  setTokens,
  clearAuth,
  updateSessionTime,
  setSessionExpired,
} = authSlice.actions;
export const useAuthSlice = () => useSelector((state) => state.auth);
