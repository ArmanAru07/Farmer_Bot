import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import ShoppingPage from "../Pages/Shopping/ShoppingPage/ShoppingPage";
import Therapy from "../Pages/Therapy/Therapy";
import HeaderTest from "../Pages/HeaderTest";
import Header from "../Pages/Test";
import { LocalCartLoader } from '../Utilities/CartLocalStorage'
import CartPage from "../Pages/Shopping/Cart/CartPage";
import Test from "../Pages/Test";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Login_2 from "../Pages/Login_2/Login_2";
import PrivateRoute from "./PrivateRoute";


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
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/login2",
                element: <Login_2></Login_2>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/therapy",
                element: <PrivateRoute><Therapy></Therapy></PrivateRoute>,
                loader: async ({ params }) => fetch("Therapy.json")
            },
            {
                path: "/shoppingPage",
                element: <ShoppingPage></ShoppingPage>,
                loader: async ({ params }) => fetch("Books.json"),
            },
            {
                path: "/cart",
                element: <CartPage></CartPage>,
                loader: LocalCartLoader
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
    {
        path: "/test",
        element: <Test></Test>,
    },
]);