import { useSelector, useDispatch } from 'react-redux';
import { Box, Grid, Button, Stepper, Step, StepLabel, Typography, TextField, Divider, useTheme } from '@mui/material';
import { useState, useEffect } from 'react';
import customFetch from '../../utils/customFetch';
import getFormValues from '../../utils/getFormValues';
import { getCustomer } from '../../state';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
// import MessageForm from '../global/MessageForm';
import { shades } from '../../theme';

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`


const Checkout = () => {

  const { palette: { info } } = useTheme();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const cart = useSelector(state => state.cart);

  let totalPrice = cart?.reduce((total, item) => {
    return total + item.count * item.unitAmount
  }, 0);

  totalPrice = totalPrice / 100 + '.00';

  const activeCustomer = useSelector(state => state.customer);

  useEffect(() => {
    if (activeCustomer?.length === 1) {
      setActiveStep(activeStep + 1);
    } else if (activeCustomer?.length === 0) {
      setActiveStep(0);
    }
  }, [activeCustomer]) // eslint-disable-line react-hooks/exhaustive-deps

  const onSubmit = async (e) => {
    e.preventDefault();

    const { isEmpty, instanceData } = getFormValues(e.currentTarget);

    if (isEmpty) {
      console.log('please provide all values');
      return;
    }

    try {
      //if async data fetch fells, the error below is an axios error
      const { data } = await customFetch.post('/auth/register', instanceData);
      console.log(data.user);
      dispatch(getCustomer({ customer: data.user }))
    } catch (error) {
      //an axios error whose message can be overwritten
      if (error) {
        error.message = 'Check Phone Number & Zip Code Format'
        setErrorMessage(error.message);
        setTimeout(() => {
          setErrorMessage('');
        }, 4000)
      }
    }
  }

  return (
    <Box width='80%' m='100px auto'>
      <Stepper activeStep={activeStep} sx={{ m: '20px o' }}>
        <Step>
          <StepLabel>Customer Information</StepLabel>
        </Step>
        <Step>
          <StepLabel>Proceed To Payment</StepLabel>
        </Step>
      </Stepper>
      <Box>
        {activeCustomer?.length === 0 &&
          <Box m='30px auto'>
            <Box>

              <Box
                bgcolor={info.light}
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  border: 2,
                  borderColor: 'black',
                  borderRadius: '16px'
                }}
              >
                {errorMessage &&
                  <Typography sx={{ m: '15px 0' }} color={shades.secondary[500]} variant='h3' fontWeight='bold'>{errorMessage}</Typography>
                }
                <Typography color={shades.secondary[500]} sx={{ m: '30px 0' }} variant='h3' fontWeight='bold'>
                  Customer Information
                </Typography>
                <Box m='10px' component="form" onSubmit={onSubmit} sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        // autoComplete="given-name"
                        name="name"
                        required
                        fullWidth
                        id="name"
                        label="First Name"
                        autoFocus
                        type='text'
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        type='text'
                      // autoComplete="family-name"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        type='email'
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        placeholder='111-222-3333'
                        required
                        fullWidth
                        name="phoneNumber"
                        label="Phone Number"
                        type="text"
                        id="phoneNumber"
                      // autoComplete="new-password"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        placeholder='11111'
                        required
                        fullWidth
                        name="zipCode"
                        label="Zip Code"
                        type="text"
                        id="zipCode"
                      // autoComplete="new-password"
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Submit & Confirmation
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        }
        {activeCustomer?.length === 1 && (
          <Box m='30px auto'>
            <Box>

              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typography sx={{ mb: '15px' }} fontSize='18px'>
                  Customer Confirmation
                </Typography>
                {cart.map(item => (
                  <Box key={`${item?.name}-${item?._id}`}>
                    <FlexBox p='15px 0' >
                      <Box flex='1 1 40%'>
                        <img
                          src={`../../src/assets/${item?.picturePath}`}
                          alt={item?.name}
                          height='164px'
                          width='123px'
                        />
                      </Box>
                      <Box flex='1 1 60%'>
                        <FlexBox mb='5px'>
                          <Typography fontWeight='bold'>
                            {item?.name}
                          </Typography>
                        </FlexBox>
                        <Typography >{item?.description}</Typography>
                        <FlexBox m='15px 0'>
                          <Box
                            display='flex'
                            alignItems='center'
                          >
                            <Typography variant='h4' fontWeight='bold'>{item?.count}</Typography>
                          </Box>
                          <Typography fontWeight='bold'>
                            {item.displayAmount}
                          </Typography>
                        </FlexBox>
                      </Box>
                    </FlexBox>
                    <Typography mt={2} variant='h3' fontWeight='bold'>Total Price: ${totalPrice}</Typography>
                    <Divider />
                  </Box>
                ))}
                <Typography variant='h3'>
                  If Correct
                </Typography>
                <Button type='button' variant='contained' sx={{ mt: 3, mb: 2 }} onClick={() => navigate('/payment')}>
                  Proceed To Order
                </Button>
                <Typography variant='h3'>
                  Otherwise:
                </Typography>
                <Button type='button' variant='contained' sx={{ mt: 3, mb: 2 }} onClick={() => navigate('/')}>
                  Continue Shopping
                </Button>
              </Box>
            </Box>
          </Box>
        )}
        {/* <MessageForm /> */}
      </Box>
    </Box>
  )
}
export default Checkout