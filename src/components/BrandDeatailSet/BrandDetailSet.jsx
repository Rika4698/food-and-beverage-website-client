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

                fetch(`http://localhost:5000/slider?brand=${brand}`)
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
   
   
    return (
        <div>
            {
                products.length <= 1 ?
                <h1 className="text-center font-bold text-4xl text-indigo-500 pt-8 ">...Stay Connected</h1>
                :
                
                sliderImages.map(slider => <SliderDetail key={slider._id} slider={slider}></SliderDetail>)
                
            }
           
  
         {
            products.length <= 1 ?
            <h1 className="text-center font-bold text-4xl text-rose-500 pt-8 mb-20">Products  Coming Soon...</h1>
            :
            <div>
            <h1 className="text-center font-bold text-5xl text-orange-500 pt-8">All Products</h1>
            <p className="text-center p-4 text-base">For your daily life</p>
            <div className="grid grid-cols-1 ml-16 pb-12 pt-20   md:grid-cols-2  lg:grid-cols-3  mr-6 gap-8">
            {
            products.map(carts => <BrandDetails key={carts._id} carts={carts}></BrandDetails>
                )
            }
             </div>
             </div>
        
         }
             
             
            
                    
           
        </div>
    );
};

export default BrandDetailSet;