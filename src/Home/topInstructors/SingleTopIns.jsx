import React from 'react';

const SingleTopIns = ({singleTopIns}) => {
    return (
        <div className="card rounded-none h-72 w-full  mb-5 shadow-xl">
             <figure>
        <img
          className="h-[330px] w-full"
          src={singleTopIns.instructor_image}
          alt="Shoes"
        />
      </figure>
        </div>
    );
};

export default SingleTopIns;