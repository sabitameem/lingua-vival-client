import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const PaymentHistory = () => {
  const [histories, setHistories] = useState([]);

  useEffect(() => {
   
    //fetch("http://localhost:5000/payments")
      fetch("https://lingua-viva-server.vercel.app/payments")
      .then((res) => res.json())
      .then((data) => {
        setHistories(data);
      });
  }, []);
  console.log(histories);
  return (
    <div>
      <Helmet>
        <title>Payment History | LinguaViva</title>
      </Helmet>
      <div className=" divider  mt-3"></div>
      <h3 className="lg:text-3xl text-xl  font-semibold">
        PayMent Count : {histories.length}
      </h3>
      <div className=" divider mb-4"></div>
      <div className="overflow-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Transaction Id</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {histories?.map((history, index) => {
              return (
                <tr key={history._id}>
                  <td>{index + 1}</td>
                  <td>{history.className}</td>
                  <td>{history.transactionId}</td>
                  <td>{history.date}</td>
                </tr>
              );
            })}
            {/* <tr>
              <td>index+1</td>
              <td>histories.ClassName</td>
              <td>histories.transactionId</td>
              <td>histories.date</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
