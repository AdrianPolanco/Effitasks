import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing/Landing";
import SignUp from "../pages/SignUp/SignUp";
import { ThemeProvider } from "@emotion/react";
import { mainTheme } from "../features/themes/app/mainTheme";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <ThemeProvider theme={mainTheme}>
                <Landing />
            </ThemeProvider>
        ),
    },
    {
        path: "/register",
        element: (
            <ThemeProvider theme={mainTheme}>
                <SignUp />
            </ThemeProvider>
        ),
    },
    {
        path: "/login",
        element: <div>Login</div>,
    },
]);
