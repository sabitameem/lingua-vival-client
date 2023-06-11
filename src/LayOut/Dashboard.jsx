import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaBookReader, FaChalkboardTeacher, FaHome } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-sm text-color-two bg-color-four drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full text-lg bg-color-three text-color-two">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
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
