/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Brand = ({ photo, brand }) => {
    // const{ brand,photo} = products || {};
    return (
        <div>
            
            {/* <Link to={`/product/${brand}`}>   <div className=" w-[280px] h-[300px] bg-stone-300 ">
  <figure className=" w-[250px]  min-h-[200px]  ml-2 px-8 pt-10">
    <img src={photo} alt={brand} className="rounded-xl" />
  </figure>
  <div className="card-body items-end text-end  pb-44">
    <h2 className="card-title font-bold text-3xl">{brand}</h2>
    
   
  </div>
</div>
</Link> */}
<Link to={`/product/${brand}`}>
<div className="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 dark:bg-slate-500 rounded-lg max-w-xs shadow-lg group   ">
<svg className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283" fill="none" style={{opacity: '0.1'}}>
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
        </svg>
    
    <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 "
            style={{
              background: 'radial-gradient(black, transparent 60%)',
              transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
              opacity: 0.2,
            }}>
        </div>
        <img className="relative w-40 h-40 rounded-lg" src={photo} alt=""/>
    </div>
    <div className="relative text-white px-3 pb-6 mt-6">
        
        <div className="flex justify-between ">
            <h1 className="block font-bold text-xl">{brand}</h1>
            <span className="block bg-white rounded-full text-teal-500 dark:text-slate-500 text-xs font-bold px-2 py- leading-none flex items-center"><span>
        View More
    </span>
    <svg  fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        viewBox="0 0 24 24" className="w-5 h-5 pl-1">
        <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg></span>
        </div>
    </div>
</div>

</Link>


        </div>
    );
};

export default Brand;