import React from 'react';

const SingleInsCard = ({singleIns}) => {
    return (
        <div className='card card-compact my-7 bg-color-two '>
            <figure>
                <img className='w-full  h-[200px]' src={singleIns.instructor_image} alt="" />
            </figure>
            <div className='px-2 py-3'>
            <p className='text-xl font-bold text-end mt-4 mr-2'><span className='text-xl font-medium'>Name :</span> {singleIns.instructor_name}</p>
            <p className='text-lg text-end mt-2 mr-2'>Email : {singleIns.instructor_email}</p>
            
            </div>

        </div>
    );
};

export default SingleInsCard;