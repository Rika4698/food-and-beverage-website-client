/* eslint-disable react/prop-types */
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
 

const SliderDetail = ({slider}) => {
    const { image1 , image2 , image3} = slider || {};
    
const AutoplaySlider = withAutoplay(AwesomeSlider);
    // console.log(slider);
    return (
        <div>
            {/* <div className="carousel w-full h-[400px] md:h-[500px] lg:h-[500px]">
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
 
</div> */}
 <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={3000}
    infinite={true}
  >
    <div data-src={image1} />
    <div data-src={image2} />
    <div data-src={image3} />
  </AutoplaySlider>

<div className="overflow-hidden rounded-lg shadow-lg">
     
      <div className="carousel">

       
        <div className="carousel-item bg-white dark:bg-gray-800 p-6">
          <img src={image1} alt="Slide 1" className="w-full h-64 object-cover rounded-md"/>
          <h2 className="text-xl font-semibold mt-4">Slide 1</h2>
          <p className="text-gray-600 dark:text-gray-400">This is the first slide of the carousel.</p>
        </div>

       
        <div className="carousel-item bg-white dark:bg-gray-800 p-6">
          <img src={image2} alt="Slide 2" className="w-full h-64 object-cover rounded-md border border-black"/>
          <h2 className="text-xl font-semibold mt-4">Slide 2</h2>
          <p className="text-gray-600 dark:text-gray-400">This is the second slide of the carousel.</p>
        </div>

     
        <div className="carousel-item bg-white dark:bg-gray-800 p-6">
          <img src={image3} alt="Slide 3" className="w-full h-64 object-cover rounded-md"/>
          <h2 className="text-xl font-semibold mt-4">Slide 3</h2>
          <p className="text-gray-600 dark:text-gray-400">This is the third slide of the carousel.</p>
        </div>
      </div>
    </div>
        </div>
    );
};

export default SliderDetail;