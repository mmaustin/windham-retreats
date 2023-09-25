import {useSelector, useDispatch} from 'react-redux';
import {Box, Grid, Button, Stepper, Step, StepLabel, Typography, TextField} from '@mui/material';
import { useState, useEffect } from 'react';
import customFetch from '../../utils/customFetch';
import getFormValues from '../../utils/getFormValues';
import { getCustomer } from '../../state';
import { useNavigate } from 'react-router-dom';


const Checkout = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(0);
  const cart = useSelector(state => state.cart);
  console.log(cart);
  const activeCustomer = useSelector(state => state.customer);
  // const isFirst = activeStep === 0;
  // const isSecond = activeStep === 1;
  console.log(activeCustomer);

  useEffect(() => {
    if(activeCustomer?.length === 1){
      setActiveStep(activeStep + 1);
    } else if (activeCustomer?.length === 0){
      setActiveStep(0);
    }
  }, [activeCustomer]) // eslint-disable-line react-hooks/exhaustive-deps

  const onSubmit = async (e) => {
    e.preventDefault();

    const {isEmpty, instanceData} = getFormValues(e.currentTarget);
     
    if(isEmpty) {
      console.log('please provide all values');
      return;
    }
    
    try {
      //if async data fetch fells, the error below is an axios error
      const {data} = await customFetch.post('/auth/register', instanceData);
      dispatch(getCustomer({customer: data.user}))
    } catch (error) {
      //an axios error whose message can be overwritten
      if(error){
        console.log(error.message);
      }
    }
  }

  return (
    <Box width='80%' m='100px auto'>
      <Stepper activeStep={activeStep} sx={{m: '20px o'}}>
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
              <Typography sx={{mb: '15px'}} fontSize='18px'>
                Customer Information
              </Typography>

              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Box component="form" onSubmit={onSubmit} sx={{ mt: 3 }}>
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
              <Typography sx={{mb: '15px'}} fontSize='18px'>
                Customer Confirmation
              </Typography>

              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typography variant='h2'>
                  Go To Order Page
                </Typography>
                <Button type='button' variant='contained' sx={{ mt: 3, mb: 2 }} onClick={() => navigate('/payment')}>
                  Proceed To Order
                </Button>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  )
}
export default Checkout