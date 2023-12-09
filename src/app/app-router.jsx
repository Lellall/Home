import { Routes, BrowserRouter, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import AppLayout from "./app-layout";
// import { appPaths } from "./app-paths";
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
          <Route path="/shops" element={<AppLayout />}>
          <Route path="shops" element={<Shops />} />
            <Route path="shop" element={<Shop />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
