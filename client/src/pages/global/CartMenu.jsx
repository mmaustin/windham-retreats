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
    <div>CartMenu</div>
  )
}
export default CartMenu