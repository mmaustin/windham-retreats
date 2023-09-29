import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { shades } from "../theme";


const EmptyCart = () => {

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 4000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) 

  return (
    <Box
      sx={{
        marginTop: '60px',
        marginBottom: '250px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography sx={{m: '100px 0 0 0'}} color={shades.secondary[500]} variant='h3' fontWeight='bold' >
        Your Cart Is Empty. Redirecting You To The Homepage.
      </Typography>
    </Box>
  )
}
export default EmptyCart;