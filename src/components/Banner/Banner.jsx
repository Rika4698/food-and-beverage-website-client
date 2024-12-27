/* eslint-disable react/prop-types */






const Banner = () => {

  
    

    return (
        <div>
         {/* <div className="hero h-[700px] " style={{backgroundImage: 'url(https://i.ibb.co/GdcjhrC/wepik-export-20231018153418-Hu-Tl.png)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center  text-neutral-content">
    <div className="max-w-md">
      <h1 className="pb-5 text-6xl font-bold text-center text-emerald-400">Best Food And Beverages Industry of BD</h1>
      <p className="pb-5 text-lg text-sky-400">Here you can get organic and fresh food in your healthy life.</p>
    <button  className="btn bg-sky-500">Shop Now</button>
    </div>
  </div>
</div> */}


<div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
  <div className="absolute inset-0">
    <img src="https://i.ibb.co/GdcjhrC/wepik-export-20231018153418-Hu-Tl.png" alt="Background Image" className="object-cover object-center w-full h-full " />
    <div className="absolute inset-0 bg-black opacity-60"></div>
  </div>
  
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center my-16 ">
    <h1 className="text-3xl font-bold leading-tight mb-4  text-blue-400 md:text-5xl">Best Food And Beverages Industry of BD</h1>
    <p className="text-base text-gray-300 mb-8 md:text-lg px-2 ">Here you can get organic and fresh food in your healthy life.</p>
    <a href="#" className="bg-purple-400 text-gray-800 hover:bg-sky-300 py-2 px-6 rounded-full  font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg md:text-lg">Shop Now</a>
  </div>
</div>

        </div>
    );
};

export default Banner;