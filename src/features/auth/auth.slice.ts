// src/features/auth/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  isExpired: boolean; 
  user?: any;
}

const initialState: AuthState = {
  isAuthenticated: !!localStorage.getItem('access_token'),
  accessToken: localStorage.getItem('access_token'),
  refreshToken: localStorage.getItem('refresh_token'),
  isExpired: false,
  user: localStorage.getItem('user')
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<AuthState>) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isExpired = action.payload.isExpired;
      state.user = action.payload.user;
    },
    setSessionExpired: (state, action: PayloadAction<boolean>) => {
      state.isExpired = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.accessToken = null;
      state.refreshToken = null;
      state.user = null;
      state.isExpired = false;
      localStorage.removeItem('access_token');
      localStorage.removeItem('user');
      localStorage.removeItem('refresh_token');
    },
  },
});

export const { setAuthState, setSessionExpired, logout } = authSlice.actions;
export default authSlice.reducer;
