import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { AppRouter } from "./app/app-router.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store  from "./redux/store";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AuthProvider } from "./features/auth/auth.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
          {/* <App /> */}
          {/* <About/> */}
          <AppRouter />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
