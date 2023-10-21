/* eslint-disable react/prop-types */
import RatingSet from "./RatingSet";


const BrandDetails = ({carts}) => {
    const { name, image, brand, type, price,rating } = carts || {};
    return (
        <div>
           

            <div className="card h-[600px] bg-green-100 shadow-xl">
  <figure><img className=" w-[250px] h-[250px] lg:w-[280px] lg:h-[300px] pt-10" src={image} alt="" /></figure>
  <div className="card-body">
    <h1 className="card-title font-bold">
      {name}
      <div className="badge badge-secondary text-center  w-20 h-10">{brand}</div>
    </h1>
    <p>{type}</p>
    <h1 className="text-lg text-rose-500 font-bold">Price: {price} TK</h1>
    <div className="flex gap-2">
    <RatingSet  rating={rating}></RatingSet>
    <p className="text-base  ">({rating})</p>
  </div>
    <div className="card-actions justify-between mt-4">
      <button className="btn capitalize text-lg bg-green-300" >Details</button>
      <button className="btn capitalize text-lg bg-orange-300">Update</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default BrandDetails;