import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import ShoppingPage from "../Pages/ShoppingPage/ShoppingPage";
import Therapy from "../Pages/Therapy/Therapy";
import HeaderTest from "../Pages/HeaderTest";
import Header from "../Pages/Header";

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
                path: "/therapy",
                element: <Therapy></Therapy>,
                loader: async ({ params }) => fetch("Therapy.json")
            },
            {
                path: "/shoppingPage",
                element: <ShoppingPage></ShoppingPage>,
                loader: async ({ params }) => fetch("Books.json"),
            },
            {
                path: "/cssheader",
                element: <Header></Header>,
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
    },
    {
        path: "/daisyui",
        element: <HeaderTest></HeaderTest>,
    },
]);