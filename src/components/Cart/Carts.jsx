/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
import RatingSet from "../BrandDeatailSet/RatingSet";



const Carts = ({cart,handleDelete}) => {
    
    // const [product, setProduct] = useState({});

    // useEffect(() => {
    //     fetch("https://food-beverage-website-server-qxnackit4.vercel.app/product")
    //         .then(res => res.json())
    //         .then(data => {
    //             const findCard = data.find((products) => products._id == cart.prodId);
    //             // console.log(findCard.length);
    //             setProduct(findCard);
    //         })
    //         .catch(() => {
    //         })
    // }, []);
    
    return (
        <div>
          
        


        
            <div className="flex items-center mb-4 bg-sky-50 ">
                <img className="h-32 w-32 object-contain  mr-4 lg:w-40 lg:h-40 " src={cart.image}
                    alt="Product"/>
                <div className="flex-1 p-2  -ml-2 mr-2  ">
                    <h2 className="text-base md:text-xl font-bold line-clamp-1 lg:text-xl">{cart.name}</h2>
                    <p className="text-sm py-1 lg:text-base">{cart.type}</p>
   
   
 
 <h1 className="text-base md:text-lg text-green-600 font-bold ">Price: {cart.price} TK</h1>
                 
                </div>
                <button onClick={()=>handleDelete(cart._id)} className="text-gray-800 hover:text-red-500 mr-2 lg:mr-6  ">
                    <svg className="h-6 w-6 lg:w-10 lg:h-10 fill-current" viewBox="0 0 24 24">
                        <path d="M19 13H5v-2h14v2z" />
                    </svg>
                </button>
            </div>
           
           
       
       
        </div>
    );
};

export default Carts;





