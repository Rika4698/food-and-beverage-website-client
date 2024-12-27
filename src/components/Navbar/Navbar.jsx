/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
import { NavLink } from "react-router-dom";
import { IoLogInOutline } from "react-icons/io5";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Hook/AuthProvider";
import { BiLogOut } from "react-icons/bi";
import UseCart from "../../Hook/UseCart";



// import { useTotalLength } from '../Cart/Cart';











const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const [cart]=UseCart();

    // const{carts.length} = useContext(totalLength);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    };
    const [isDarkMode, setIsDarkMode] = useState(
        () => localStorage.getItem("theme") === "dark"
      );
      useEffect(() => {
        const rootElement = document.documentElement;
    
        if (isDarkMode) {
          rootElement.classList.add("dark");
          localStorage.setItem("theme", "dark");
        } else {
          rootElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }
      }, [isDarkMode]);

      const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleOutsideClick = (event) => {
    if (event.target.closest("#dropdownMenu")) {
      setDropdownOpen(false); // Close dropdown when clicking outside
    }
  };

  // Add event listener for outside clicks
  React.useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isDropdownOpen]);
    

    // const currThm = localStorage.getItem("") || "dark";
    // const [theme, setTheme] = useState(currThm);

    // const handleTheme = () => {
    //     const root = document.documentElement.classList;
    //     if (root.contains("dark")) {
    //         root.remove("dark");
    //         localStorage.setItem("theme", "light");
    //         setTheme("dark");
    //     } else if(root.contains("light")) {
    //         // root.remove("light");
    //         root.add("dark");
    //         localStorage.setItem("theme", "dark");
    //         setTheme("light");
    //     }
    // };

    return (
        <div>

            

            <nav className="bg-white dark:bg-gray-800 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3  lg:px-8">
        {/* Logo Section */}
        
          <img className=" rounded-full w-[102px] bg-white shadow-lg lg:w-[130px] " src="https://i.ibb.co/S69bJX6/sr-food-beverage-ltd-low-resolution-logo-color-on-transparent-background.png" alt="" />
          
        

        {/* Profile and Dropdown Section */}
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0  relative">
        <label className="grid cursor-pointer place-items-center   md:mx-4 lg:mx-6" htmlFor="darkModeToggle">
  <input
    type="checkbox"
    value="synthwave"  id="darkModeToggle"  checked={isDarkMode}
    onChange={() => setIsDarkMode(!isDarkMode)}  
    className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
  <svg
    className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
  <svg
    className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
</label>

        {
                    user ? (
                        <> 
          <button
            type="button"
            
            className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 "
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            <span className="sr-only">Open user menu</span>
            <img className="btn w-12 lg:w-14  rounded-full" src={user.photoURL} alt="" />
          </button>

          
          
          {isDropdownOpen && (
            <div  id="dropdownMenu" className="z-50 absolute -right-4 top-16  xl:-right-14 xl:h-[200px] bg-white divide-y divide-gray-100 rounded-lg shadow-lg shadow-slate-600 drop-shadow-lg   dark:bg-gray-700 dark:divide-gray-600 ">
              <div className="px-4 py-3 xl:py-6">
                <span className="block text-base xl:text-lg font-bold text-gray-900 dark:text-white">
                {user.displayName}
                </span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400 ">
                {user.email}
                </span>
              </div>

             
              <ul className="py-2 px-16 xl:py-6 xl:px-12">
              <button onClick={handleSignOut} className="rounded-lg text-white bg-green-500    lg:w-28 lg:h-10 w-24 h-10 "  >
                                <BiLogOut className="  inline-flex text-xl   "></BiLogOut>
                                
                                <span className="ml-2 text-base">Logout</span></button>

              
              </ul>
            </div>
          )} </>)
          
          :
         ( <div className="navbar-end  ">
              <NavLink to='/login'>

                  <button className="btn  text-white bg-violet-400 w-24  lg:w-28">
                      <IoLogInOutline className="  text-2xl -mx-2 lg:text-2xl lg:flex"></IoLogInOutline>
                      <span className="text-md lg:ml-2 ">Login</span></button>
              </NavLink>


          </div>)
  }


          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10   justify-center text-base text-gray-700 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? " block" : "hidden "
          }  items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 shadow-lg shadow-slate-600 drop-shadow-lg md:shadow-none md:drop-shadow-none  border border-gray-100 rounded-lg bg-gray-50 md:space-x-9 lg:space-x-16  md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700 ">
            <li>
            
              <NavLink to='/'
                            className={({ isActive}) =>
                                isActive ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 lg:text-lg" : " block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 lg:text-lg"
                            }>Home </NavLink>
            </li>
           
            {
                                !user? "": <>
                                <li><NavLink to="/add-product"
                                    className={({ isActive }) =>
                                         isActive ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 lg:text-lg" : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 lg:text-lg "
                                    }>Add Product </NavLink></li>
                                </>
                            }

           <li><NavLink to="/contact"
                            className={({ isActive }) =>
                                 isActive ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 lg:text-lg" : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 lg:text-lg "
                            }>Contact </NavLink></li>

                           { !user? "": <>
                                <li><NavLink to="/cart"
                                    className={({ isActive}) =>
                                       isActive ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 " : " block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "
                                    }>
                                        <div className="indicator   mt-1 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-7  " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-sm indicator-item font-semibold">{cart.length}</span>
                                  </div></NavLink>
                                  </li> </> }
                                    
           
          </ul>
          
        </div>
        
      </div>
    </nav>























        </div>
    );
};

export default Navbar;