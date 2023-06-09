import React from "react";

const SingleTopClass = ({ singleClass }) => {
  return (
    <div className="card card-compact w-96 bg-color-two mb-5 shadow-xl">
      <figure>
        <img
          className="h-[250px] w-full"
          src={singleClass.image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title mx-auto text-3xl text-teal-900 font-semibold">{singleClass.name}</h2>
        
        
      </div>
    </div>
  );
};

export default SingleTopClass;
