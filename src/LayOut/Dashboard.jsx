import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaBook,
  FaBookReader,
  FaChalkboardTeacher,
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

const Dashboard = () => {

  const [selectedClasses]=useClasses()

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
          className="btn btn-sm  text-color-two bg-color-four drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full text-lg bg-color-three text-color-two">
          {/* Sidebar content here */}
          {/* users start */}
          <li>
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
          </li>
          {/* users end */}

          {/* admin start */}
          <li>
            <NavLink>
              <FaUser></FaUser>Manage Users
            </NavLink>
          </li>
          <li>
            <NavLink>
              <FaUserFriends></FaUserFriends> Manage Classes
            </NavLink>
          </li>
          {/* admin end */}

          {/* instructor start */}
          <li>
            <NavLink>
              <FaUpload></FaUpload> Add a class
            </NavLink>
          </li>
          <li>
            <NavLink>
              <FaSistrix></FaSistrix> Added Classes
            </NavLink>
          </li>

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
