import {Button, Dialog, DialogContent, DialogContentText, DialogTitle} from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const CustomerInfo = () => {

  const [open, setOpen] = useState(false);
  const customer = useSelector(state => state.customer);
  console.log(customer);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };  

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        How It Works
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Like Life, Random History Ain't Always Fair!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            1) Clicking a cell generates a random number from one to six.
            2) If the random numbers matches the number of the clicked cell, you get awarded points
               that equal the number of the cell; the cell turns green.
            3) If the numbers don't match, your score is reduced by the number on the cell, and you are taken
               to the quiz area. 
            4) Answer correctly and get awarded points equaling the number on the cell plus an additional point.
               There is no penalty for getting the answer wrong.
            5) If the question is answered correctly, the cell turns beige; otherwise, the cell turns black.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  )
}
export default CustomerInfo