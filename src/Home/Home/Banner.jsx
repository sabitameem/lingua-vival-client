import React from 'react';
import Lottie from 'lottie-react'
import banner from '../../assets/129482-translate-illustration.json'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='my-container flex flex-col items-center justify-between lg:flex-row mb-20'>
            <div className=' lg:max-w-lg  lg:pr-5 lg:mb-0'>
            <div className='max-w-xl mb-6 lg:mt-8'>
            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
            Welcome <br className='hidden md:block' /> to the{' '} <br className='lg:hidden' />
            <span className='inline-block text-color-three'>Lingu</span>
            <span className='inline-block text-color-one'>Viva</span> !!! 
          </h2>
          <p className='text-base text-gray-700 md:text-lg'>
          where linguistic adventures await! Immerse yourself in the art of language learning and open the door to a world of cultural connections and boundless opportunities. Our school is a vibrant hub of knowledge, designed to ignite your passion for languages and empower you to become a confident global communicator. 
          </p>
            </div>
            <div className='flex flex-col items-center md:flex-row'>
                 <Link to='/classes' className='btn-style md:w-auto md:mr-4'>
                 <div className='inline-flex items-center justify-center w-full h-full'>
                 <p className='mr-3'>Explore Our Classes </p>
                 </div>
                 </Link>
            </div>
            </div>
            {/* animation */}
            <div className=' lg:w-1/2 '>
               <div className='w-full rounded-lg sm:hidden md:hidden lg:block mb-20  lg:w-4/5 lg:ml-auto h-56  sm:h-56'>
                <Lottie animationData={banner}loop={true}></Lottie>
               </div>
            </div>
        </div>
    );
};

export default Banner;