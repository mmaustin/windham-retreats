import { useEffect, useState } from "react";
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from "./CheckoutForm";
import {Elements} from '@stripe/react-stripe-js';
import { useSelector } from "react-redux";
import { Box, Divider, IconButton, Typography} from '@mui/material';
import { Close, Add, Remove } from "@mui/icons-material";
import { shades } from "../theme";
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
                  {/* <IconButton onClick={()=> dispatch(removeFromCart({id: item._id}))} >
                    <Close />
                  </IconButton> */}
                </FlexBox>
                <Typography >{item.description}</Typography>
                <FlexBox m='15px 0'>
                  <Box 
                    display='flex'
                    alignItems='center'
                    border={`1.5px solid ${shades.neutral[500]}`}
                  >
                    <IconButton
                      // onClick={()=> dispatch(decreaseCount({id: item._id}))}
                    >
                      <Remove />
                    </IconButton>
                    <Typography>{item.count}</Typography>
                    <IconButton
                      // onClick={()=> dispatch(increaseCount({id: item._id}))}
                    >
                      <Add />
                    </IconButton>                        
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