/* eslint-disable react/prop-types */
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeCustomer, emptyCart } from '../state';
import { useNavigate } from 'react-router-dom';

const CustomerInfo = (props) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fullName = `${props.name} ${props.lastName}`;

  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSessionEnd = () => {
    dispatch(removeCustomer());
    dispatch(emptyCart());
    navigate('/');
  }

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Customer Information
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle fontWeight='bold' id="alert-dialog-title">
          {`Welcome, ${fullName}!`}
        </DialogTitle>
        <DialogContent >
          <DialogContentText fontWeight='bold' id="alert-dialog-description">
            Email: {props.email}
          </DialogContentText>
        </DialogContent>
        <DialogContent>
          <DialogContentText fontWeight='bold' id="alert-dialog-description">
            Phone Number: {props.phoneNumber}
          </DialogContentText>
        </DialogContent>
        <DialogContent>
          <DialogContentText fontWeight='bold' id="alert-dialog-description">
            Zip Code: {props.zipCode}
          </DialogContentText>
        </DialogContent>
        <DialogContent>
          <DialogContentText fontWeight='bold' id="alert-dialog-description">
            Order Number: {props.orderNumber}
          </DialogContentText>
        </DialogContent>
        <Button
          onClick={handleSessionEnd}
          variant='outlined'
          sx={{ backgroundColor: 'beige', color: 'black', fontWeight: 'bold' }}
        >
          End Session
        </Button>
      </Dialog>
    </div>
  )
}
export default CustomerInfo;