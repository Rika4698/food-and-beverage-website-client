/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
import RatingSet from "../BrandDeatailSet/RatingSet";



const Carts = ({cart,handleDelete}) => {
    
    // const [product, setProduct] = useState({});

    // useEffect(() => {
    //     fetch("http://localhost:5000/product")
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
          
            <div className="card h-[600px] bg-green-100 shadow-xl">
  <figure><img className=" w-[250px] h-[250px] lg:w-[280px] lg:h-[300px] pt-10" src={cart.image} alt="" /></figure>
  <div className="card-body">
    <h1 className="card-title font-bold">
      {cart.name}
      <div className="badge badge-secondary text-center  w-20 h-10">{cart.brand}</div>
    </h1>
    <p>{cart.type}</p>
   
    <div className="flex gap-2">
    <RatingSet  rating={cart.rating}></RatingSet>
    <p className="text-base  ">({cart.rating})</p>
  </div>
  <h1 className="text-xl text-rose-500 font-bold ">Price: {cart.price} TK</h1>
    <div className="card-actions justify-between mt-4">
    
    <button onClick={()=>handleDelete(cart._id)} className="btn capitalize text-lg bg-green-300" >Delete</button>
    
     
     <button className="btn capitalize text-lg bg-orange-300">Update</button>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default Carts;





