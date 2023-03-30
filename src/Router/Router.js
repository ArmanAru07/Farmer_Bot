import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import ShoppingPage from "../Pages/ShoppingPage/ShoppingPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/shoppingPage",
                element: <ShoppingPage></ShoppingPage>,
                loader: async ({ params }) => fetch("Books.json"),
            },

        ]
    },
    {
        path: "/blog",
        element: <Blog></Blog>,
    },
    {
        path: "*",
        element: <Error></Error>,
    }
]);