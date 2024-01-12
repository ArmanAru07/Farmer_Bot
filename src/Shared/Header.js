import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Header.css";
import { AuthContext } from '../Context/UserContext';
import { Avatar, Dropdown } from 'flowbite-react';




const Header = () => {

  // ---> UseContext
  const { user, LogOut, handlBangla, bangla, dark, handlDark } = useContext(AuthContext);



  // --> Log out function 
  const handleLogOut = () => {
    LogOut().then(() => {
    }).catch((error) => {
    });
  }

  // --> Dropdown menu function 
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const dropdownClick = () => {
    setIsHovered(!isHovered);
  }

  // Active link style
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "yellow" : "rgb(209, 213, 219)"
    }
  }

  // Active link for dropdown
  const dropdownLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "yellow" : "black",
      backgroundColor: isActive && "black",
      // "&:hover": {
      //   backgroundColor: "white", // Change to white on hover
      // }
    }
  }


  // Profile dropdown ***********************************************************
  const [profileHover, setProfileHover] = useState(false);

  const handlePfofileDropdown = () => {
    setProfileHover(!profileHover);
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

  const headerStyles = {
    transition: 'height 0.2s ease-in-out', // Add transition to the height change
    backgroundColor: '#18332F',
  };





  return (
    <div className='sticky relative top-0 z-30 ' >

      <header style={headerStyles} className={`w-full flex items-center  justify-between px-4 lg:px-16 h-16 ${isShrunk ? 'h-20' : 'h-32'}`} >

        <div className='text-white brand-name'>
          <h1 className='website-name' >Serene</h1>
        </div>

        {/* For Large screen, Links  */}
        <div className='hidden lg:block' style={{ paddingTop: "6px" }}>
          <ul className="flex p-4 mt-4  md:space-x-8 md:mt-0">

            <li>
              <NavLink style={navLinkStyle} to="/" className="header-links block py-2 pl-3 pr-4 text-gray-300  rounded md:p-0" >{bangla ? "হোম" : "Home"}</NavLink>
            </li>

            <li>
              <NavLink style={navLinkStyle} to="/tutarial" className="header-links block py-2 pl-3 pr-4 text-gray-300  rounded md:p-0" >{bangla ? "টিউটেরিয়াল" : "Tutorial"}</NavLink>
            </li>

            <li>
              <div className="relative inline-block text-left group">
                <button className="text-gray-300 header-links pl-3 pr-4 py-2  md:p-0  flex items-center justify-between w-full md:w-auto" type="button"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>
                  {bangla ? "অপশানস" : "Options"}{' '}
                  <svg
                    className={`w-2.5 h-2.5 ml-2.5 transition-transform ${isHovered ? '-translate-y-0.5 rotate-180' : 'translate-y-0 rotate-0'
                      }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4" />
                  </svg>
                  <div
                    className="absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 group-hover:block"
                    onMouseEnter={() => this.setState({ isHovered: true })}
                    onMouseLeave={() => this.setState({ isHovered: false })}>
                  </div>
                </button>

                {/* Nav Dropdown content */}
                <div style={{ zIndex: 100 }} className="-ml-3 absolute hidden divide-y divide-gray-100 rounded-lg shadow w-36 bg-gray-100  group-hover:block">
                  <ul className="py-2 text-sm text-gray-700" role="menu">
                    <li>
                      <NavLink to="/aIAssistant" style={dropdownLinkStyle} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">AI Test</NavLink>
                    </li>
                    <li>
                      <NavLink to="/therapy" style={dropdownLinkStyle} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Therapy</NavLink>
                    </li>
                    <li>
                      <NavLink to="/appointment" style={dropdownLinkStyle} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Counseling</NavLink>
                    </li>
                    <li>
                      <NavLink to="/post" style={dropdownLinkStyle} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Post</NavLink>
                    </li>
                    <li>
                      <NavLink to="/blog" style={dropdownLinkStyle} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Blog</NavLink>
                    </li>
                    <li>
                      <NavLink to="/testimonial" style={dropdownLinkStyle} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Testimonial</NavLink>
                    </li>
                  </ul>
                </div>

                {/* <div style={{ zIndex: 100 }} className="-ml-3 absolute hidden divide-y divide-gray-100 rounded-lg shadow w-52 bg-gray-100 group-hover:block">
                  <div className="flex">
                    <ul className="py-2 text-sm text-gray-700 flex-1 border-r" role="menu">
                      <li>
                        <NavLink to="/aIAssistant" style={dropdownLinkStyle} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">AI Test</NavLink>
                      </li>
                      <li>
                        <NavLink to="/therapy" style={dropdownLinkStyle} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Therapy</NavLink>
                      </li>
                      <li>
                        <NavLink to="/appointment" style={dropdownLinkStyle} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Counseling</NavLink>
                      </li>
                      <li>
                        <NavLink to="/post" style={dropdownLinkStyle} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Post</NavLink>
                      </li>
                    </ul>
                    <ul className="py-2 text-sm text-gray-700 flex-1" role="menu">
                      <li>
                        <NavLink to="/contact" style={dropdownLinkStyle} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Contact</NavLink>
                      </li>
                      <li>
                        <NavLink to="/blog" style={dropdownLinkStyle} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Blog</NavLink>
                      </li>
                      
                    </ul>
                  </div>
                </div> */}


              </div>
            </li>

            <li>
              <NavLink style={navLinkStyle} to="/shoppingPage" className="header-links block py-2 pl-3 pr-4 text-gray-300 rounded  md:p-0 "> {bangla ? "শপ" : "Shop"}</NavLink>
            </li>

          </ul>
        </div>


        {/* User info */}
        <div className="flex flex-shrink-0 items-center space-x-4 text-white user-header-info">
          {
            user && user.email &&
            <div className="flex flex-col items-end ">
              <div className="text-md font-medium ">{user.displayName}</div>
              {
                user?.photoURL ?
                  <div className="text-sm font-regular">{(user?.photoURL).substring(0, 10)}</div>
                  :
                  <div className="text-sm font-regular">Doc</div>}

            </div>
          }


          {
            user && user.email ?
              <div>
                <Dropdown arrowIcon={false} inline label={<Avatar alt="User settings" img="https://w7.pngwing.com/pngs/409/621/png-transparent-computer-icons-avatar-male-user-profile-others-logo-monochrome-silhouette.png" rounded bordered />}>
                  <Dropdown.Header>
                    {/* <span className="block text-sm">Bonnie Green</span> */}
                    <span className="block truncate text-sm font-medium">{user?.email}</span>
                  </Dropdown.Header>
                  <Dropdown.Item as={Link} to='/dashboard' className=' hover:text-blue-600 '>Dashboard</Dropdown.Item>
                  <Dropdown.Item as={Link} to='/cart' className=' hover:text-blue-600 '>My Cart</Dropdown.Item>

                  <Dropdown.Item onClick={handlBangla} className="bg-transparent   hover:text-blue-600">
                    {bangla ? "Change to English" : "Change to Bangla"}
                  </Dropdown.Item>


                  <Dropdown.Item onClick={handlDark} className="bg-transparent   hover:text-blue-600">
                    {dark ? "Light Theme" : "Dark Theme"}
                  </Dropdown.Item>


                  <Dropdown.Divider />
                  <Dropdown.Item className=' hover:text-blue-600 ' onClick={handleLogOut}>Sign out</Dropdown.Item>
                </Dropdown>
              </div>
              :
              <Link to="/login">
                <button class="special-button">
                  <span>Sign In</span>
                </button>
              </Link>
          }


          {/* <Link to="/login">
                <button className="bg-transparent hover:bg-white  text-white hover:text-gray-800  py-2 px-4 border border-white-500 hover:border-transparent rounded">
                  Sign in
                </button>
              </Link> */}








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
            <button onClick={dropdownClick} className="text-gray-300 header-links pl-3 pr-4 py-2  md:p-0  flex items-center justify-between w-full md:w-auto" type="button">

              Services{' '}
              <svg
                className={`w-2.5 h-2.5 ml-2.5 transition-transform ${isHovered ? '-translate-y-0.5 rotate-180' : 'translate-y-0 rotate-0'
                  }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4" />
              </svg>
              <div
                className="absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 group-hover:block"
                onMouseEnter={() => this.setState({ isHovered: true })}
                onMouseLeave={() => this.setState({ isHovered: false })}>
                {/* Dropdown content */}
              </div>
            </button>

            {/* Responsive header dropdown */}
            <div style={{ zIndex: 100 }} className={` ${isHovered ? '' : 'hidden'} absolute  divide-y divide-gray-100 rounded-lg shadow w-36 bg-gray-700 group-hover:block`}>
              <ul className="py-2 text-sm text-gray-200 dark:text-gray-200" role="menu">
                <li role="menuitem">
                  <Link to="/courses"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Courses
                  </Link>
                </li>
                <li role="menuitem">
                  <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Settings
                  </a>
                </li>
                <li role="menuitem">
                  <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Earnings
                  </a>
                </li>
                <li role="menuitem">
                  <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>

          </li>
          <li>
            <Link to="" className="header-links block py-2 pl-3 pr-4 text-gray-300 rounded  md:p-0 ">Menu</Link>
          </li>
          <li>
            <Link to="/blog" className="header-links block py-2 pl-3 pr-4 text-gray-300 rounded  md:p-0 ">Blog</Link>
          </li>
        </ul>
      </div>

      {/* Profile dropdown */}
      <div id="userDropdown" style={{ zIndex: 100 }} className={` ${profileHover ? "block" : 'hidden'}  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div>Bonnie Green</div>
          <div className="font-medium truncate">name@flowbite.com</div>
        </div>
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
          </li>
        </ul>
        <div className="py-1">
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
        </div>
      </div>

      {/* Header Ends */}
    </div>


  );
}

export default Header;
