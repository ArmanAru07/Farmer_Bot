// --> This is my previous header. There is no change (not even class name). Fukll copy paste.

import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import { AuthContext } from '../Context/UserContext';

const Header = () => {

    // ---> UseContext
    const { user, LogOut } = useContext(AuthContext);

    // console.log(user);

    const handleLogOut = () => {
        LogOut().then(() => {
        }).catch((error) => {
        });
    }


    // Service dropdown ************************************************************
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Header shrinking **************************************************************
    const [isShrunk, setShrunk] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const isTop = scrollTop === 0;

            setShrunk(!isTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div className='sticky relative top-0 z-30 '>

            <header className={`h-32 w-full flex items-center  justify-between px-4 lg:px-16 ${isShrunk ? 'h-16' : 'h-32'}`} style={{ backgroundColor: "#18332F" }}>

                <div className='text-white brand-name'>
                    <h1 className='website-name' >Serene</h1>
                </div>

                {/* For Large screen  */}
                <div className='hidden lg:block' style={{ paddingTop: "6px" }}>
                    <ul className="flex p-4 mt-4  md:space-x-8 md:mt-0">
                        <li>
                            <Link to="/" className="header-links block py-2 pl-3 pr-4 text-gray-300  rounded md:p-0" >Home</Link>
                        </li>
                        <li>
                            <button id="dropdownDefaultButton" onClick={toggleDropdown} className="text-gray-300 header-links pl-3 pr-4 py-2  md:p-0  flex items-center justify-between w-full md:w-auto">Services
                                {/* <svg className="w-4 h-4 ml-1 transition-transform" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}></path>
                </svg> */}
                                <svg
                                    className={`w-4 h-4 ml-1 transition-transform duration-300 ${isOpen && "-rotate-180"
                                        }`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>

                            </button>
                        </li>
                        <li>
                            <Link to="/shoppingPage" className="header-links block py-2 pl-3 pr-4 text-gray-300 rounded  md:p-0 ">Menu</Link>
                        </li>
                        <li>
                            <Link to="/blog" className="header-links block py-2 pl-3 pr-4 text-gray-300 rounded  md:p-0 ">Blog</Link>
                        </li>

                    </ul>
                </div>


                {/* Studen info */}
                <div className="flex flex-shrink-0 items-center space-x-4 text-white user-header-info">


                    {
                        user && user.email &&
                        <div className="flex flex-col items-end ">
                            <div className="text-md font-medium ">{user.displayName}</div>
                            <div className="text-sm font-regular">User</div>
                        </div>
                    }

                    <div className="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400"><img className=' rounded-full'
                        src="https://w7.pngwing.com/pngs/409/621/png-transparent-computer-icons-avatar-male-user-profile-others-logo-monochrome-silhouette.png" alt="" /></div>
                    {
                        user && user.email ?
                            <Link onClick={handleLogOut} >
                                <button className="bg-transparent hover:bg-white  text-white hover:text-gray-800  py-2 px-4 border border-white-500 hover:border-transparent rounded">
                                    Sign out
                                </button>
                            </Link>
                            :
                            <Link to="/login">
                                <button className="bg-transparent hover:bg-white  text-white hover:text-gray-800  py-2 px-4 border border-white-500 hover:border-transparent rounded">
                                    Sign in
                                </button>
                            </Link>
                    }

                    {/* Register button */}
                    {/* <Link to="/register">
            <button className="bg-white hover:bg-transparent  py-2 px-4 border text-gray-800 hover:text-white rounded shadow">
              Sign up
            </button>
          </Link> */}

                </div>

            </header>

            {/* Responsive Header */}
            <div className='block lg:hidden '>
                <ul className="flex pb-2 justify-center" style={{ backgroundColor: "#18332F" }}>
                    <li>
                        <Link to="/" className="header-links block py-2 pl-3 pr-4 text-gray-300  rounded md:p-0" >Home</Link>
                    </li>
                    <li>
                        <button id="dropdownDefaultButton" onClick={toggleDropdown} className="text-gray-300 header-links pl-3 pr-4 py-2  md:p-0  flex items-center justify-between w-full md:w-auto">Services
                            {/* <svg className="w-4 h-4 ml-1 transition-transform" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}></path>
                </svg> */}
                            <svg
                                className={`w-4 h-4 ml-1 transition-transform duration-300 ${isOpen && "-rotate-180"
                                    }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>

                        </button>
                    </li>
                    <li>
                        <Link to="" className="header-links block py-2 pl-3 pr-4 text-gray-300 rounded  md:p-0 ">Menu</Link>
                    </li>
                    <li>
                        <Link to="/blog" className="header-links block py-2 pl-3 pr-4 text-gray-300 rounded  md:p-0 ">Blog</Link>
                    </li>
                </ul>
            </div>

            {/* Service dropdown */}
            <div id="dropdown" className={` z-10 absolute lg:-mt-9 divide-y  lg:ml-[490px] ${isShrunk ? 'lg:-mt-1' : 'lg:-mt-9'} divide-gray-100 rounded-lg shadow w-44  ${isOpen ? '' : 'hidden'}`} style={{ backgroundColor: "white", marginLeft: 480 }}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <Link to="/therapy" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Therapy</Link>
                    </li>
                    <li>
                        <Link to="/shoppingPage" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Islamic Book</Link>
                    </li>
                    <li>
                        <Link to="/cart" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Cart</Link>
                    </li>
                    <li>
                        <Link to="/Test" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Test</Link>
                    </li>
                </ul>
            </div>


            {/* Header Ends */}
        </div>


    );
}

export default Header;
