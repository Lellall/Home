// @ts-nocheck
import { baseApi as api } from "../../redux/base-api";
import { setAuthState, logout } from './auth.slice';
import { encodeInterpolatedUrl } from "../../utils/encoder";


// export const authApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     login: builder.query({
//       query: () => "auth/login",
//       async onQueryStarted(_args, { queryFulfilled: qf }) {
//         qf.then((res) => {
//           console.log(res);
//         }).catch((err) => console.log(err));
//       },
//     }),
//     getBundles: builder.query({
//       query: () => ({
//         url: `/bundles`,
//       }),
//     }),
//     postLogin: builder.mutation({
//       query: (data) => ({
//         url: "auth/login",
//         method: "post",
//         body: data,
//       }),
//     }),
//     requestPasswordReset: builder.mutation({
//       query: (email) => ({
//         url: `/auth/password-reset/request`,
//         method: "POST",
//         params: { email, role: "CONSUMER" },
//         headers: { accept: "*/*" },
//         body: "",
//       }),
//     }),
//     resetPassword: builder.mutation({
//       query: ({ email, token, newPassword, confirmPassword, role }) => ({
//         url: `/auth/password-reset`,
//         method: "PUT",
//         params: { email, token, role },
//         headers: { "Content-Type": "application/json" },
//         body: { newPassword, confirmPassword },
//       }),
//     }),
//     // forgotPassword: builder.mutation({
//     //   query: ({ email }) => {
//     //     if (!email) {
//     //       return
//     //     }
//     //     return {
//     //       url: encodeInterpolatedUrl`auth/password-reset/request?email=yahay.me@gmail.com`,
//     //       method: 'POST',
//     //       data: null
//     //     };
//     //   },
//     // }),

//     postSignup: builder.mutation({
//       query: (data) => ({
//         url: "auth/register",
//         method: "post",
//         body: data,
//       }),
//       async onQueryStarted(_args, { queryFulfilled: qf }) {
//         qf.then((res) => {
//           console.log(res);
//         }).catch((err) => console.log(err));
//       },
//     }),
//   }),
// });


const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postLogin: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
      transformResponse: (response: { access_token: string; refresh_token: string }, meta, arg) => {
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('refresh_token', response.refresh_token);
        localStorage.setItem('user', response.user);
        return response;
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setAuthState({ isAuthenticated: true, accessToken: data.access_token, user: data.user, refreshToken: data.refresh_token }));
        } catch (err) {
          console.error(err);
        }
      },
    }),
    getBundles: builder.query({
      query: () => ({
        url: `/bundles`,
      }),
    }),
    postSignup: builder.mutation({
      query: (credentials) => ({
        url: '/auth/register',
        method: 'POST',
        body: credentials,
      }),
      transformResponse: (response: { access_token: string; refresh_token: string }, meta, arg) => {
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('refresh_token', response.refresh_token);
        localStorage.setItem('user', response.user);
        return response;
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setAuthState({ isAuthenticated: true, accessToken: data.access_token, user: data.user, refreshToken: data.refresh_token }));
        } catch (err) {
          console.error(err);
        }
      },
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
    refreshToken: builder.mutation({
      query: () => ({
        url: '/auth/refresh-token',
        method: 'POST',
        body: {
          refreshToken: localStorage.getItem('refresh_token') || 'null',
          role: "CONSUMER"
        },
      }),
      transformResponse: (response: { access_token: string }) => {
        localStorage.setItem('access_token', response.access_token);
        return response;
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setAuthState({ isAuthenticated: true, accessToken: data.access_token, user: data.user, refreshToken: localStorage.getItem('refresh_token') }));
        } catch (err) {
          console.error(err);
          dispatch(logout());
        }
      },
    }),
    logout: builder.mutation({
      // @ts-ignore
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
      transformResponse: () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user');
      },
      async onQueryStarted(arg, { dispatch }) {
        dispatch(logout());
      },
    }),
  }),
});
interface AuthApi {
  useLoginMutation: () => void;
  useRefreshTokenMutation: () => void;
  useLogoutMutation: () => void;
  useResetPasswordMutation: () => void;
  useRequestPasswordResetMutation: () => void;
  usePostSignupMutation: () => void;
  useGetBundlesQuery: () => void;
  usePostLoginMutation: () => void;
}


export const {
  useLoginMutation,
  useRequestPasswordResetMutation,
  useResetPasswordMutation,
  useRefreshTokenMutation,
  useLogoutMutation,
  usePostSignupMutation,
  useGetBundlesQuery,
  usePostLoginMutation,
}: AuthApi = authApi;
