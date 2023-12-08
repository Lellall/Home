import { Routes, BrowserRouter, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import AppLayout from "./app-layout";
import { appPaths } from "./app-paths";
import Landing from "../App";
import { Shop, Shops } from "../features/shop";


const theme = createTheme({
  typography: {
    fontFamily: "Raleway, Open Sans",
  },
});
export function AppRouter() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* SHARED LAYOUT */}
          <Route path={appPaths.shop} element={<AppLayout />}>
            <Route index element={<Shops />} />
            <Route path=":shopId" element={<Shop />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
