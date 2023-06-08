
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
        <div className="">
           <h3 className="text-3xl my-1 font-bold text-color-one text-center mt-0">We care about all of YOU</h3>
           <Swiper slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24 mt-10"
           >   
           <SwiperSlide>
          <img className="lg:h-[200px] h-[100px] " src={slider1} alt="" />
        </SwiperSlide>
           <SwiperSlide>
          <img className="lg:h-[200px] h-[100px]" src={slider2} alt="" />
        </SwiperSlide>
           <SwiperSlide>
          <img className="lg:h-[200px] h-[100px] " src={slider3} alt="" />
        
        </SwiperSlide>
           <SwiperSlide>
          <img className="lg:h-[200px] h-[100px]" src={slider4} alt="" /> 
        </SwiperSlide>
           <SwiperSlide>
          <img className="lg:h-[200px] h-[100px]" src={slider5} alt="" /> 
        </SwiperSlide>
           <SwiperSlide>
          <img className="lg:h-[200px] h-[100px]" src={slider6} alt="" />
        </SwiperSlide>
           <SwiperSlide>

          <img className="lg:h-[200px] h-[100px]" src={slider7} alt="" /> 
        </SwiperSlide>
           
           
           </Swiper>


        </div>
    );
};

export default Slider;
