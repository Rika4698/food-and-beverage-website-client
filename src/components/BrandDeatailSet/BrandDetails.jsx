/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import RatingSet from "./RatingSet";


const BrandDetails = ({carts}) => {
    const { _id,name, image, brand, type, price,rating } = carts || {};
    return (
        <div>
           

            {/* <div className="card h-[600px] bg-green-100 shadow-xl">
  <figure><img className=" w-[250px] h-[250px] lg:w-[280px] lg:h-[300px] pt-10" src={image} alt="" /></figure>
  <div className="card-body">
    <h1 className="card-title font-bold">
      {name}
      <div className="badge badge-secondary text-center  w-20 h-10">{brand}</div>
    </h1>
    <p>{type}</p>
   
    <div className="flex gap-2">
    <RatingSet  rating={rating}></RatingSet>
    <p className="text-base  ">({rating})</p>
  </div>
  <h1 className="text-xl text-rose-500 font-bold ">Price: {price} TK</h1>
    <div className="card-actions justify-between mt-4">
    <Link to={`/details/${_id}`}>  
    <button className="btn capitalize text-lg bg-green-300" >View Details</button>
    </Link>
     <Link to={`/update/${_id}`}>
     <button className="btn capitalize text-lg bg-orange-300">Update</button>
     </Link>
    </div>
  </div>
</div> */}



<div className="rounded-lg overflow-hidden hover:border-2 border-slate-400   shadow-lg  flex flex-col ">
            
            <div className="relative">
                    <img className="w-full  max-h-[300px]"
                        src={image || '/default-avatar.png'} alt="Image"
                        onError={(e) => (e.target.src = '/default-avatar.png') }/>
                    <div
                        className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-200 opacity-25">
                    </div>
               
              
                    <div
                        className="text-xs absolute top-0 right-0 bg-teal-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white font-semibold hover:text-teal-600 transition duration-500 ease-in-out">
                       {brand}
                    </div>
               
            </div>
            <div className="px-6 py-4 mb-auto flex flex-col  flex-warp   min-h-[200px] md:min-h-[230px]  dark:bg-slate-500">
                <h2 
                    className=" font-semibold text-lg   text-indigo-800 dark:text-white  inline-block mb-2 min-h-[70px]"
                    >{name}</h2>
                <h3 className="text-gray-500 text-sm dark:text-gray-300 -mt-4">
                    {type}
                </h3>
                <h2 className="text-lg text-green-700 font-semibold my-2 dark:text-green-300">Price: {price} TK</h2>
                <div className="flex items-center mb-4">
        <RatingSet   rating={rating}></RatingSet>
          <span className="ml-2 text-gray-600 text-base dark:text-gray-300">({rating})</span>
        </div>
            </div>
            <div className="px-3 py-3 flex  items-center justify-between bg-gray-200 dark:bg-gray-400  gap-8">
            <Link to={`/details/${_id}`} className=" flex-1 bg-gradient-to-b from-sky-200 to-blue-900 rounded-full shadow-md shadow-black/50 hover:outline hover:outline-blue-800 focus:outline focus:outline-blue-800 transition-all duration-100 active:from-black active:to-zinc-800 active:translate-y-px py-2 text-center">
    {/* <button
      className="  bg-gradient-to-b from-sky-300 to-sky-600 rounded-full shadow-md shadow-black/50 hover:outline hover:outline-sky-500 focus:outline focus:outline-sky-500 transition-all duration-100 active:from-black active:to-zinc-800 active:translate-y-px py-2 border border-black"
    ></button>  */}
      <span className="text-lg font-semibold text-white ">View Details</span>
    </Link>

    <Link to={`/update/${_id}`}   className="flex-1 text-lg font-semibold bg-gradient-to-b from-amber-200 to-orange-700 rounded-full shadow-md shadow-black/50 hover:outline hover:outline-orange-600 focus:outline focus:outline-orange-600 transition-all duration-100 active:from-black active:to-zinc-800 active:translate-y-px py-2 text-center "
    >
    {/* <button
      className="flex-1 text-lg font-semibold bg-gradient-to-b from-sky-300 to-sky-600 rounded-full shadow-md shadow-black/50 hover:outline hover:outline-sky-500 focus:outline focus:outline-sky-500 transition-all duration-100 active:from-black active:to-zinc-800 active:translate-y-px py-2 border border-black"
    ></button> */}
      <span className="text-lg font-semibold text-white">Update</span>
    </Link>
  </div>



        </div>


       
       


       


        
       
        

 
        </div>
    );
};

export default BrandDetails;