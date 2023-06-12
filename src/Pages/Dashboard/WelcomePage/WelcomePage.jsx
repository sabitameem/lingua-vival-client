import React from "react";
import welcome from "../../../assets/welcome/undraw_moonlight_5ksn.png";
import { Fade } from "react-awesome-reveal";
import { FaGrinStars } from "react-icons/fa";
import { Helmet } from "react-helmet";
import Lottie from 'lottie-react'
import party from '../../../assets/welcome/29774-dance-party.json'

const WelcomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Welcome | LinguaViva</title>
      </Helmet>
      <img className="lg:h-64 mx-auto" src={welcome} alt="" />
      <Fade>
        {" "}
        <h3 className="text-3xl lg:text-5xl text-color-one font-semibold text-center">
          Welcome to the Dashboard!
        </h3>
      </Fade>
      <h4 className=" text-color-three text-center text-xl lg:text-3xl flex justify-center items-center gap-2 font-medium">
        Explore More!!!!<FaGrinStars className="text-color-three"></FaGrinStars>
      </h4>
      <div className="w-[500px] mx-auto mt-0">
      <Lottie animationData={party}loop={true}></Lottie>
      </div>
    </div>
  );
};

export default WelcomePage;
