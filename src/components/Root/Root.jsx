
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import ScrollToTop from "../Section/ScrollToTop";
import 'swiper/swiper-bundle.css';

const Root = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
      }, []);
    
    return (
        <div>
           {isLoading ? (
        <div className="flex items-center justify-center h-screen bg-transparent dark:bg-gray-900">
          <img src="/src/assets/loading__.gif" alt="Loading..." className="w-screen h-screen lg:w-[100%] lg:h-[100vh] " />
        </div>
      ) : (<>
           <ScrollToTop></ScrollToTop>
            <Navbar></Navbar>
            
            <Outlet></Outlet>
            <Footer></Footer>
            </>
    )}
        </div>
    );
};

export default Root;