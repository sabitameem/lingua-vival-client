import React from 'react';


const SingleClassCard = ({classCard}) => {
    const cardClasses = classCard.available_seats === 0 ? 'card card-compact lg:w-96 w-full bg-color-two mb-5 shadow-xl bg-red-500' : 'card card-compact lg:w-96 w-full bg-color-two mb-5 shadow-xl';

    return (
        <div className={cardClasses}>
      <figure>
        <img
          className="h-[250px] w-full"
          src={classCard.image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title mx-auto text-xl lg:text-3xl text-teal-900 font-bold">{classCard.name}</h2>
        <div className="divider  mt-0 mb-0"></div>
        <h4 className='text-color-three lg:text-xl text-lg font-medium '>Instructor Name : <span className='font-semibold text-color-four'>{classCard.instructor_name}</span> </h4>
        <p className='text-color-three lg:text-xl text-lg font-medium'>Available Seat : {classCard.available_seats}</p>
        <p className='text-color-three lg:text-xl text-lg font-medium'>Course fee : ${classCard.price}</p>
        <button className='mt-6 btn btn-sm w-[150px] mx-auto bg-color-three text-color-two hover:bg-color-two hover:text-color-three hover:border-color-three' disabled={classCard.available_seats === 0}>Select</button>
        
        
      </div>
    </div>
    );
};

export default SingleClassCard;