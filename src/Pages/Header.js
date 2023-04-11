import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {

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


  return (
    <div className='sticky relative top-0 z-30 mb-4'>

      <header className="h-32 w-full flex items-center  justify-between px-4 lg:px-16" style={{ backgroundColor: "#18332F" }}>

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
              <button id="dropdownDefaultButton" onClick={toggleDropdown} class="text-gray-300 header-links pl-3 pr-4 py-2  md:p-0  flex items-center justify-between w-full md:w-auto">Services
                {/* <svg class="w-4 h-4 ml-1 transition-transform" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
            <button id="dropdownDefaultButton" onClick={toggleDropdown} class="text-gray-300 header-links pl-3 pr-4 py-2  md:p-0  flex items-center justify-between w-full md:w-auto">Services
              {/* <svg class="w-4 h-4 ml-1 transition-transform" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
      <div id="dropdown" class={` z-10 absolute lg:-mt-9 divide-y  lg:ml-[490px] divide-gray-100 rounded-lg shadow w-44  ${isOpen ? '' : 'hidden'}`} style={{ backgroundColor: "white", marginLeft: 480 }}>
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          <li>
            <Link to="/therapy" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Therapi</Link>
          </li>
          <li>
            <Link to="/shoppingPage" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Islamic Book</Link>
          </li>
          <li>
            <Link to="/blog" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Blog</Link>
          </li>
          <li>
            <Link to="/blog" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Blog</Link>
          </li>
        </ul>
      </div>


      {/* Header Ends */}
    </div>


  );
}

export default Header;
