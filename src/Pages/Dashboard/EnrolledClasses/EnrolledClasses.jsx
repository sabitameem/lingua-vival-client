import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const EnrolledClasses = () => {
    const [enrolledClass, setEnrolledClass] = useState([]);

  useEffect(() => {
    
    //fetch("http://localhost:5000/payments")
      fetch("https://lingua-viva-server.vercel.app/payments")
      .then((res) => res.json())
      .then((data) => {
        console.log('enrolled classes', data)
        setEnrolledClass(data);
      });
  }, []);
  console.log('enrolled',enrolledClass)
  return (
    <div>
      <Helmet>
        <title>Enrolled Classes | LinguaViva</title>
      </Helmet>
      <div className=" divider  mt-3"></div>
      <h3 className="lg:text-3xl text-xl  font-semibold">
        My Enrolled Classes
      </h3>
      <div className=" divider mb-4"></div>
      <div className="overflow-auto">
        <table className="table w-full">
            {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {
                enrolledClass?.map((singleEnrolledClass,index)=>{
                    return (
                        <tr key={singleEnrolledClass._id}>
                          <td>{index + 1}</td>
                          <td>{singleEnrolledClass.className}</td>
                          <td>${singleEnrolledClass.price}</td>
                          <td>{singleEnrolledClass.date}</td>
                        </tr>
                      );
                })
            }
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default EnrolledClasses;
