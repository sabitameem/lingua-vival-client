import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import './CheckOutForm.css'

const CheckoutForm = () => {
    const stripe =useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('');

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
        <button className="btn bg-color-four text-color-two hover:border-color-four hover:text-color-four btn-sm" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>} 
        </>
    );
};

export default CheckoutForm;