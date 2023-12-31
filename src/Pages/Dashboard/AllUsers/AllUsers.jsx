import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    // const res = await fetch("http://localhost:5000/users");
    // return res.json();
    const res =await axiosSecure.get('/users')
    return res.data
  });

  


  const handleMakeAdmin =user=>{
    fetch(`https://lingua-viva-server-sabitameem.vercel.app/users/admin/${user._id}`,{
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount){
            refetch();
            
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an Admin Now!`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  }

  const handleMakeInstructor=user=>{
    fetch(`https://lingua-viva-server-sabitameem.vercel.app/users/instructor/${user._id}`,{
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount){
            refetch();
            
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an Instructor Now!`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  }


  


  return (
    <div className="w-full">
      <Helmet>
        <title>All Users | LinguaViva</title>
      </Helmet>
      <h3 className="text-3xl font-semibold my-4">
        Total Users: {users.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="block lg:flex gap-2 ">
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button onClick={() => handleMakeAdmin(user)} className="btn w-[120px] btn-sm bg-color-two border-color-three text-color-three hover:bg-color-three  hover:text-color-two" >Admin</button>
                  )}
                  {user.role === "instructor" ? (
                    "instructor"
                  ) : (
                    <button onClick={()=> handleMakeInstructor(user)} className="btn btn-sm w-[120px] bg-color-three text-color-two hover:bg-color-two hover:border-color-three hover:text-color-three" >Instructor</button>
                  )}
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
