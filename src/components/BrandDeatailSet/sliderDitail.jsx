/* eslint-disable react/prop-types */


const SliderDetail = ({slider}) => {
    const { image1 , image2 , image3} = slider || {};
    // console.log(slider);
    return (
        <div>
            <div className="carousel w-full h-[400px] md:h-[500px] lg:h-[500px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={image1} className="w-full " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle bg-teal-300">❮</a> 
      <a href="#slide2" className="btn btn-circle bg-teal-300">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={image2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle bg-teal-300">❮</a> 
      <a href="#slide3" className="btn btn-circle bg-teal-300">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={image3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle bg-teal-300">❮</a> 
      <a href="#slide4" className="btn btn-circle bg-teal-300">❯</a>
    </div>
  </div> 
 
</div>
        </div>
    );
};

export default SliderDetail;