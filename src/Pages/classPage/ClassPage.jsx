import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import reading from "../../assets/classPage/Open Doodles - Studying.png";
import SingleClassCard from "./SingleClassCard";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

const ClassPage = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/topclasses')
    //fetch("https://lingua-viva-server.vercel.app/topClasses")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Classes | LinguaViva</title>
      </Helmet>
      {/* text */}
      <div className="flex justify-center items-center">
        
       <Fade> <h3 className="text-4xl mb-4 font-bold text-color-four text-center mt-5">
          Here is all of our classes..... have a look
        </h3></Fade>
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
