import {  useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Brand from "../Brand/Brand";
import Certification from "../Certification/Certification";
import Section from "../Section/Section";

import Top from "./Top Pro/ZTop Pro";


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
    
    console.log(topBrands);
    return (
        <div>
          <Banner></Banner>
          <div className="dark:bg-black ">
          <h1 className="font-bold text-4xl text-purple-800 text-center mt-8 underline ">Well Known Brands</h1>
          <div className="grid grid-cols-1 ml-16 pb-12 pt-20   md:grid-cols-2  lg:grid-cols-3  mr-6 gap-8">
          {/* {topBrands.map(([brandName, { photo, rating }]) => (
          <div key={brandName} className="brand-item">
            <img src={photo} alt={brandName} />
            <p>{brandName}</p>
            <p>Rating: {rating}</p>
          </div>
        ))} */}
          {topBrands.map(([brandName, { photo }]) => (
          <div key={brandName} className="brand-item">
           <Brand photo={photo} brand={brandName}></Brand>
          </div>
        ))}
       


          {/* {
            product.slice().map(products =><Brand key={products._id} products={products}></Brand>
             )
             
            } */}
          </div>
      
          </div>
          <div className="dark:bg-black ">
          <h1 className="font-bold text-4xl text-purple-800 text-center mt-8 underline ">Top Products</h1>
          <div className="grid grid-cols-1 ml-16 pb-12 pt-20   md:grid-cols-2  lg:grid-cols-3  mr-6 gap-8">
          {
            topProducts.slice(0,6).map(tops =><Top key={tops._id} tops={tops}></Top>
             )
             
            }
          </div>
      
          </div>


          <Certification></Certification>
          <Section></Section>
        </div>
    );
};

export default Home;