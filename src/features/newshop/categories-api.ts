import { baseApi } from '../../redux/base-api';

export const categoriesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: (page = 0) =>
        `categories/all-categories?pageNo=${page}&pageSize=10`,
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
