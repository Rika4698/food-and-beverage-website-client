/* eslint-disable react/prop-types */

import RatingSet from "../../BrandDeatailSet/RatingSet";


const Top = ({tops}) => {
    const { name, image,  type, rating } = tops || {};
    return (
        <div>
             {/* <div className="card h-[480px] bg-green-100 shadow-xl">
  <figure><img className=" w-[250px] h-[250px] lg:w-[280px] lg:h-[300px] pt-10 " src={image} alt="" /></figure>
  <div className="card-body">
    <h1 className="card-title font-bold">
      {name}
     
    </h1>
    <h3>{type}</h3>
   
    <div className="flex gap-2">
    <RatingSet  rating={rating}></RatingSet>
    <p className="text-base  ">({rating})</p>
  </div>
 
   
  </div>
</div> */}


<div className="relative group bg-gray-200 h-[400px] shadow-lg  shadow-gray-500 rounded-2xl overflow-hidden">
    <img className="w-full h-full group-hover:h-64 object-cover rounded-2xl transition-all delay-150 duration-300 ease" src={image}/>
    <div className="bg-gray-100 w-full h-40 absolute left-0 bottom-0 -mb-44 group-hover:mb-0 rounded-b-2xl transition-all delay-150 duration-300 ease dark:bg-gray-700">
      <div className="px-6 pt-3">
        <div className="capitalize flex items-center justify-between gap-4">
          <div>
            <h2 className="text-violet-800 text-lg font-bold dark:text-white">{name}</h2>
            <h3 className=" text-slate-500 dark:text-gray-300 text-base my-2">{type}</h3>
          </div>
          <div>
         
          </div>
        </div>
        <div className="flex items-center mb-4">
        <RatingSet   rating={rating}></RatingSet>
          <span className="ml-2 text-gray-600 text-base dark:text-gray-300">({rating})</span>
        </div>
      </div>
    </div>
  </div>
        </div>
    );
};

export default Top;