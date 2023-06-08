
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";


import slider1 from '../../assets/slider/high-school-building.jpg'
import slider2 from '../../assets/slider/istockphoto-1226927264-612x612.jpg'
import slider3 from '../../assets/slider/japanese-characters_UR1QVU7JVM.jpg'
import slider4 from '../../assets/slider/rs=h_1000,cg_true,m.webp'
import slider5 from '../../assets/slider/slider1.jpg'
import slider6 from '../../assets/slider/taking-notes-and-working-on-laptop.jpg'
import slider7 from '../../assets/slider/young-man-learning-different-languages-600w-736268884.webp'


const Slider = () => {
        
    return (
        <div className="mt-15 mb-10">
           {/* <h3 className="text-3xl font-semibold text-color-one text-center mt-10">Our Activities</h3> */}
           <Swiper slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
           >   
           <SwiperSlide>
          <img className="h-[200px]" src={slider1} alt="" />
          <h3  className="text-4xl uppercase -mt-16 text-white text-center">Salad</h3>
        </SwiperSlide>
           <SwiperSlide>
          <img src={slider2} alt="" />
          <h3  className="text-4xl uppercase -mt-16 text-white text-center">Salad</h3>
        </SwiperSlide>
           <SwiperSlide>
          <img src={slider3} alt="" />
          <h3  className="text-4xl uppercase -mt-16 text-white text-center">Salad</h3>
        </SwiperSlide>
           <SwiperSlide>
          <img className="h-[200px]" src={slider4} alt="" /> 
          <h3  className="text-4xl uppercase -mt-16 text-white text-center">Salad</h3>
        </SwiperSlide>
           <SwiperSlide>
          <img className="h-[200px]" src={slider5} alt="" /> 
          <h3  className="text-4xl uppercase -mt-16 text-white text-center">Salad</h3>
        </SwiperSlide>
           <SwiperSlide>
          <img src={slider6} alt="" />
          <h3  className="text-4xl uppercase -mt-16 text-white text-center">Salad</h3>
        </SwiperSlide>
           <SwiperSlide>
          <img src={slider7} alt="" />
          <h3  className="text-4xl uppercase -mt-16 text-white text-center">Salad</h3>
        </SwiperSlide>
           
           
           </Swiper>


        </div>
    );
};

export default Slider;
