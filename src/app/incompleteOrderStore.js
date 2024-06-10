import { toast } from 'react-toastify';
import { baseApi } from '../redux/base-api';

export const incompleteOrderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    completeOrder: builder.mutation({
      query: (id) => ({
        url: `/orders/complete/${id}`,
        method: 'PUT',
      }),
      async onQueryStarted(_args, { queryFulfilled: qf }) {
        qf.then(() =>
          toast.success(`Order completed successfully`, {
            position: 'top-right',
          })
        ).catch((err) => {
          toast.error(err.error.data, {
            position: 'top-right',
          });
        });
      },
    }),
    getIncompleteOrders: builder.query({
      query: () => ({
        url: `transactions/incomplete-order`,
      }),
    }),
  }),
});

export const { useCompleteOrderMutation, useGetIncompleteOrdersQuery } =
  incompleteOrderApi;
