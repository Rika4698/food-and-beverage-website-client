/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";


// const MyCart = ({card,handleDelete}) => {
//     const{product,setProduct} = useState({});
//     useEffect(() => {
//         fetch(`http://localhost:5000/product/${card.productId}`)
//         .then(res => res.json())
//         .then(data =>{
//             setProduct(data);
//         })
//         .catch(()=>{
            
//         })
// },[]);
//     return (
//         <div>
//             <div className="card h-[600px] bg-green-100 shadow-xl">
//   <figure><img className=" w-[250px] h-[250px] lg:w-[280px] lg:h-[300px] pt-10" src={product.image} alt="" /></figure>
//   <div className="card-body">
//     <h1 className="card-title font-bold">
//       {name}
//       <div className="badge badge-secondary text-center  w-20 h-10">{brand}</div>
//     </h1>
//     <p>{type}</p>
   
//     <div className="flex gap-2">
//     <RatingSet  rating={rating}></RatingSet>
//     <p className="text-base  ">({rating})</p>
//   </div>
//   <h1 className="text-xl text-rose-500 font-bold ">Price: {price} TK</h1>
//     <div className="card-actions justify-between mt-4">
//     <Link to={`/details/${_id}`}>  
//     <button className="btn capitalize text-lg bg-green-300" >View Details</button>
//     </Link>
   
//      <button onClick={()=>handleDelete(product._id)} className="btn capitalize text-lg bg-orange-300">Update</button>
    
//     </div>
//   </div>
// </div>
//         </div>
//     );
// };

// export default MyCart;