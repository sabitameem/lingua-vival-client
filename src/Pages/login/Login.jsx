import React from "react";
import login from "../../assets/login/undraw_sign_up_n6im.svg";
import SocialLogin from "../Shared/SocialLogin";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content shadow-2xl flex-col lg:flex-row">
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
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
               
              </div>
              <div className="form-control mt-6">
                
                <input   className='bg-color-four text-white py-2 rounded-lg px-2' type="submit" value="Sign In" />
              </div>
          </form>
          <p className="text-custom-color text-center">New here?<Link to='/signUp'><span className="font-semibold" >Create a New Account</span></Link></p>
            <SocialLogin></SocialLogin>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
