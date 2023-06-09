import React from "react";
import topClasses from "../../assets/topClasses/undraw_Content_structure_re_ebkv.png";
import doodle from "../../assets/topClasses/clumsy.png";
import { Typewriter } from 'react-simple-typewriter'
import { Fade } from "react-awesome-reveal";

const TopClasses = () => {
  return (
    <div className="lg:mt-4 mb-6 px-10 py-6">
      <div className="flex justify-center mb-7">
       
        <Fade><h4 className="lg:text-6xl text-3xl font-semibold text-color-three ">
          Our Top Classes{" "}
          
        </h4></Fade>
        <img className="w-[90px] hidden lg:block ml-7" src={doodle} alt="" />
      </div>

      <div className="lg:flex  justify-around">
        <div>
          <img className="w-56 lg:w-1/2 mx-auto" src={topClasses} alt="" />
        </div>
        <div className="lg:text-lg text-normal font-normal lg:text-end">
          <span className="text-5xl font-semibold text-color-one">
            Discover
          </span>{" "}
          our diverse range of classes taught <br className="hidden lg:block" />{" "}
          by experienced and
          <span className="text-2xl font-semibold text-color-four">
            {" "}
            passionate instructors.
          </span>{" "}
          Whether you're a beginner eager to grasp the basics or an advanced
          learner aiming to <br className="hidden lg:block" /> refine your
          language skills, we have the perfect class for you.
          <br className="hidden lg:block" /> Each class is thoughtfully crafted
          to provide a dynamic and <br className="hidden lg:block" />{" "}
          interactive learning experience. Our dedicated instructors{" "}
          <br className="hidden lg:block" /> bring language alive through
          engaging lessons,
          <br className="hidden lg:block" />
          <span className="text-teal-800 font-semibold text-2xl hover:italic">
            immersive activities, and authentic cultural insights.
          </span>
          <br className="hidden lg:block" /> You'll not only learn the language
          but also gain a deeper appreciation
          <br className="hidden lg:block" /> for the rich traditions and customs
          associated with it.
        </div>
      </div>
    </div>
  );
};

export default TopClasses;
