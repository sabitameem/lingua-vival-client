import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Home/Home/Home";
import Login from "../Pages/login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'signUp',
            element: <SignUp></SignUp>
        },
      ]
      
    },
  ]);