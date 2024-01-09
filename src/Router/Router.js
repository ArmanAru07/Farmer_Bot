import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blog/Blogs";
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
import AddProducts from "../../src/Pages/Deshbord/AddProducts/AddProducts";
import Deshbord from "../Pages/Deshbord/Dashboard";
import UpdateProduct from "../../src/Pages/Deshbord/UpdateProduct/UpdateProduct";
import MyProducts from "../../src/Pages/Deshbord/MyProduct/MyProducts";
import MyProfile from "../../src/Pages/Deshbord/MyProfile/MyProfile";
import Description from "../Pages/Shopping/Description/Description";
import MyReviews from "../Pages/Deshbord/MyReviews/MyReviews";
import Appointment from "../Pages/Appointment/Appointment";
import AddDoctor from "../Pages/Deshbord/AddDoctor/AddDoctor";
import ManageDoctor from "../Pages/Deshbord/ManageDoctor/ManageDoctor";
import AllUser from "../Pages/Deshbord/AllUser/AllUser";
import ManageProduct from "../Pages/Deshbord/ManageProduct/ManageProduct";
import MyAppointemnt from "../Pages/Deshbord/MyAppointemnt/MyAppointemnt";
import Contact from "../Pages/Contact/Contact";
import Post from "../Pages/Post/Post";
import AIAssistant from "../Pages/AIAssistant/AIAssistant";
import Tutorial from "../Pages/Tutorial/Tutorial";
import Payment from "../Pages/Shopping/Payment/Payment";
import FullPostPage from "../Pages/Post/FullPostPage";
import DashMain from "../Pages/Deshbord/DashMain/DashMain";
import EmptyDash from "../Pages/Deshbord/EmptyDash";
import ManageSeller from "../Pages/Deshbord/ManageSeller/ManageSeller";
import DocAppointment from "../Pages/Deshbord/DocAppointment/DocAppointment";

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
                path: "/tutarial",
                element: <Tutorial></Tutorial>,
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
                loader: async () => fetch(`Therapy.json`),
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
                path: "/cart",
                element: <CartPage></CartPage>,
                loader: LocalCartLoader
            },
            {
                path: "/payment",
                element: <Payment></Payment>,

            },
            {
                path: "/updateProduct/:id",
                element: <UpdateProduct></UpdateProduct>,
                loader: async ({ params }) => fetch(`http://localhost:4000/product/${params.id}`),
            },
            {
                path: "/appointment",
                element: <PrivateRoute><Appointment></Appointment></PrivateRoute>
            },
            {
                path: "/terms",
                element: <TermsAndConditions></TermsAndConditions>,
            },
            {
                path: "/blog",
                element: <Blogs></Blogs>,
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
            },
            {
                path: "/post",
                element: <PrivateRoute><Post></Post></PrivateRoute>,
            },
            {
                path: "/fullPost/:id",
                element: <FullPostPage></FullPostPage>,
                loader: async ({ params }) => fetch(`http://localhost:4000/postCollection/${params.id}`),
            },
            {
                path: "/aIAssistant",
                element: <AIAssistant></AIAssistant>,
            }
        ]
    },
    {
        path: "/Dashboard",
        element: <PrivateRoute><Deshbord></Deshbord></PrivateRoute>,
        children: [
            {
                path: "/Dashboard",
                element: <EmptyDash></EmptyDash>,
            },
            {
                path: "/Dashboard/Main",
                element: <DashMain></DashMain>,
            },
            {
                path: "/Dashboard/addDoctor",
                element: <AddDoctor></AddDoctor>,
            },
            {
                path: "/Dashboard/allUser",
                element: <AllUser></AllUser>,
            },
            {
                path: "/Dashboard/manageDoctor",
                element: <ManageDoctor></ManageDoctor>,
            },
            {
                path: "/Dashboard/manageSeller",
                element: <ManageSeller></ManageSeller>,
            },
            {
                path: "/Dashboard/myProduct",
                element: <MyProducts></MyProducts>,
            },
            {
                path: "/Dashboard/MyProfile",
                element: <MyProfile></MyProfile>,
            },
            {
                path: "/Dashboard/addproducts",
                element: <AddProducts></AddProducts>,
            },
            {
                path: "/Dashboard/myReviews",
                element: <MyReviews></MyReviews>,
            },
            {
                path: "/Dashboard/manageProduct",
                element: <ManageProduct></ManageProduct>,
            },
            {
                path: "/Dashboard/myApointments",
                element: <MyAppointemnt></MyAppointemnt>,
            },
            {
                path: "/Dashboard/docAppointment",
                element: <DocAppointment></DocAppointment>,
            }
        ]
    },
    {
        path: "*",
        element: <Error></Error>,
    },




]);