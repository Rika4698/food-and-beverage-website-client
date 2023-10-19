/* eslint-disable react/prop-types */


const Brand = ({products}) => {
    const{ brand,photo} = products || {};
    return (
        <div>
            
            <div className=" w-[280px] h-[300px] bg-stone-300 ">
  <figure className=" w-[250px]  min-h-[200px]  ml-2 px-8 pt-10">
    <img src={photo} alt="" className="rounded-xl" />
  </figure>
  <div className="card-body items-end text-end  pb-44">
    <h2 className="card-title font-bold text-3xl">{brand}</h2>
    
   
  </div>
</div>
        </div>
    );
};

export default Brand;