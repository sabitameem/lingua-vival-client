import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaBook,
  FaBookReader,
  FaChalkboardTeacher,
  FaFlipboard,
  FaHistory,
  FaHome,
  FaPage4,
  FaSistrix,
  FaUpload,
  FaUser,
  FaUserFriends,
  FaWallet,
} from "react-icons/fa";
import useClasses from "../hooks/useClasses";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";


const Dashboard = () => {

  const [selectedClasses]=useClasses()

  // TODO:
  // const isAdmin=false;
  // const isInstructor = true;
  // const [isAdmin]=useAdmin()
  // const [isInstructor]=useInstructor()
  const [isAdmin]=useAdmin()
  const [isInstructor]=useInstructor()

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <div className="mb-20">
        <Outlet></Outlet>
        </div>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-sm flex justify-center items-center mx-auto w-[200px] text-color-two bg-color-four drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full text-lg bg-color-three text-color-two">
          {/* Sidebar content here */}
        
        {isAdmin ? (<>{/* admin start */}
          <li>
            <NavLink to='/dashboard/allUsers'>
              <FaUserFriends></FaUserFriends>All Users
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/manageClasses'>
              <FaFlipboard></FaFlipboard> Manage Classes
            </NavLink>
          </li>
          {/* admin end */}</>) : isInstructor? (<>{/* instructor start */}
          <li>
            <NavLink to='/dashboard/addAClass'>
              <FaUpload></FaUpload> Add a class
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/addedClasses'>
              <FaSistrix></FaSistrix> Added Classes
            </NavLink>
          </li>

          {/* normal */}</> ): (<>  {/* users start */}
          <li>
            <NavLink to="/dashboard/myClasses">
              <FaBook></FaBook> My Classes <span className="badge inl badge-color-two">+{selectedClasses?.length || 0}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/enrolledClasses'>
              <FaBookReader></FaBookReader>
              My Enrolled Classes
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/payment'>
              <FaWallet></FaWallet> Payment
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/history'>
              <FaHistory></FaHistory>Payment History
            </NavLink>
          </li>
          {/* users end */}</>)}


          {/* users start */}
          {/* <li>
            <NavLink to="/dashboard/myClass">
              <FaBook></FaBook> My Classes <span className="badge inl badge-color-two">+{selectedClasses?.length || 0}</span>
            </NavLink>
          </li>
          <li>
            <NavLink>
              <FaBookReader></FaBookReader>
              My Enrolled Classes
            </NavLink>
          </li>
          <li>
            <NavLink>
              <FaWallet></FaWallet> Payment
            </NavLink>
          </li>
          <li>
            <NavLink>
              <FaHistory></FaHistory>Payment History
            </NavLink>
          </li> */}
          {/* users end */}

          {/* admin start */}
          {/* <li>
            <NavLink to='/dashboard/allUsers'>
              <FaUserFriends></FaUserFriends>All Users
            </NavLink>
          </li>
          <li>
            <NavLink>
              <FaFlipboard></FaFlipboard> Manage Classes
            </NavLink>
          </li> */}
          {/* admin end */}

          {/* instructor start */}
          {/* <li>
            <NavLink>
              <FaUpload></FaUpload> Add a class
            </NavLink>
          </li>
          <li>
            <NavLink>
              <FaSistrix></FaSistrix> Added Classes
            </NavLink>
          </li> */}

          {/* normal */}

          <div className="divider "></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/instructors">
              <FaChalkboardTeacher></FaChalkboardTeacher> Instructors{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/classes">
              <FaBookReader></FaBookReader> Classes{" "}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
