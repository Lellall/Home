// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BaseUrl } from '../utils/config';

// sample of tagTypes
const tagTypes = ['AUTH', 'SHOP'];

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BaseUrl }),
  tagTypes,
  reducerPath: 'baseApi',
  endpoints: () => ({}),
  keepUnusedDataFor: 5000,
});

// import { createApi } from "@reduxjs/toolkit/dist/query/react";
