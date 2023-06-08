import React, { useContext, useState } from "react";
import login from "../../assets/login/undraw_Login_re_4vu2.png";
import SocialLogin from "../Shared/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaGoogle, FaEyeSlash, FaEye } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const {signIn}=useContext(AuthContext)
  const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


  const handleLogin =event=>{
    event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password= form.password.value;
        console.log(email, password)

        signIn(email,password)
        .then(result =>{
            const user =result.user;
            console.log(user)
            Swal.fire({
                title: 'Login Successfully',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
              navigate(from, { replace: true });
        
        })
  }



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
            <form onSubmit={handleLogin} className="card-body">
                
              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered w-[215px] lg:w-[300px]"
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
                    className="input input-bordered lg:w-[300px]"
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
