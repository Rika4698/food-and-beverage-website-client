/* eslint-disable react/prop-types */

import RatingSet from "../../BrandDeatailSet/RatingSet";


const Top = ({tops}) => {
    const { name, image,  type, rating } = tops || {};
    return (
        <div>
             <div className="card h-[480px] bg-green-100 shadow-xl">
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
</div>
        </div>
    );
};

export default Top;