import React, { useContext, useState } from "react";
import signUp from "../../assets/login/undraw_sign_up_n6im.svg";
import SocialLogin from "../Shared/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../provider/AuthProvider";

const SignUp = () => {
   const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from || "/";
  const [error, setError] = useState("");
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmed = form.confirmed.value;
    const photoURL = form.photo.value;
    console.log(name, email, password, photoURL, confirmed);
     createUser(email, password)
  };

  return (
    <div>
      <Helmet>
        <title>Sign Up | LinguaViva</title>
      </Helmet>

      <div className="hero min-h-screen mb-20">
        <div className="hero-content shadow-2xl flex-col  lg:flex-row">
          <div className="text-center w-1/2 lg:text-left">
            <img src={signUp} alt="" />
          </div>
          <div className="card  md:w-1/2 max-w-sm  bg-base-100">
            <h2 className="text-3xl font-bold text-center">
              Sign Up Please...
            </h2>
            <form onSubmit={handleSignUp} className="card-body">
              {/* name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered "
                />
              </div>
              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered "
                />
              </div>
              {/* password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  required
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered "
                />
              </div>
              {/* confirm password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Confirm Password
                  </span>
                </label>
                <input
                  required
                  type="password"
                  name="confirmed"
                  placeholder="confirm password"
                  className="input input-bordered "
                />
              </div>
              {/* photo URL */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Photo URL</span>
                </label>
                <input
                  required
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered "
                />
              </div>

              {/* submit button */}
              <div className="form-control mt-6">
                <input
                  className="bg-color-four text-white py-2 rounded-lg px-2"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-red-500 text-center mt-0">{error}</p>
            <p className="text-custom-color text-center">
              Already Have an account?
              <Link to="/login">
                <span className="font-semibold">Login</span>
              </Link>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
