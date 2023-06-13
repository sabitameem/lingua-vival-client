import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Home/Home/Home";
import Login from "../Pages/login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ClassPage from "../Pages/classPage/ClassPage";
import InstructorPage from "../Pages/instructorPage/InstructorPage";
import Dashboard from "../LayOut/Dashboard";
import MyClass from "../Pages/Dashboard/MyClass/MyClass";
import WelcomePage from "../Pages/Dashboard/WelcomePage/WelcomePage";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import Payment from "../Pages/Dashboard/Payment/Payment";
import EnrolledClasses from "../Pages/Dashboard/EnrolledClasses/EnrolledClasses";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";

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
          path: 'classes',
          element: <ClassPage></ClassPage>
        },
        {
          path:'instructors',
          element: <InstructorPage></InstructorPage>
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
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path: 'myClasses',
          element: <MyClass></MyClass>
        },
        {
          path: 'welcome',
          element:<WelcomePage></WelcomePage>
        },
        {
          path:'allUsers',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:'payment',
          element: <Payment></Payment>
        },
        {
          path: 'enrolledClasses',
          element: <EnrolledClasses></EnrolledClasses>
        },
        {
          path: 'history',
          element:<PaymentHistory></PaymentHistory>
        }
      ]
    }
  ]);