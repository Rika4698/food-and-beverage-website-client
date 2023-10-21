/* eslint-disable react/prop-types */
import RatingSet from "../BrandDeatailSet/RatingSet";


const Details = ({card}) => {
    const { name, image, brand, type,details, price,rating } = card || {};
    return (
        <div>
            {/* border-[2px] border-black */}
            <div className="card mb-8  lg:card-side bg-base-100 shadow-xl">
  <figure className=" "><img className="" src={image} alt=""/></figure>
  <div className="card-body w-auto bg-pink-50 lg:w-[280px] xl:w-[300px] ">
    <div className="flex gap-8 ">
    <h2 className="card-title">{name}</h2>
    <div className="badge badge-secondary text-center font-bold w-20 h-8">{brand}</div>
    </div>
    <h1 className="">{type}</h1>
    <div className="flex gap-2  ">
    <RatingSet  rating={rating}></RatingSet>
    <p className="text-base  ">({rating})</p>
  </div>
  <h1 className="text-xl text-rose-500 font-bold ">Price: {price} TK</h1>
  <h1 className="text-lg font-bold underline text-blue-900">Description:</h1>
  <h3 className="text-center text-base text-sky-900">{details}</h3>
 
    

    <div className="card-actions justify-end">
      <button className="btn capitalize bg-fuchsia-500 text-white text-lg">Add to Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;