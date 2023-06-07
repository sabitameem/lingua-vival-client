import React from "react";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <div className="divider"></div>
      <div className="mt-0 flex justify-center items-center">
        <span className="mt-7 mb-2  mr-3">Login With </span>
        <div className="flex items-center">
          <button className="btn -mb-5 text-color-four hover:bg-color-four hover:text-white btn-sm btn-circle btn-outline">
            <FaGoogle></FaGoogle>
          </button>{" "}
          <span className="mt-7 text-lg text-color-one font-semibold mb-2">OOGLE</span>
        </div>
      </div>
      <div className="text-center"></div>
    </div>
  );
};

export default SocialLogin;
