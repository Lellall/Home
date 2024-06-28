import { useReducer } from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import AppLayout from './app-layout';
import UserLayout from './user-layout';
import { appPaths } from './app-paths';
import Landing from '../App';
import {
  Shop,
  Shops,
  Profile,
  UserNotifications,
  UserOrders,
  Favorites,
} from '../features';
import reducer from '../reducer/reducer';
import cartContext from '../AppContext';
import SplitLogin from '../features/auth/signin/signin';
import SignUp from '../features/auth/signup/signup';
import VerificationPage from '../features/verification/postSignUp';
import NewShop from '../features/newshop/newShop';
import NewStore from './newStore';
// import SingleProductPage from "../features/newshop/singleProduct";
import Product from '../features/newshop/singleProduct';
import CartPage from '../features/newshop/cart';
import BillingAddress from '../features/newshop/BillingAddress';
import LookingForRidersPage from './rider';
import ProfessionalTable from './incomplete';
import AdminLogin from '../features/auth/signin/admin';
import AdminLayout from './admin';
import OrderForRider from './orderForRider';
import TransactionStatusPage from './transaction';
import Summary from './tempSummary';
import PrivacyPolicy from './privacy';
import Products from '../features/user/products';
import Transaction from '../features/user/transaction/transaction';
import SingleBundle from './bundle/singleBundle';
import ForgotPassword from '../features/auth/signin/forgot-password';
import NewPassword from '../features/auth/signin/new-password';

const theme = createTheme({
  typography: {
    fontFamily: 'Raleway, Open Sans',
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
            <Route path='/' element={<NewStore />} />
            {/* SHARED LAYOUT */}
            <Route path={appPaths.shop} element={<AppLayout />}>
              <Route index element={<Shops />} />
              <Route path={appPaths.getShop()} element={<Shop />} />
            </Route>
            <Route path={appPaths.profile} element={<UserLayout />}>
              <Route index element={<Profile />} />
              <Route
                path={appPaths.notification}
                element={<UserNotifications />}
              />
              <Route path={appPaths.myOrders} element={<UserOrders />} />
              <Route path={appPaths.favorites} element={<Favorites />} />
            </Route>
            <Route path='/check' element={<AdminLayout />}>
              <Route index element={<OrderForRider />} />
              <Route path={appPaths.products} element={<Products />} />
              <Route path={appPaths.transaction} element={<Transaction />} />
              <Route path={appPaths.myOrders} element={<UserOrders />} />
              <Route path={appPaths.favorites} element={<Favorites />} />
            </Route>
            <Route path='/login' element={<SplitLogin />} />
            <Route path='/forgot' element={<ForgotPassword />} />
            <Route path='/users/password-reset' element={<NewPassword />} />
            <Route path='/admin' element={<AdminLogin />} />
            <Route path='/register' element={<SignUp />} />
            <Route path='/success' element={<VerificationPage />} />
            <Route path='/new-shop' element={<NewStore />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/billing' element={<BillingAddress />} />
            <Route path='/rider' element={<LookingForRidersPage />} />
            <Route path='/summary' element={<Summary />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/check' element={<ProfessionalTable />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/bundle/:id' element={<SingleBundle />} />
            <Route
              path='/checkout/status'
              element={<TransactionStatusPage />}
            />
          </Routes>
        </BrowserRouter>
      </cartContext.Provider>
    </ThemeProvider>
  );
}
