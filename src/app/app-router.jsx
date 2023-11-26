import { Routes, BrowserRouter, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import AppLayout from "./app-layout";
import { appPaths } from "./app-paths";
import Landing from '../App';

const theme = createTheme({
    typography : {
        fontFamily: 'Raleway, Open Sans'
    }
})
export function AppRouter() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                <Route path={appPaths.landing} element={<Landing />} />
                {/* SHARED LAYOUT */}
                    <Route path="/" element={<AppLayout />}>

                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>

    );
}