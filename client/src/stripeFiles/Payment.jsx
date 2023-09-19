import { useEffect, useState } from "react";
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from "./CheckoutForm";
import {Elements} from '@stripe/react-stripe-js';
import { useSelector } from "react-redux";


const Payment = () => {

  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState('');
  const cart = useSelector(state => state.cart);

  let totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.unitAmount
  }, 0);

  totalPrice = totalPrice/100 + '.00';

  useEffect(() => {
    fetch('/api/v1/config').then(async r => {
      const {publishableKey} = await r.json();
      setStripePromise(loadStripe(publishableKey));
    })
  }, []);

  //const data = {amount: 25000, currency: 'usd'};

  useEffect(() => {
    fetch("/api/v1/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({amount: 25000, currency: 'usd'}),
    }).then(async (result) => {
      let { clientSecret } = await result.json();
      setClientSecret(clientSecret);
      //console.log(clientSecret);
    });
  }, []);

  return (
    <div style={{marginTop: '60px'}}>
      <h1>Add Payment Information</h1>
      <p>${totalPrice}</p>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret}}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  )
}
export default Payment;