import {
  createBrowserRouter
} from "react-router";
import App from '../App.jsx';

import Login from "../pages/Auth/Login";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";

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
  }
]);

