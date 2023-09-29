import { useDispatch } from "react-redux";
import { emptyCart, removeCustomer } from "../state";
import { useEffect } from "react";
import { shades } from "../theme";
import { useTheme } from "@emotion/react";
import { Box, Typography} from "@mui/material";

const Completion = () => {

  const {palette: {info }} = useTheme();  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(emptyCart());
    dispatch(removeCustomer());
  }, [])  // eslint-disable-line react-hooks/exhaustive-deps

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
        Your Transaction Was Successful! Thank You For Choosing Windham Yoga!
      </Typography>
    </Box>
  )
}
export default Completion