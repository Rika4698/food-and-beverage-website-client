// {/* <div className="navbar bg-sky-100 dark:bg-blue-700">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <label tabIndex={0} className="btn btn-ghost lg:hidden">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                         </label>
//                         <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 gap-4 rounded-box w-52">

//                             <li><NavLink to="/"
//                                 className={({ isActive, isPending }) =>
//                                     isPending ? "pending" : isActive ? "text-blue-800 font-bold text-2xl " : "font-semibold text-emerald-950 text-base"
//                                 }>Home</NavLink></li>
//                             {
//                                  !user? "": <> 
//                                 <li><NavLink to="/add-product"
//                                 className={({ isActive, isPending }) =>
//                                     isPending ? "pending" : isActive ? "text-blue-800 font-bold text-2xl " : "font-semibold text-emerald-950 text-base"
//                                 }>Add-Product</NavLink></li>

// <li><NavLink to="/contact"
//                                 className={({ isActive, isPending }) =>
//                                     isPending ? "pending" : isActive ? "text-blue-800 font-bold text-2xl " : "font-semibold text-emerald-950 text-base"
//                                 }> Contact </NavLink></li>
//                              <li><NavLink to="/cart"
//                                     className={({ isActive, isPending }) =>
//                                         isPending ? "pending" : isActive ? "text-blue-800 font-bold text-4xl dark:text-white " : "font-semibold text-emerald-950 text-xl"
//                                     }><div className="indicator">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
//                                     <span className="badge badge-sm indicator-item">{cart.length}</span>
//                                   </div></NavLink></li>
//                                 </>
//                             }
                            
//                                 {/* <button onClick={handleTheme} className="btn bg-black text-white w-20 dark:bg-slate-300 dark:text-black">{theme} Mode</button> */}

//                         </ul>
//                     </div>
//                     <div>
//                         <img className="rounded-full w-28 bg-white shadow-md lg:w-40 lg:ml-8" src="https://i.ibb.co/S69bJX6/sr-food-beverage-ltd-low-resolution-logo-color-on-transparent-background.png" alt="" />
//                     </div>
//                 </div>
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="flex gap-8 ">
//                     <label class="grid cursor-pointer place-items-center" htmlFor="darkModeToggle">
//   <input
//     type="checkbox"
//     value="synthwave"  id="darkModeToggle"  checked={isDarkMode}
//     onChange={() => setIsDarkMode(!isDarkMode)}  
//     className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
//   <svg
//     className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
//     xmlns="http://www.w3.org/2000/svg"
//     width="14"
//     height="14"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     stroke-width="2"
//     stroke-linecap="round"
//     stroke-linejoin="round">
//     <circle cx="12" cy="12" r="5" />
//     <path
//       d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
//   </svg>
//   <svg
//     className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
//     xmlns="http://www.w3.org/2000/svg"
//     width="14"
//     height="14"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     stroke-width="2"
//     stroke-linecap="round"
//     stroke-linejoin="round">
//     <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
//   </svg>
// </label>

//          {/* <button onClick={handleTheme} className="btn bg-black text-white lg:w-16 ml-0  dark:bg-white dark:text-black">{theme} Mode</button> */}
//                         <li><NavLink to='/'
//                             className={({ isActive, isPending }) =>
//                                 isPending ? "pending" : isActive ? "text-blue-800 font-bold text-4xl dark:text-white" : "font-semibold text-emerald-950 text-xl"
//                             }>Home</NavLink></li>
//                             {
//                                 !user? "": <>
//                                 <li><NavLink to="/add-product"
//                                     className={({ isActive, isPending }) =>
//                                         isPending ? "pending" : isActive ? "text-blue-800 font-bold text-4xl dark:text-white" : "font-semibold text-emerald-950 text-xl"
//                                     }>Add-Product</NavLink></li>

// <li><NavLink to="/contact"
//                             className={({ isActive, isPending }) =>
//                                 isPending ? "pending" : isActive ? "text-blue-800 font-bold text-4xl dark:text-white " : "font-semibold text-emerald-950 text-xl"
//                             }>Contact </NavLink></li>
//                                 <li><NavLink to="/cart"
//                                     className={({ isActive, isPending }) =>
//                                         isPending ? "pending" : isActive ? "text-blue-800 font-bold text-4xl dark:text-white " : "font-semibold text-emerald-950 text-xl"
//                                     }><div className="indicator">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
//                                     <span className="badge badge-sm indicator-item">{cart.length}</span>
//                                   </div></NavLink></li>
//                                     </>
//                             }
                        
                            

//                     </ul>
//                 </div>

//                 {
//                     user ?
//                         <div className="navbar-end  "

//                         >

//                             <img className="w-14 bg-emerald-400 rounded-full" src={user.photoURL} alt="" />
//                             <h3 className=" w-12 mr-4   text-sm text-center font-semibold lg:mx-6 md:mx-6 dark:text-white">{user.displayName}</h3>
//                             <button onClick={handleSignOut} className="rounded-lg text-white bg-green-500 w-18 h-8   lg:w-28 lg:h-10 md:w-24 md:h-10 "  >
//                                 <BiLogOut className=" hidden md:inline-flex md:text-xl lg:inline-flex lg:text-xl  "></BiLogOut>
                                
//                                 <span className="ml-2 text-base">Logout</span></button>
//                         </div>
//                         :
//                         <div className="navbar-end  ">
//                             <NavLink to='/login'>

//                                 <button className="btn text-white bg-violet-400 w-24 lg:mr-8 lg:w-36">
//                                     <IoLogInOutline className="hidden   md:text-2xl lg:text-2xl lg:flex"></IoLogInOutline>
//                                     <span className="text-lg">Login</span></button>
//                             </NavLink>


//                         </div>
//                 }
//             </div> */}