import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { baseApi } from "./base-api";

import { setupListeners } from '@reduxjs/toolkit/query';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};
const combineReducer = combineReducers({
  //  add  combineReducers
  [baseApi.reducerPath]: baseApi.reducer,
});
const rootReducer = (state, action) => {
  if (action.type === 'clear') {
    localStorage.removeItem(`persist:${'accessToken'}`); // remove something accessToken
    state = {};
  }
  return combineReducer(state, action);
};

// const middleWares = [authApi.middleware];

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});
export const persistor = persistStore(store);
setupListeners(store.dispatch);
