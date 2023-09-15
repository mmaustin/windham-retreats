import { useEffect, useState } from "react";
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from "./CheckoutForm";
import {Elements} from '@stripe/react-stripe-js'


const Payment = () => {

  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    fetch('/api/v1/config').then(async r => {
      const {publishableKey} = await r.json();
      setStripePromise(loadStripe(publishableKey));
    })
  }, []);

  useEffect(() => {
    fetch("/api/v1/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async (result) => {
      let { clientSecret } = await result.json();
      setClientSecret(clientSecret);
      //console.log(clientSecret);
    });
  }, []);

  return (
    <>
      <h1>React Stripe and the Payment Element</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  )
}
export default Payment