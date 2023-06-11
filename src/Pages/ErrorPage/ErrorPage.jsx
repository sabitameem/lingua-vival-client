import React from "react";
import errorPicture from "../../assets/error/undraw_Page_not_found_re_e9o6.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ErrorPage = () => {
  return (
    <div className="w-full text-center">
      <Helmet>
        <title>Error Page | LinguaViva</title>
      </Helmet>
      <img className="mx-auto w-1/2" src={errorPicture} alt="" />
      <Link to="/">
        <button className="bg-color-four btn-sm lg:btn-md text-white rounded-lg">
          Back to Home Page
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
