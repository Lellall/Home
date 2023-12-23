export const appPaths = {
    // PUBLIC
    login: "/login",
    accountVerification: "/account-verification",
    passwordReset: "/reset-request",
    forgotPassword: "/forgot-password",

    // SHOP
    shop: "/shop",
    getShop: (id = ":id") => `/shop/${id}`,

    // USER
    profile: "/account",
    myOrders: "my-orders",
    notification: "notification",
    favorites: "favorites",
    discount: "discount",
    recentlyViewed: "recently-viewed"
};
