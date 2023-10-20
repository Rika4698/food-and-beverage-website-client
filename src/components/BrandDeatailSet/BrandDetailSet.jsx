import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandDetails from "./BrandDetails";


const BrandDetailSet = () => {
    const[products,setProducts] = useState({});
    const product = useLoaderData();
    console.log(product);
        const {brand} = useParams();
        
        // console.log(product.map(brand));
        useEffect(() => {
            const findProduct = product?.find((products) => products.name == brand);
            console.log(findProduct);
            if(findProduct)
            {
                setProducts(findProduct);

            }
            else{
                setProducts(" products  coming soon");
            }
        },[brand,product])
      
    return (
        <div>
            <div className="grid grid-cols-1 ml-16 pb-12 pt-20   md:grid-cols-2  lg:grid-cols-3  mr-6 gap-8">
            
         <BrandDetails key={products._id} products={products}></BrandDetails>
             
             
            
                    {/* <BrandDetails products={products}></BrandDetails>    */}
            </div>
        </div>
    );
};

export default BrandDetailSet;