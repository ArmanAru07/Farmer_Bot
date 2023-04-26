import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import "../Shared/Header.css"

const HeaderTest = () => {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // this code is work fine in blank page
  // but not working over is anoher div/components
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      console.log("Enter")
      setIsOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className='sticky relative top-0 z-30 mb-4'>

      <header className="h-32 w-full flex items-center  justify-between px-4 lg:px-16" style={{ backgroundColor: "#18332F" }}>

        <div className='brand-name'>
          <h1 className='website-name' >Serene</h1>
        </div>

        {/* For Large screen  */}
        {/* <div className='hidden lg:block' style={{ paddingTop: "6px" }}>
          <ul className="flex p-4 mt-4  md:space-x-8 md:mt-0">
            <li>
              <Link to="/" className="header-links block py-2 pl-3 pr-4 text-gray-300  rounded md:p-0" >Home</Link>
            </li>
            <li>
              <button id="dropdownDefaultButton" onClick={toggleDropdown} className="text-gray-300 header-links pl-3 pr-4 py-2  md:p-0  flex items-center justify-between w-full md:w-auto">Services
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
        </div> */}

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-4 mt-2">
            <li>
              <Link className='text-gray-300 header-links ml-7'>Home</Link>
            </li>
            <li tabIndex={0}>
              <Link className='text-gray-300 header-links ml-7' onMouseOver={toggleDropdown} >
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${isOpen && "-rotate-180"}`}
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
              </Link>

              <ul className="p-2 mt-2 bg-slate-400">
                <li><Link className='text-gray-300'>Submenu 1</Link></li>
                <li><Link className='text-gray-300'>Submenu 2</Link></li>
              </ul>
            </li>
            <li><Link className='text-gray-300 header-links ml-7'>Menu</Link></li>
            <li><Link className='text-gray-300 header-links ml-7'>Blog</Link></li>
          </ul>
        </div>


        {/* Studen info */}
        <div className="flex flex-shrink-0 items-center space-x-4 text-white user-header-info">

          <div className="flex flex-col items-end ">
            <div className="text-md font-medium ">Muhibur Rahman</div>
            <div className="text-sm font-regular">User</div>
          </div>

          <div className="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400"></div>

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
      {/* <div id="dropdown" className={` z-10 absolute sm:mt-0 lg:-mt-9 divide-y ml-[70px]  lg:ml-[490px] divide-gray-100 rounded-lg shadow w-44  ${isOpen ? '' : 'hidden'}`} style={{ backgroundColor: "white" }}>
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          <li>
            <Link to="/therapy" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Therapy</Link>
          </li>
          <li>
            <Link to="/shoppingPage" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Islamic Book</Link>
          </li>
          <li>
            <Link to="/blog" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Blog</Link>
          </li>
          <li>
            <Link to="/blog" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Blog</Link>
          </li>
        </ul>
      </div> */}


      {/* Header Ends */}
    </div>


  );
}

export default HeaderTest;