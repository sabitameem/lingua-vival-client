import React, { useState } from "react";
import login from "../../assets/login/undraw_sign_up_n6im.svg";
import SocialLogin from "../Shared/SocialLogin";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaGoogle, FaEyeSlash, FaEye } from "react-icons/fa";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <Helmet>
        <title>Login | LinguaViva</title>
      </Helmet>

      <div className="hero min-h-screen">
        <div className="hero-content shadow-2xl flex-col  lg:flex-row">
          <div className="text-center w-1/2 lg:text-left">
            <img src={login} alt="" />
          </div>
          <div className="card  md:w-1/2 max-w-sm  bg-base-100">
            <h2 className="text-3xl font-bold text-center">Login</h2>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered w-[300px]"
                />
              </div>
             
             

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <div className="password-input flex justify-between gap-2">
                  <input
                  
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered w-[490px]"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? (
                      <p>
                        <FaEyeSlash></FaEyeSlash>
                      </p>
                    ) : (
                      <FaEye></FaEye>
                    )}
                  </button>
                </div>
              </div>

              <div className="form-control mt-6">
                <input
                  className="bg-color-four text-white py-2 rounded-lg px-2"
                  type="submit"
                  value="Sign In"
                />
              </div>
            </form>
            <p className="text-custom-color text-center">
              New here?
              <Link to="/signUp">
                <span className="font-semibold">Create a New Account</span>
              </Link>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
