

const Certification = () => {
    return (
        <div className="overflow-hidden bg-lime-50 dark:bg-black">
           
           <h1 className=" mt-8 text-4xl font-bold text-teal-700 underline text-center "> Our
Certification</h1>
          
            <div 
            className="ml-12 mt-12 w-[300px] md:w-[570px] lg:w-[800px] xl:w-[1260px]  grid grid-cols-1 gap-8 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 pb-8" 
            //  md:flex-wrap xl:flex-row gap-8 "
            // className="grid grid-cols-1   md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-8"
            >
                <div className="w-52 ">
                <img className="w-[200px] " src="https://i.ibb.co/PTQL7Xw/905e538fe82789c62ce22150f9e4dc3c9949bd0d-232x182.webp" alt="" />
                </div>
               <div  className="w-52 ">
               <img className="w-[200px]" src="https://i.ibb.co/9nKMGyR/0985aedbef542701a15b8f3507959db522263a65-232x182.webp" alt="" />
               </div>
               <div  className="w-52 ">
               <img className="w-[200px]" src="https://i.ibb.co/RH7tMpT/6aff655f563e6f8eb02634548e4c46cfba8423ea-232x182.webp" alt="" />
               </div>
               <div className="w-52">
               <img className="w-[200px]" src="https://i.ibb.co/jV8Mz7g/fe3dfab2aef8ad4c85e3f76851987053faa11f2f-232x182.webp" alt="" />
               </div>
            </div>
        </div>
    );
};

export default Certification;