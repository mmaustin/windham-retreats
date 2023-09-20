import {Box, Grid, Button, Stepper, Step, StepLabel, Typography, useMediaQuery, TextField} from '@mui/material';
import customFetch from '../../utils/customFetch';
import getFormValues from '../../utils/getFormValues';



function MessageForm() {

  const onSubmit = async (e) => {
    e.preventDefault();

    const {isEmpty, instanceData} = getFormValues(e.currentTarget);
     
    if(isEmpty) {
      console.log('please provide all values');
      return;
    }
    
    try {
      //if async data fetch fells, the error below is an axios error
      const {data} = await customFetch.post('/messages', instanceData);
      console.log(data.success);
    } catch (error) {
      //an axios error whose message can be overwritten
      if(error){
        //error.message = "coocoo for cocoa puffs!"
        console.log(error.message);
      }
    }
  }

  return (
    <div>MessageForm</div>
  )
}
export default MessageForm;