import { baseApi } from "../../redux/base-api";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.query({
      query: () => "auth/login",
      async onQueryStarted(_args, { queryFulfilled: qf }) {
        qf.then((res) => {
          console.log(res);
        }).catch((err) => console.log(err));
      },
    }),
    postLogin: builder.mutation({
      query: (data) => ({
        url: "auth/login",
        method: "post",
        body: data,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: "users/password-reset-request",
        method: "post",
        body: data,
      }),
    }),
    postSignup: builder.mutation({
      query: (data) => ({
        url: "auth/register",
        method: "post",
        body: data,
      }),
      async onQueryStarted(_args, { queryFulfilled: qf }) {
        qf.then((res) => {
          console.log(res);
        }).catch((err) => console.log(err));
      },
    }),
  }),
});

export const {
  usePostLoginMutation,
  useLoginQuery,
  usePostSignupMutation,
  useForgotPasswordMutation,
} = authApi;
