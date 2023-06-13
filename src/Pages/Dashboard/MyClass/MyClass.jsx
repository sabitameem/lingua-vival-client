import React from "react";
import { Helmet } from "react-helmet";
import useClasses from "../../../hooks/useClasses";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyClass = () => {
  const [selectedClasses, refetch] = useClasses();
  console.log(selectedClasses);
  const total = selectedClasses.reduce((sum, item) => item.price + sum, 0);
  
  // delete function
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://lingua-viva-server-sabitameem.vercel.app/classes/${item._id}`, {
          method: "DELETE",
        })
          //fetch(`https://lingua-viva-server.vercel.app/classes/${item._id}`,
          // {
          //   method: 'DELETE'
          // })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  // const handlePayment=item=>{
    
  //   window.location.href = `/dashboard/payment?singleSelectedClass=${item}`;
  // }

  return (
    <div>
      <Helmet>
        <title>My Classes | LinguaViva</title>
      </Helmet>
      <div className=" divider  mt-3"></div>
      <h3 className="lg:text-3xl text-xl  font-semibold">
        My Selected Classes : {selectedClasses.length} &{" "}
        <br className="lg:hidden" /> Total Price : ${total}
      </h3>
      <div className=" divider mb-4"></div>

      <div className="overflow-auto">
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
                  <Link
                   to='/dashboard/payment'
                    state={item}
                  >
                    <button className="btn bg-color-four text-color-two hover:border-color-four hover:text-color-four btn-sm">
                      PAY
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost bg-red-600  text-white"
                  >
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
