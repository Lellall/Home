import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { createBaseQuery } from '../lib/base-query';
import { BaseUrl } from '../utils/config';

// sample of tagTypes
const tagTypes = ['AUTH', 'SHOP'];

export const baseApi = createApi({
  baseQuery: createBaseQuery({ baseUrl: BaseUrl }),
  tagTypes,
  reducerPath: 'baseApi',
  endpoints: () => ({}),
  keepUnusedDataFor: 5000,
});
