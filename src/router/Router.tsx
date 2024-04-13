import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/landing/Landing";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
    },
    {
        path: "/register",
        element: <div>Register</div>,
    },
    {
        path: "/login",
        element: <div>Login</div>,
    },
]);
