import { useEffect, useState } from "react";
import RatingSet from "../BrandDeatailSet/RatingSet";



const Carts = ({cart,handleDelete}) => {
    
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch("https://food-beverage-website-server-12zczvhde.vercel.app/product")
            .then(res => res.json())
            .then(data => {
                const findCard = data.find((products) => products._id == cart.prodId);
                setProduct(findCard);
            })
            .catch(() => {
            })
    }, []);
    
    return (
        <div>
            <div className="card h-[600px] bg-green-100 shadow-xl">
  <figure><img className=" w-[250px] h-[250px] lg:w-[280px] lg:h-[300px] pt-10" src={product.image} alt="" /></figure>
  <div className="card-body">
    <h1 className="card-title font-bold">
      {product.name}
      <div className="badge badge-secondary text-center  w-20 h-10">{product.brand}</div>
    </h1>
    <p>{product.type}</p>
   
    <div className="flex gap-2">
    <RatingSet  rating={product.rating}></RatingSet>
    <p className="text-base  ">({product.rating})</p>
  </div>
  <h1 className="text-xl text-rose-500 font-bold ">Price: {product.price} TK</h1>
    <div className="card-actions justify-between mt-4">
    
    <button onClick={()=>handleDelete(product._id)} className="btn capitalize text-lg bg-green-300" >Delete</button>
    
     
     <button className="btn capitalize text-lg bg-orange-300">Update</button>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default Carts;





