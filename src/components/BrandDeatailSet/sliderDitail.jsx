/* eslint-disable react/prop-types */
// import AwesomeSlider from 'react-awesome-slider';
// import withAutoplay from 'react-awesome-slider/dist/autoplay';
// import 'react-awesome-slider/dist/styles.css';
 

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
const SliderDetail = ({slider}) => {
    const { image1 , image2 , image3} = slider || {};
    



  // const params = {
  //   spaceBetween: 30,
  //   centeredSlides: true,
  //   autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false
  //   },
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev'
  //   },
  //   loop: true, 
  // }
    // console.log(slider);
    return (
      <div className=' mt-28 lg:mt-36  '>
      <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
              delay: 2500,
              disableOnInteraction: false,
          }}
          pagination={{
              clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper  h-[400px] lg:h-[550px]"   
          // carousel w-full h-[400px] md:h-[500px] lg:h-[500px]"
      >
         <SwiperSlide>
         <img
        src={image1}
        alt="Image 1"
        className="w-full  h-[400px] lg:h-[550px] "
    />
         {/* <div id="slide1" className=" relative w-full">
    <img src={image1} className="w-full h-[548px] border" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle bg-teal-300">❮</a> 
      <a href="#slide2" className="btn btn-circle bg-teal-300">❯</a>
    </div>
     </div> */}
     </SwiperSlide>
<SwiperSlide>
    <img
        src={image2}
        alt="Image 2"
        className="w-full h-[400px] lg:h-[550px] "
    />
</SwiperSlide>
<SwiperSlide>
    <img
        src={image3}
        alt="Image 3"
        className="w-full h-[400px] lg:h-[550px] "
    />
</SwiperSlide>
      </Swiper>
  </div>
    );
};

export default SliderDetail;