import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import ShoppingPage from "../Pages/Shopping/ShoppingPage/ShoppingPage";
import Therapy from "../Pages/Therapy/Therapy";
import { LocalCartLoader } from '../Utilities/CartLocalStorage'
import CartPage from "../Pages/Shopping/Cart/CartPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Login_2 from "../Pages/Login_2/Login_2";
import PrivateRoute from "./PrivateRoute";
import TermsAndConditions from "../Pages/TermsAndConditions/TermsAndConditions";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";
import Test from "../Pages/Test";
import AddProducts from "../../src/Pages/Deshbord/AddProducts/AddProducts";
import Deshbord from "../Pages/Deshbord/Dashboard";
import UpdateProduct from "../../src/Pages/Deshbord/UpdateProduct/UpdateProduct";
import MyProducts from "../../src/Pages/Deshbord/MyProduct/MyProducts";
import MyProfile from "../../src/Pages/Deshbord/MyProfile/MyProfile";
import Description from "../Pages/Shopping/Description/Description";
import MyReviews from "../Pages/Deshbord/MyReviews/MyReviews";


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
                path: "/fpassword",
                element: <ForgetPassword></ForgetPassword>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/therapy",
                element: <PrivateRoute><Therapy></Therapy></PrivateRoute>,
                loader: async () => fetch("Therapy.json")
            },
            {
                path: "/shoppingPage",
                element: <ShoppingPage></ShoppingPage>,
                loader: async () => fetch(`http://localhost:4000/products`),
            },
            {
                path: "/description/:id",
                element: <Description></Description>,
                loader: async ({ params }) => fetch(`http://localhost:4000/product/${params.id}`),
            },
            {
                path: "/Dashboard",
                element: <Deshbord></Deshbord>,
                children: [
                    {
                        path: "myProduct",
                        element: <MyProducts></MyProducts>,
                    },
                    {
                        path: "MyProfile",
                        element: <MyProfile></MyProfile>,
                    },
                    {
                        path: "addproducts",
                        element: <AddProducts></AddProducts>,
                    },
                    {
                        path: "myReviews",
                        element: <MyReviews></MyReviews>,
                    },
                ]

            },
            {
                path: "/cart",
                element: <CartPage></CartPage>,
                loader: LocalCartLoader
            },
            {
                path: "/updateProduct/:id",
                element: <UpdateProduct></UpdateProduct>,
                loader: async ({ params }) => fetch(`http://localhost:4000/product/${params.id}`),
            },
            {
                path: "/terms",
                element: <TermsAndConditions></TermsAndConditions>,
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
            },
            {
                path: "/Test",
                element: <Test></Test>,
            },
        ]
    },

    {
        path: "*",
        element: <Error></Error>,
    },


]);