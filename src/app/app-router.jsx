import { useReducer } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import AppLayout from "./app-layout";
import UserLayout from "./user-layout";
import { appPaths } from "./app-paths";
import Landing from "../App";
import { Shop, Shops, Profile, UserNotifications, UserOrders, Favorites } from "../features";
import reducer from "../reducer/reducer";
import cartContext from "../AppContext";
import SplitLogin from "../features/auth/signin/signin";
import SignUp from "../features/auth/signup/signup";
import VerificationPage from "../features/verification/postSignUp";
import NewShop from "../features/newshop/newShop";
import NewStore from "./newStore";
// import SingleProductPage from "../features/newshop/singleProduct";
import Product from "../features/newshop/singleProduct";
import CartPage from "../features/newshop/cart";
import BillingAddress from "../features/newshop/BillingAddress";

const theme = createTheme({
  typography: {
    fontFamily: "Raleway, Open Sans",
  },
});
export function AppRouter() {
  const [state, dispatch] = useReducer(reducer, []);

  console.log({ state });
  return (
    <ThemeProvider theme={theme}>
      <cartContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            {/* SHARED LAYOUT */}
            <Route path={appPaths.shop} element={<AppLayout />}>
              <Route index element={<Shops />} />
              <Route path={appPaths.getShop()} element={<Shop />} />
            </Route>
            <Route path={appPaths.profile} element={<UserLayout />}>
              <Route index element={<Profile />} />
              <Route path={appPaths.notification} element={<UserNotifications />} />
              <Route path={appPaths.myOrders} element={<UserOrders />} />
              <Route path={appPaths.favorites} element={<Favorites />} />
            </Route>
            <Route path="/login" element={<SplitLogin />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/success" element={<VerificationPage />} />
            <Route path="/new-shop" element={<NewStore />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/billing" element={<BillingAddress />} />
            <Route path="/new-shop/product/:id" element={<Product />} />
          </Routes>
        </BrowserRouter>
      </cartContext.Provider>
    </ThemeProvider>
  );
}
