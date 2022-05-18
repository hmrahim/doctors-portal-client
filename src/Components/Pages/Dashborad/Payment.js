import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import token from "../../Hooks/Token";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0ULQEQ3HWClU68RtrUt6CyvbFHjwzYfg7M3eyxuTnp8rigwHoU9A2g4aaV3KZxcUQ5LAgWqvUvV0inCOV2pp6W00CtO27aTl"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://floating-bayou-18432.herokuapp.com/bookings/${id}`;
  const { data, isLoading, refetch } = useQuery(["available", id], () =>
    fetch(url, token).then((res) => res.json())
  );
 
  return (
    <div className="flex justify-center items-center">
      <div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title capitalize">
              Hello Mr. {data?.patientName} pay for {data?.name}
            </h2>

            <p>
              Your appointment on {data?.date} at {data?.slot}
            </p>
            <p className="text-primary font-bold">Please pay ${data?.price}</p>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl mt-4">
          <div class="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm data={data} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
