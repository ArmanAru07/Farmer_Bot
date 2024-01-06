import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import MyProducts from './MyProduct/MyProducts';
import Header from '../../Shared/Header';
import { FaEdit, FaUserEdit } from "react-icons/fa";
import { BsCheck2Square } from "react-icons/bs";
import { BiListCheck } from "react-icons/bi";
import Footer from '../../Shared/Footer';

const Dashboard = () => {

    const { user } = useContext(AuthContext);
    const [showDrawer, setShowDrawer] = useState(true);
    const [showDropdown, setShowDropdown] = useState(false);


    const toggleDrawer = () => {
        setShowDrawer(!showDrawer);
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };




    return (
        <div>
            <Header></Header>

            <button onClick={toggleDrawer} class="lg:hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
                Show Drawer
            </button>

            <div className='grid grid-cols-5 mb-1 pb-20' style={{ backgroundColor: '#111827' }}>

                <div className='col-span-1'>
                    {window.innerWidth > 800 || showDrawer ? (
                        // give fixed in the class 
                        <div id="drawer-navigation" className={`  ${showDrawer ? '' : '-translate-x-full'}   lg:left-2  z-40 h-screen p-4 overflow-y-auto transition-transform   w-60 bg-black`} tabIndex="-1" aria-labelledby="drawer-navigation-label">

                            {/* Mobile screen hide button */}
                            <button onClick={toggleDrawer} type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" class="lg:hidden text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span class="sr-only">Close menu</span>
                            </button>

                            <div class="py-4 overflow-y-auto">
                                <ul class="space-y-2 font-medium">

                                    {/* Admin page */}

                                    {
                                        // user?.photoURL === 'buyer' && 
                                        <>
                                            <li>
                                                <Link to="/Dashboard/Main" class="flex items-center p-2 text-white  hover:text-gray-900 rounded-lg rounded-r-full rounded-r-full placeholder: dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                    <svg class="w-5 h-5 text-gray-100 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                                    </svg>
                                                    <span class="ml-3">Admin panel</span>
                                                </Link>
                                            </li>
                                        </>
                                    }


                                    <li>
                                        <Link to="/Dashboard/manageProduct" class="flex items-center p-2 text-white  hover:text-gray-900 rounded-lg rounded-r-full rounded-r-full placeholder: dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg class="flex-shrink-0 w-5 h-5  transition duration-75 dark:text-gray-400  dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                                <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                                            </svg>
                                            <span class="ml-3 ">Manage Products</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Dashboard/addDoctor" class="flex items-center p-2 text-white  hover:text-gray-900 rounded-lg rounded-r-full rounded-r-full placeholder: dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg class="flex-shrink-0 w-5 h-5 text-gray-100 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                                <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z" />
                                            </svg>
                                            <span class="ml-3">Add Doctor</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Dashboard/manageDoctor" class="flex items-center p-2 text-white  hover:text-gray-900 rounded-lg rounded-r-full rounded-r-full placeholder: dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg class="flex-shrink-0 w-6 h-6 text-gray-100 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                                <FaEdit />
                                            </svg>
                                            <span class="ml-3">Manage Doctors</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Dashboard" class="flex items-center p-2 text-white  hover:text-gray-900 rounded-lg rounded-r-full rounded-r-full placeholder: dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg class="flex-shrink-0 w-6 h-6 text-gray-100 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                                <FaEdit />
                                            </svg>
                                            <span class="ml-3">Manage Sellers</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Dashboard/allUser" class="flex items-center p-2 text-white  hover:text-gray-900 rounded-lg rounded-r-full rounded-r-full placeholder: dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg class="flex-shrink-0 w-6 h-6 text-gray-100 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                                <FaEdit />
                                            </svg>
                                            <span class="ml-3">Manage Users</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Dashboard/MyProfile" class="flex items-center p-2 text-white  hover:text-gray-900 rounded-lg rounded-r-full rounded-r-full placeholder: dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg class="flex-shrink-0 w-6 h-6 text-gray-100 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                                <FaUserEdit />
                                            </svg>
                                            <span class="ml-3">My Profile</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/Dashboard/myProduct" class="flex items-center p-2 text-white  hover:text-gray-900 rounded-lg rounded-r-full rounded-r-full placeholder: dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg class="flex-shrink-0 w-5 h-5 text-gray-100 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                                <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                                            </svg>
                                            <span class="ml-4">My Product</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Dashboard/addproducts" class="flex items-center p-2 text-white  hover:text-gray-900 rounded-lg rounded-r-full rounded-r-full placeholder: dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg class="flex-shrink-0 w-5 h-5 text-gray-100 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                                <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z" />
                                            </svg>
                                            <span class="ml-4">Add Product</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/Dashboard/myApointments" class="flex items-center p-2 text-white  hover:text-gray-900 rounded-lg rounded-r-full rounded-r-full placeholder: dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg class="flex-shrink-0 w-9 h-9 text-gray-100 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                                <BiListCheck />
                                            </svg>
                                            <span class="ml-1">My Appointment</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/Dashboard/myReviews" class="flex items-center p-2 text-white  hover:text-gray-900 rounded-lg rounded-r-full rounded-r-full placeholder: dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg class="flex-shrink-0 w-5 h-5 text-gray-100 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                            </svg>
                                            <span class="ml-3">My Reviews</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/Dashboard/MyProfile" class="flex items-center p-2 text-white  hover:text-gray-900 rounded-lg rounded-r-full rounded-r-full placeholder: dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg class="flex-shrink-0 w-5 h-5 text-gray-100 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                                <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                                                <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                                            </svg>
                                            <span class="ml-3">New 3</span>
                                        </Link>
                                    </li>





                                    <li>
                                        <button onClick={toggleDropdown} type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg rounded-r-full group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                            <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                                                <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                                            </svg>
                                            <span class="flex-1 ml-3 text-left rtl:text-right whitespace-nowrap">E-commerce</span>
                                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                            </svg>
                                        </button>

                                        <ul id="dropdown-example" class={` ${showDropdown ? "" : "hidden"}  py-2 space-y-2`}>
                                            <li>
                                                <Link to="" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</Link>
                                            </li>
                                            <li>
                                                <Link to="" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</Link>
                                            </li>
                                            <li>
                                                <Link to="" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</Link>
                                            </li>
                                        </ul>
                                    </li>


                                    <li>
                                        <Link to="/Dashboard" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                                            </svg>
                                            <span class="ml-3">New 2</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>) : null}
                </div>

                <div className='col-span-4 mr-2 ml-1' style={{ backgroundColor: '#111827' }}>
                    <Outlet></Outlet>
                </div>

            </div>

            <Footer></Footer>
        </div>


    );
};

export default Dashboard;