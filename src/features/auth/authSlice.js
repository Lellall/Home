import { createSlice } from '@reduxjs/toolkit';
// import { LoginResponse } from '../../screens/Authentication/auth-api';
import { useSelector } from 'react-redux';

export const initialState = {
  refresh_token: '',
  access_token: '',
  token_type: '',
  isLogin: false,
  user: {
    id: '',
    username: '',
    firstName: '',
    lastName: '',
    role: '',
    isEmailVerified: false,
    registrationSource: '',
    streetName: '',
    houseNumber: '',
    apartmentName: '',
    estate: '',
    poBox: '',
    address: {
      streetName: '',
      houseNumber: '',
      apartmentName: '',
      estate: '',
      poBox: '',
      region: '',
    },
  },
};

const setAuthHandler = (state, { payload: auth }) => {
  state = auth;
  return state;
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: setAuthHandler,
    logout: () => {
      return initialState;
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export const useUserSelector = () => {
  return useSelector((state) => state.user);
};
