import {Button, Dialog, DialogContent, DialogContentText, DialogTitle} from '@mui/material';
import { useState } from 'react';

const CustomerInfo = (props) => {
  console.log(props);

  const fullName = `${props.name} ${props.lastName}`;

  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };  

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
        <Button
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