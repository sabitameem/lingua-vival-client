import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };
  return (
    <div>
      <div className="divider"></div>
      <div className="mt-0 flex justify-center items-center">
        <span className="mt-7 mb-2  mr-3">Login With </span>
        <div className="flex items-center">
          <button
            onClick={handleGoogleLogin}
            className="btn -mb-5 text-color-four hover:bg-color-four hover:text-white btn-sm btn-circle btn-outline"
          >
            <FaGoogle></FaGoogle>
          </button>{" "}
          <span className="mt-7 text-lg text-color-one font-semibold mb-2">
            OOGLE
          </span>
        </div>
      </div>
      <div className="text-center"></div>
    </div>
  );
};

export default SocialLogin;
