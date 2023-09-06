import { Box, Button, Divider, IconButton, Typography} from '@mui/material';
import {useSelector, useDispatch} from 'react-redux';
import { Close, Add, Remove } from "@mui/icons-material";
import styled from '@emotion/styled';
import { shades } from '../../theme';
import {decreaseCount, increaseCount, removeFromCart, setIsCartOpen} from '../../state';
import {useNavigate} from 'react-router-dom';

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CartMenu = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart, isCartOpen } = useSelector(state => state.auth);

  return (
    <Box
      display={isCartOpen ? "block" : "none"}
      bgcolor="rgba(0,0,0,0.4)"
      position='fixed'
      zIndex={10}
      width='100%'
      height='100%'
      left='0'
      top='0'
      overflow='auto'
    >
      <Box
        position='fixed'
        right='0'
        bottom='0'
        width='max(400px, 30%)'
        height='100%'
        bgcolor='white'
      >
        <Box
          padding='30px' overflow='auto' height='100%'
        >
          <FlexBox mb='15px'>
            <Typography variant='h3'>SHOPPING BAG ({cart.length})</Typography>
            <IconButton onClick={()=> dispatch(setIsCartOpen({}))}>
              <Close />
            </IconButton>
          </FlexBox>

          

        </Box>
      </Box>
    </Box>
  )
}
export default CartMenu