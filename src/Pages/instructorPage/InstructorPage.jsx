import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import SingleInsCard from "./SingleInsCard";
import { Helmet } from "react-helmet";

const InstructorPage = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("https://lingua-viva-server.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
      });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Instructors | LinguaViva</title>
      </Helmet>
      {/* text */}
      <div className="flex justify-center mb-7">
        <Fade>
          <h4 className="lg:text-6xl text-3xl text-center font-semibold text-color-three ">
            {" "}
            Our Instructors{" "}
          </h4>
        </Fade>
        <img
          className="lg:w-[90px] ml-2 lg:ml-7"
          src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/external-teacher-online-learning-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-1.png"
          alt="external-teacher-online-learning-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-1"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-20 mt-12">
        {
            instructors.map(singleIns => <SingleInsCard key={singleIns._id} singleIns={singleIns}></SingleInsCard>)
        }
        
      </div>
    </div>
  );
};

export default InstructorPage;
