import { createBrowserRouter } from "react-router-dom";
import App from '../App.jsx';

import Login from "../pages/Auth/Login";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";
import AuthorProfile from "../pages/Author/AuthorProfile.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "authors/:slug",
                element: <AuthorProfile />,
            },
            {
                path: "*",
                element: <NotFound />,
            }
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <div >Register</div>,
    },
    {
        path: "*",
        element: <NotFound />,
    }
]);

