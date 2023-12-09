import { baseApi } from '../../redux/base-api';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.query({
      query: () => 'auth/login',
      //   providesTags: [''],
      async onQueryStarted(_args, { queryFulfilled: qf }) {
        qf.then((res) => {
          console.log(res);
        }).catch((err) => console.log(err));
      },
    }),
    postLogin: builder.mutation({
      query: (data) => ({
        url: 'auth/login',
        method: 'post',
        body: data,
      }),
      //   invalidatesTags: ['student'],
    }),
    postSignup: builder.mutation({
      query: (data) => ({
        url: 'auth/register',
        method: 'post',
        body: data,
      }),
      //   invalidatesTags: ['student'],
      async onQueryStarted(_args, { queryFulfilled: qf }) {
        qf.then((res) => {
          console.log(res);
        }).catch((err) => console.log(err));
      },
    }),
  }),
  //   overrideExisting: true,
});

export const { usePostLoginMutation, useLoginQuery, usePostSignupMutation } =
  authApi;
