import {Button, Dialog, DialogContent, DialogContentText, DialogTitle} from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const CustomerInfo = () => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };  

  return (
    <div>CustomerInfo</div>
  )
}
export default CustomerInfo