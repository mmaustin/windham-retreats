import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ShoppingBagOutlined } from '@mui/icons-material';
import { Badge, Box, IconButton } from '@mui/material';
import { shades } from '../../theme';
import { setIsCartOpen } from '../../state';
import CustomerInfo from '../../components/CustomerInfo';

const Navbar = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const customer = useSelector(state => state.customer[0]);

  return (
    <Box
      display='flex'
      alignItems='center'
      width="100%"
      height="60px"
      bgcolor='rgba(255,255,255,0.95)'
      color='black'
      position='fixed'
      top='0'
      left='0'
      zIndex='1'
    >
      <Box
        width='80%'
        margin="auto"
        display="flex"
        justifyContent='space-between'
        alignItems='center'
      >
        <Box
          onClick={() => navigate('/')}
          sx={{ "&:hover": { cursor: 'pointer' } }}
          color={shades.secondary[500]}
        >
          WINDHAM YOGA
        </Box>
        <Box
          display='flex'
          justifyContent='space-between'
          columnGap='20px'
          zIndex='2'
        >
          {/* <IconButton sx={{color: 'black'}}>
             <SearchOutlined />
          </IconButton>
          <IconButton
            onClick={() => dispatch(removeCustomer())}
            sx={{color: 'black'}}
          >
             <PersonOutline />
          </IconButton> */}
          <Badge
            badgeContent={cart.length}
            color='secondary'
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px"
              }
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: 'black' }}>
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
          {customer?.name &&
            <CustomerInfo
              name={customer?.name}
              lastName={customer?.lastName}
              email={customer?.email}
              phoneNumber={customer?.phoneNumber}
              zipCode={customer?.zipCode}
              orderNumber={customer?._id}
            />
          }
          {/* <IconButton sx={{color: 'black'}}>
             <MenuOutlined />
          </IconButton> */}
        </Box>
      </Box>
    </Box>
  )
}
export default Navbar