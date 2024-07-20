import { baseApi } from "../../redux/base-api";
import { BaseUrl } from "../../utils/config";

export const bundleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPackage: builder.query({
      query: () => ({
        url: `/bundles`,
      }),
    }),
  }),
});

export const { useGetPackageQuery } = bundleApi;
