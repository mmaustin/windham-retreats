import {useSelector, useDispatch} from 'react-redux';
import {Box, Button, Stepper, Step, StepLabel} from '@mui/material';
import { useState } from 'react';
import {shades} from '../../theme';
import customFetch from '../../utils/customFetch';
import getFormValues from '../../utils/getFormValues';



const Checkout = () => {

  const dispatch = useDispatch();

  const [activeStep, setActiveStep] = useState(0);
  const cart = useSelector(state => state.cart);
  const isFirstStep = activeStep === 0;

  const onSubmit = async (e) => {
    e.preventDefault();

    const {isEmpty, registrationData} = getFormValues(e.currentTarget);
     
    if(isEmpty) {
      console.log('please provide all values');
      return;
    }
    
    try {
      //if async data fetch fells, the error below is an axios error
      const {data} = await customFetch.post('/auth/register', registrationData);
      console.log(data);
    } catch (error) {
      //an axios error whose message can be overwritten
      if(error){
        error.message = "coocoo for cocoa puffs!"
        console.log(error.message);
      }
    }
  }

  return (
    <div className='home' style={{marginTop: '60px'}}>
      <form onSubmit={onSubmit}>
        <label htmlFor="name"></label>
        <input type="text" id="name" name="name" placeholder='First Name'/>
        <label htmlFor="lastName"></label>
        <input type="text" id="lastName" name="lastName" placeholder='Last Name'/>
        <label htmlFor="phoneNumber"></label>
        <input type="number" id="phoneNumber" name="phoneNumber" placeholder='Phone Number'/>
        <label htmlFor="zipCode"></label>
        <input type="number" id="zipCode" name="zipCode" placeholder='Zip Code'/>
        <label htmlFor="email"></label>
        <input type="email" id="email" name="email" placeholder='Email Address'/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default Checkout