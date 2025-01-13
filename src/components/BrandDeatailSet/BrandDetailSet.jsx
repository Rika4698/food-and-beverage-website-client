import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandDetails from "./BrandDetails";

import SliderDetail from "./sliderDitail";



const BrandDetailSet = () => {
    // const { brand } = useParams();
  const [sliderImages, setSliderImages] = useState([]);
    const[products,setProducts] = useState([]);
    const product = useLoaderData();
    // console.log(product);
        const {brand} = useParams();
        
        // console.log(product.map(brand));
        useEffect(() => {
            const findProduct = product.filter((products) => products.brand == brand);
            // console.log(findProduct);
            
                setProducts(findProduct);

                fetch(`https://food-beverage-website-server-qxnackit4.vercel.app/slider?brand=${brand}`)
                .then((response) => response.json())
                .then((data) => {
                    const findSlide = data.filter((products) => products.brand == brand);
                  setSliderImages(findSlide);
                });

           
        },[brand,product])
        // console.log(products);
        // console.log(sliderImages);
        // {
        // products.map(item => console.log({item}))
        // }
        console.log(products[0]?.name);
   
    return (
        <div>
            
            {
                products.length > 0 && products[0]?.name == '' ?   
                
                <h1 className="text-center font-bold text-4xl  text-indigo-500 mt-28 lg:mt-36 py-20 lg:text-6xl lg:py-24 dark:bg-slate-600 dark:text-blue-200">....Stay Connected</h1>
                
                :
                
                sliderImages.map(slider => <SliderDetail key={slider._id} slider={slider}></SliderDetail>)
                
            }
           
  
         {
           products.length > 0 && products[0]?.name == '' ?
            <h1 className="text-center font-bold text-4xl text-rose-500 pt-8 pb-24 lg:text-6xl dark:bg-slate-600 dark:text-red-300">Products  Coming Soon....</h1>
            :
            <div className="dark:bg-slate-700 pb-5" >
                <div className="dark:bg-slate-700">
            <h1 className="text-center font-bold text-5xl text-orange-500 pt-8 dark:text-orange-300">All Products</h1>
            <p className="text-center p-4 text-lg text-gray-600 mb-3 dark:text-gray-300">For your daily life</p>
            </div>
            {/* <div className="grid grid-cols-1 ml-16 pb-12 pt-20   md:grid-cols-2  lg:grid-cols-3  mr-6 gap-8">
            {
            products.map(carts => <BrandDetails key={carts._id} carts={carts}></BrandDetails>
                )
            }
             </div> */}
            
         
             
        
       
             
             <div className="max-w-screen-xl  mx-auto p-5 xl:p-10 ">


    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

    {
            products.map(carts => <BrandDetails key={carts._id} carts={carts}></BrandDetails>
                )
            }
   

     </div>

     </div> 
     </div>
} 


                    
           
        </div>
    );
};

export default BrandDetailSet;