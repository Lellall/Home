import { baseApi } from '../../redux/base-api';

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ page, categoryId }) => ({
        url: `/products?page=${page}&size=10&categoryId=${categoryId}`,
      }),
    }),
    searchProducts: builder.query({
      query: ({ val }) => ({
        url: `/products?page=0&size=10&filter=${val}`,
      }),
    }),
    updateProduct: builder.mutation({
      query: (data, id) => ({
        url: `/products/${id}`,
        method: 'patch',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useSearchProductsQuery,
  useUpdateProductMutation,
} = productApi;
