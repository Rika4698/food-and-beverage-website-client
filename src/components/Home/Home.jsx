import {  useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Brand from "../Brand/Brand";
import Certification from "../Certification/Certification";
import Section from "../Section/Section";

import Top from "./Top Pro/ZTop Pro";
import { useEffect, useState } from "react";


const getTopBrands = (product) => {
  const brands = {};

  product.forEach((item) => {
    const brandName = item.brand;

    if (!brands[brandName] || item.rating > brands[brandName].rating) {
      brands[brandName] = {
        brand: item.brand,
        photo: item.photo,
        rating: item.rating,
      };
    }
  });

  return Object.entries(brands)
    .sort(([, a], [, b]) => b.rating - a.rating)
    .slice(0, 6); // Get the top 6 brands
};




const Home = () => {
    const product = useLoaderData();
    const topBrands = getTopBrands(product);
    // console.log(product);
    // const[top,setTop] = useState([]);
    // const getTopBrands = (product) => {
    //   const brands = [];
    
    //   product.forEach((item) => {
    //     const brandName = item.brand;
    //     // console.log(brandName);
    
    //     if (!brands[brandName] || item.rating > brands[brandName].rating) {
    //       brands[brandName] = {
    //         brand: item.brand,
    //         photo: item.photo,
    //         rating: item.rating,
    //       };
    //     }
    //   });
    //   // console.log(brands.slice(0.6));
    
    //    Object.entries(brands)
    //     .sort(([, a], [, b]) => b.rating - a.rating)
    //     .slice(0, 6); // Get the top 6 brands
    //     console.log( Object.entries(brands));
    // // };
    
    
    const topProducts = product.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    
    // console.log(topBrands);
    const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility of the button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to the top
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
    return (
        <div>
          <Banner></Banner>
          <div className="bg-teal-100 dark:bg-slate-800 py-8 ">
          <h1 className="font-bold text-4xl text-teal-800 text-center pt-8 underline mb-8 dark:text-teal-300 ">Well Known Brands</h1>
          
          <div className="p-1 flex flex-wrap items-center justify-center">

          {topBrands.map(([brandName, { photo }]) => (
          <div key={brandName} className="brand-item">
           <Brand photo={photo} brand={brandName}></Brand>
          </div>
        ))}





</div>




          {/* <div className="grid grid-cols-1 ml-16 pb-12 pt-20   md:grid-cols-2  lg:grid-cols-3  mr-6 gap-8">
        



          {topBrands.map(([brandName, { photo }]) => (
          <div key={brandName} className="brand-item">
           <Brand photo={photo} brand={brandName}></Brand>
          </div>
        ))}
       


         
          </div> */}
      
          </div>
          <div className="bg-purple-200 dark:bg-slate-800 ">
          <h1 className="font-bold text-5xl text-purple-800 dark:text-purple-400 text-center pt-8  ">Top Products</h1>

          <div className=" w-screen p-8 sm:p-16 dark:bg-slate-800 ">
  
  <div className="mx-auto w-fit grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6">
  {
            topProducts.slice(0,6).map(tops =><Top key={tops._id} tops={tops}></Top>
             )
             
            }
  
 
 

  </div>
</div>
          
          
          {/* <div className="grid grid-cols-1 ml-16 pb-12 pt-20   md:grid-cols-2  lg:grid-cols-3  mr-6 gap-8">
         


          {
            topProducts.slice(0,6).map(tops =><Top key={tops._id} tops={tops}></Top>
             )
             
            }
          </div> */}
      
          </div>

          <Section></Section>
          <Certification></Certification>
          <button
      onClick={goToTop}
      title="Go To Top"
      className={`${
        isVisible ? 'block' : 'hidden'
      } fixed z-50 bottom-10 right-10 p-4 border-0 w-14 h-14 rounded-full shadow-md bg-blue-500 hover:bg-blue-700 text-white text-lg font-semibold transition-colors duration-300 dark:bg-white dark:hover:bg-gray-300 dark:text-black`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M12 4l8 8h-6v8h-4v-8H4l8-8z" />
      </svg>
      <span className="sr-only">Go to top</span>
    </button>
          
        </div>
    );
};

export default Home;