import {  useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Brand from "../Brand/Brand";
import Certification from "../Certification/Certification";







const Home = () => {
    const product = useLoaderData();
    return (
        <div>
          <Banner></Banner>
          <div className="dark:bg-black ">
          <h1 className="font-bold text-4xl text-purple-800 text-center mt-8 underline ">Well Known Brands</h1>
          <div className="grid grid-cols-1 ml-16 pb-12 pt-20   md:grid-cols-2  lg:grid-cols-3  mr-6 gap-8">
          {
            product.slice(0,6).map(products =><Brand key={products._id} products={products}></Brand>
             )
             
            }
          </div>
      
          </div>


          <Certification></Certification>
        </div>
    );
};

export default Home;