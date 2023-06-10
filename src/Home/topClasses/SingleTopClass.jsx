import React from "react";

const SingleTopClass = ({ singleClass }) => {
  return (
    <div className="card card-compact lg:w-96 w-full bg-color-two mb-5 shadow-xl">
      <figure>
        <img
          className="h-[250px] w-full"
          src={singleClass.image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title mx-auto text-xl lg:text-3xl text-teal-900 font-semibold">{singleClass.name}</h2>
        
        
      </div>
    </div>
  );
};

export default SingleTopClass;
