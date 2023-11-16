export const appPaths = {
    // PUBLIC
    login: "/login",
    accountVerification: "/account-verification",
    passwordReset: "/reset-request",
    forgotPassword: "/forgot-password",
    landing: "/landing",

    // STORE
    store: "/store",
    getStore: (id = ":id") => `/store/${id}`,

};
