import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';


// import { Rating } from "@smastrom/react-rating";
// import '@smastrom/react-rating/style.css'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const ExtraSection = () => {
    const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://lingua-viva-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
    return (
        <div className='mb-8 '>
           <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
           {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="mx-24 my-10 flex flex-col items-center">
            
              <Rating  style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <p className=" text-color-three text-2xl font-bold lg:text-2xl py-6 ">{review.name}</p>
              <FontAwesomeIcon className="lg:w-24 w-12 mr-20 lg:mr-96 h-20 text-black mt-3" icon={faQuoteLeft}  />

              <h3 className="text-lg lg:text-xl text-color-three">{review.comment}</h3>
              <FontAwesomeIcon className="lg:w-24 w-12 ml-20 lg:ml-96 h-20 text-black mt-3" icon={faQuoteRight}  />
            </div>
          </SwiperSlide>
        ))}

           </Swiper>
        </div>
    );
};

export default ExtraSection;