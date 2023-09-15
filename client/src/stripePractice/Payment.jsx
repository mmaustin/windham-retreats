import { useEffect, useState } from "react";
import {loadStripe} from '@stripe/stripe-js';
//import customFetch from "../utils/customFetch";


const Payment = (props) => {

  const [stripePromise, setStripePromise] = useState(null);

  useEffect(() => {
    fetch('/api/v1/config').then(async r => {
      const {publishableKey} = await r.json();
      console.log(publishableKey);
    })
  }, [])

  return (
    <>
      <h1>React Stripe and the Payment Element</h1>
    </>
  )
}
export default Payment