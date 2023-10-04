import { useEffect, useState } from "react";
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from "./CheckoutForm";
import { Elements } from '@stripe/react-stripe-js';
import { useSelector } from "react-redux";
import { Box, Divider, Typography } from '@mui/material';
import styled from '@emotion/styled';

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Payment = () => {

  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState('');
  const cart = useSelector(state => state.cart);
  const customer = useSelector(state => state.customer);
  console.log(customer);
  const displayName = customer[0].name.charAt(0).toUpperCase() + customer[0].name.substring(1);

  let totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.unitAmount
  }, 0);

  totalPrice = totalPrice / 100 + '.00';

  useEffect(() => {
    fetch('/api/v1/config').then(async r => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    })
  }, []);


  useEffect(() => {
    fetch("/api/v1/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 25000, currency: 'usd' }),
    }).then(async (result) => {
      let { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    });
  }, []);

  return (
    <div style={{ marginTop: '60px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1>Thank You For Shopping With Us, {displayName}!</h1>
      <h3>Order Number: {customer[0]?._id}</h3>
      <Box>
        {cart.map(item => (
          <Box key={`${item.name}-${item._id}`}>
            <FlexBox p='15px 0' >
              <Box flex='1 1 40%'>
                <img
                  src={`../../src/assets/${item.picturePath}`}
                  alt={item?.name}
                  height='164px'
                  width='123px'
                />
              </Box>
              <Box flex='1 1 60%'>
                <FlexBox mb='5px'>
                  <Typography fontWeight='bold'>
                    {item.name}
                  </Typography>
                </FlexBox>
                <Typography >{item.description}</Typography>
                <FlexBox m='15px 0'>
                  <Box
                    display='flex'
                    alignItems='center'
                  >
                    <Typography variant='h4' fontWeight='bold'>{item.count}</Typography>
                  </Box>
                  <Typography fontWeight='bold'>
                    {item.displayAmount}
                  </Typography>
                </FlexBox>
              </Box>
            </FlexBox>
            <Divider />
          </Box>
        ))}
      </Box>
      <Typography mt={2} variant='h3' fontWeight='bold'>Total Price: ${totalPrice}</Typography>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  )
}
export default Payment;