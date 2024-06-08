import { baseApi } from "../../redux/base-api";
import { BaseUrl } from "../../utils/config";

export const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params) => ({
        url: `${BaseUrl}/products`,
        params,
      }),
    }),
    getCategories: builder.query({
      query: (params) => ({
        url: `${BaseUrl}/categories/all-categories`,
        params,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery } = productsApi;
