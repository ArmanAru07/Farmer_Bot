import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
    },
    {
        path: "/blog",
        element: <Blog></Blog>,
    },
    {
        path: "*",
        element: <h1>404 Error</h1>,
    }
]);