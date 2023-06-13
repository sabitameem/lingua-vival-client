import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import './CheckOutForm.css'
import Swal from 'sweetalert2';

const CheckoutForm = ({singleSelectedClass}) => {
    const stripe =useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');


    useEffect(() => {
        if (singleSelectedClass?.price > 0) {
            axiosSecure.post('/create-payment-intent', {price: singleSelectedClass?.price })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret);
            })
        }
    }, [singleSelectedClass?.price])

    const handleSubmit=async(event)=>{
        event.preventDefault();

        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement)
        if(card === null){
             return;
        }
        //console.log('card', card)
        const { error} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            //console.log('error', error)
             setCardError(error.message);
        }
        else{
            setCardError('');
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }
        console.log('payment intent', paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
             const payment = {
                 email: user?.email,
                 transactionId: paymentIntent.id,
                 price : singleSelectedClass?.price,
                 date: new Date(),
                 selectedClassId: singleSelectedClass._id,
                 classId: singleSelectedClass.classId,
                 status: 'service pending',
                className: singleSelectedClass.name
             }
             axiosSecure.post('/payments',payment)
             .then(res=>{
              console.log(res.data);
              if(res.data.insertedId){
                Swal.fire({
                             position: "center",
                             icon: "success",
                             title: "Payment Success",
                             showConfirmButton:false,
                             timer: 1000
      
                           })
              }
             })
            //  axiosSecure.post('/payments', payment)
            // .then(res => {
            //      console.log(res.data);
            //      if (res.data.result.insertedId) {
            //         // display confirm
            //         Swal.fire({
            //           position: "center",
            //           icon: "success",
            //           title: "Payment Success",
            //           showConfirmButton:false,
            //           timer: 1000

            //         })
            //      }
            //  })
        }

    }

    return (
        <>
           <form onSubmit={handleSubmit} className='lg:mx-60 mx-2 mt-8 '>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn bg-color-four text-color-two hover:border-color-four hover:text-color-four btn-sm" type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>} 
      {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;