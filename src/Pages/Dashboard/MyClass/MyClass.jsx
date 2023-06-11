import React from "react";
import { Helmet } from "react-helmet";
import useClasses from "../../../hooks/useClasses";
import { Link } from "react-router-dom";
import {
  FaTrashAlt,
} from "react-icons/fa";

const MyClass = () => {
  const [selectedClasses, refetch] = useClasses();
  console.log(selectedClasses);
  const total = selectedClasses.reduce((sum, item) => item.price + sum, 0);
  return (
    <div>
      <Helmet>
        <title>My Classes | LinguaViva</title>
      </Helmet>
      <div className=" divider  mt-3"></div>
      <h3 className="text-3xl text-center  font-semibold">
        My Selected Classes : {selectedClasses.length} & Total Price : ${total}
      </h3>
      <div className=" divider mb-4"></div>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class</th>
              <th>Price</th>
              <th>Pay</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {selectedClasses.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar flex items-center gap-3">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                    {item.name}
                  </div>
                </td>

                <td className="">${item.price}</td>
                <td>
                  <Link>
                    <button className="btn btn-warning btn-sm">PAY</button>
                  </Link>
                </td>
                <td>
                  <button className="btn btn-ghost bg-red-600  text-white">
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
