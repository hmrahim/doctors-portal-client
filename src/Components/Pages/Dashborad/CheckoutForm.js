import { async } from "@firebase/util";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({data}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError,setCardError] = useState("")
  const [success,setSucsess] = useState("")
  const [clientSecret,setClientSecret] = useState("")

  const price = data?.price
  console.log(price);
  
  useEffect(()=> {
    if(price){
      fetch("https://floating-bayou-18432.herokuapp.com/create-payment-intent",{
        method:"POST",
        headers:{
            "content-type":"application/json",
          
        },
        body:JSON.stringify({price})
    })
    .then(res=>res.json())
    .then(resData=>{ 
        if(resData?.clientSecret){

            setClientSecret(resData.clientSecret)
            console.log(resData.clientSecret);
        }
      })

    }
    
  },[price])



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }




    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        setCardError(error.message)
        console.log(error);
      } else {
          setCardError("")
        
      }

    //  confirm card payment........


    const {paymentIntent,  intentError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: data.patientName,
              email:data.email,

            },
          },
        },
      );

      if(intentError){
          setCardError(intentError?.message)
          setSucsess("")
      }else{
          setSucsess("congratch your payment is complited")
          setCardError("")
          console.log("success",paymentIntent);
      }

      const obj = {
        transactionId:paymentIntent.id,
        email:data.email,
        name:data.patientName,


      }
      fetch(`https://floating-bayou-18432.herokuapp.com/booking/${data._id}`,{
        method:"PATCH",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(obj)
      })
      .then(res=>res.json())
      .then(sData=>console.log(sData))
  };
  return (
    <div>
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button className="btn btn-sm mt-4" type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    {
      cardError && <p className="text-red-500 ">{cardError}</p>
      }
   {success && <p className="text-success ">{success}</p>}
    </div>
  );
};

export default CheckoutForm;
