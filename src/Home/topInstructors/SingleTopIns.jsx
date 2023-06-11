import React from 'react';

const SingleTopIns = ({singleTopIns}) => {
    return (
        <div className="card rounded-none h-60 lg:h-72 w-full  mb-5 shadow-xl">
             <figure>
        <img
          className="lg:h-[330px] h-60 w-full"
          src={singleTopIns.instructor_image}
          alt="Shoes"
        />
      </figure>
        </div>
    );
};

export default SingleTopIns;