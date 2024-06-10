import { baseApi } from '../../../redux/base-api';

export const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTransactions: builder.query({
      query: ({ page }) => ({
        url: `/transactions?page=${page}&size=10`,
      }),
    }),
  }),
});

export const { useGetTransactionsQuery } = transactionApi;
