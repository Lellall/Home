import { baseApi } from "../../redux/base-api";

export const shopApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getShops: builder.query({
      query: (params) => ({
        url: "/shops",
        params,
      }),
    }),
    getShop: builder.query({
      query: (shopId) => ({
        url: `/shops/${encodeURIComponent(shopId)}`,
      }),
      providesTags: ["SHOP"],
    }),
  }),
});

export const { useGetShopQuery, useGetShopsQuery } = shopApi