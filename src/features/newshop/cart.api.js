// cart-api.js
import { baseApi } from "../../redux/base-api";

export const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    orderItems: builder.mutation({
      query: (data) => ({
        url: "/orders",
        method: "POST",
        body: data,
      }),
    }),
    getSummary: builder.query({
      query: (id) => ({
        url: `/summary?id=${id}`,
      }),
    }),
  }),
});

export const { useOrderItemsMutation, useGetSummaryQuery } = cartApi;
