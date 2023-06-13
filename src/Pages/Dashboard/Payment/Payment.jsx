import React from "react";
import { Helmet } from "react-helmet";
import useClasses from "../../../hooks/useClasses";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import paymentPhoto from '../../../assets/payment/undraw_Credit_card_payment_re_o911.png'

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [selectedClasses]=useClasses()
    console.log(selectedClasses)
    const location = useLocation();
    // const searchParams = new URLSearchParams(location.search);
     const singleSelectedClass = location.state
     //const {item} =useLocation();

     console.log(singleSelectedClass)

    
    
  return (
    <div className="">
      <Helmet>
        <title>Payment | LinguaViva</title>
      </Helmet>
      <div className="w-[300px] mx-auto mt-0">
        <img src={paymentPhoto} alt="" />
      </div>
      <h4 className="lg:text-4xl text-xl font-bold text-color-one">Pa<span className="text-color-four">y</span>ment</h4>
      
      <Elements stripe={stripePromise}>
        <CheckoutForm singleSelectedClass={singleSelectedClass}></CheckoutForm>
      </Elements>
      
      
    </div>
  );
};

export default Payment;
