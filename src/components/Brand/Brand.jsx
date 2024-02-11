/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Brand = ({ photo, brand }) => {
    // const{ brand,photo} = products || {};
    return (
        <div>
            
            <Link to={`/product/${brand}`}>   <div className=" w-[280px] h-[300px] bg-stone-300 ">
  <figure className=" w-[250px]  min-h-[200px]  ml-2 px-8 pt-10">
    <img src={photo} alt={brand} className="rounded-xl" />
  </figure>
  <div className="card-body items-end text-end  pb-44">
    <h2 className="card-title font-bold text-3xl">{brand}</h2>
    
   
  </div>
</div>
</Link>
        </div>
    );
};

export default Brand;