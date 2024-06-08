import { baseApi } from "../../redux/base-api";
import { encodeInterpolatedUrl } from "../../utils/encoder";

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
    requestPasswordReset: builder.mutation({
      query: (email) => ({
        url: `/auth/password-reset/request`,
        method: "POST",
        params: { email, role: "CONSUMER" },
        headers: { accept: "*/*" },
        body: "",
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ email, token, newPassword, confirmPassword, role }) => ({
        url: `/auth/password-reset`,
        method: "PUT",
        params: { email, token, role },
        headers: { "Content-Type": "application/json" },
        body: { newPassword, confirmPassword },
      }),
    }),
    // forgotPassword: builder.mutation({
    //   query: ({ email }) => {
    //     if (!email) {
    //       return
    //     }
    //     return {
    //       url: encodeInterpolatedUrl`auth/password-reset/request?email=yahay.me@gmail.com`,
    //       method: 'POST',
    //       data: null
    //     };
    //   },
    // }),

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
  useRequestPasswordResetMutation,
  useResetPasswordMutation,
} = authApi;
