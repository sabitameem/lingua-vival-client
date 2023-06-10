import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import reading from "../../assets/classPage/Open Doodles - Studying.png";
import SingleClassCard from "./SingleClassCard";

const ClassPage = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    //fetch('http://localhost:5000/topclasses')
    fetch("https://lingua-viva-server.vercel.app/topClasses")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);
  return (
    <div>
      {/* text */}
      <div className="flex justify-center items-center">
        <h3 className="text-3xl mb-4 font-semibold text-color-one text-center mt-5">
          Here is all of your classes..... have a look
        </h3>
        <img
          className="lg:w-[90px] lg:h-[96px] w-[59px] h-[85px] lg:block mr-5 lg:ml-7"
          src={reading}
          alt=""
        />
      </div>
      {/* classes */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10 mt-10">
        {classes.map((classCard) => (
          <SingleClassCard key={classCard._id} classCard={classCard}></SingleClassCard>
        ))}
      </div>
    </div>
  );
};

export default ClassPage;
