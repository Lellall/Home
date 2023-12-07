export const appPaths = {
    // PUBLIC
    login: "/login",
    accountVerification: "/account-verification",
    passwordReset: "/reset-request",
    forgotPassword: "/forgot-password",
    landing: "/landing",

    // SHOP
    store: "/shop",
    getStore: (id = ":id") => `/shop/${id}`,

};
