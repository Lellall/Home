export const appPaths = {
    // PUBLIC
    login: "/login",
    accountVerification: "/account-verification",
    passwordReset: "/reset-request",
    forgotPassword: "/forgot-password",
    landing: "/landing",

    // SHOP
    shop: "/shop",
    getShop: (id = ":id") => `/shop/${id}`,

};
