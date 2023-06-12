import React from "react";
import { Helmet } from "react-helmet";
import useClasses from "../../../hooks/useClasses";
import { useLocation } from "react-router-dom";


const Payment = () => {
    const [selectedClasses]=useClasses()
    console.log(selectedClasses)
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const price = searchParams.get("price");
    
    
  return (
    <div>
      <Helmet>
        <title>Payment | LinguaViva</title>
      </Helmet>
      <h4>Payment</h4>
      <p>Price: ${price}</p>
      
    </div>
  );
};

export default Payment;
