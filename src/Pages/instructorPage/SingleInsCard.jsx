import React from 'react';

const SingleInsCard = ({singleIns}) => {
    return (
        <div className='card card-compact w-[300px]  bg-color-two '>
            <figure>
                <img className='w-full  h-[200px]' src={singleIns.instructor_image} alt="" />
            </figure>
            <div className='w-full py-3 px-3'>
            <p className='text-xl font-bold  mt-4 mr-2'><span className='text-xl font-medium'>Name :</span> {singleIns.instructor_name}</p>
            <p className='text-base lg:text-lg  mt-2 mr-2'>Email : {singleIns.instructor_email}</p>
            
            </div>

        </div>
    );
};

export default SingleInsCard;