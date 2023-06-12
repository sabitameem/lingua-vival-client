import React, { useContext, useState } from "react";
import signUp from "../../assets/login/undraw_sign_up_n6im.svg";
import SocialLogin from "../Shared/SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

// import { ToastContainer, toast } from "react-toastify";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const onSubmit = (data) => {
    console.log(data);
    if (data.password !== data.confirmed) {
      setError("Password does not match");
      return;
    }
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const saveUser = { name: data.name, email: data.email };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
        })
        .catch((error) => console.log(error));
    });
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
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              {/* name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Your Name"
                  className="input input-bordered "
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered "
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              {/* password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
              </div>
              {/* confirm password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Confirm Password
                  </span>
                </label>
                <input
                  type="password"
                  name="confirmed"
                  {...register("confirmed", { required: true })}
                  placeholder="confirm password"
                  className="input input-bordered "
                />
                {error && (
                  <span className="text-red-600">Passwords do not match</span>
                )}
                {errors.confirmed && (
                  <span className="text-red-600">
                    Confirmed password is required
                  </span>
                )}
              </div>

              {/* photo URL */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Photo URL</span>
                </label>
                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
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
