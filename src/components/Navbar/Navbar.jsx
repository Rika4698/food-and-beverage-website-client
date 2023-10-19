/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
import { NavLink } from "react-router-dom";
import { IoLogInOutline } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../../Hook/AuthProvider";
import { BiLogOut } from "react-icons/bi";









const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <div>

            <div className="navbar bg-sky-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            <li><NavLink to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-blue-800 font-bold text-2xl " : "font-semibold text-emerald-950 text-base"
                                }>Home</NavLink></li>
                            <li><NavLink to="/add-product"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-blue-800 font-bold text-2xl " : "font-semibold text-emerald-950 text-base"
                                }>Add-Product</NavLink></li>
                            <li><NavLink to="/cart"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-blue-800 font-bold text-2xl " : "font-semibold text-emerald-950 text-base"
                                }> My Cart</NavLink></li>

                        </ul>
                    </div>
                    <div>
                        <img className="rounded-full w-28 bg-white shadow-md lg:w-40 lg:ml-8" src="https://i.ibb.co/S69bJX6/sr-food-beverage-ltd-low-resolution-logo-color-on-transparent-background.png" alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-8 ">
                        <li><NavLink to='/'
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-blue-800 font-bold text-4xl " : "font-semibold text-emerald-950 text-xl"
                            }>Home</NavLink></li>
                        <li><NavLink to="/add-product"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-blue-800 font-bold text-4xl " : "font-semibold text-emerald-950 text-xl"
                            }>Add-Product</NavLink></li>
                        <li><NavLink to="/cart"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-blue-800 font-bold text-4xl " : "font-semibold text-emerald-950 text-xl"
                            }> My Cart</NavLink></li>

                    </ul>
                </div>

                {
                    user ?
                        <div className="navbar-end  "

                        >

                            <img className="w-16 bg-emerald-400 rounded-full" src={user.photoURL} alt="" />
                            <h3 className=" w-12 mr-4   text-sm text-center font-semibold lg:mx-6 md:mx-6">{user.displayName}</h3>
                            <button onClick={handleSignOut} className="rounded-lg text-white bg-green-500 w-18 h-8   lg:w-28 lg:h-10 md:w-24 md:h-10 "  >
                                <BiLogOut className=" hidden md:inline-flex md:text-xl lg:inline-flex lg:text-xl  "></BiLogOut>
                                
                                <span className="ml-2 text-base">Logout</span></button>
                        </div>
                        :
                        <div className="navbar-end  ">
                            <NavLink to='/login'>

                                <button className="btn text-white bg-violet-400 w-24 lg:mr-8 lg:w-36">
                                    <IoLogInOutline className="hidden md:flex md:text-2xl lg:text-2xl lg:flex"></IoLogInOutline>
                                    <span className="text-lg">Login</span></button>
                            </NavLink>


                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;