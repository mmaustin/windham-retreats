import { Add, Remove } from "@mui/icons-material";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { shades } from "../theme";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";


const Item = ({item, width}) => { 

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const {
    palette: {neutral },
  } = useTheme();

  const { displayAmount, name, picturePath, _id } = item;
  //console.log(typeof _id);

  return (
    <Box width={width} >
      <Box
        position='relative'
        onMouseOver={()=> setIsHovered(true)}
        onMouseOut={()=> setIsHovered(false)}
      >
        <img
          alt={item.name}
          width='300px'
          height='400px'
          src={`../src/assets/${picturePath}`}
          onClick={()=> navigate(`/item/${item._id}`)}
          style={{cursor: 'pointer'}}
        />
        <Box
          display={isHovered ? 'block' : 'none'}
          position='absolute'
          bottom='10px'
          left='0'
          width='100%'
          padding='0 5%'
        >
          <Box display='flex' justifyContent='space-between'>
            <Box
              display='flex'
              alignItems='center'
              bgcolor={shades.neutral[100]}
              borderRadius='3px'
            >
              <IconButton
                onClick={()=> setCount(Math.max(count -1, 1))}
              >
                <Remove />
              </IconButton>
              <Typography color={shades.primary[300]}>{count}</Typography>
              <IconButton
                onClick={()=> setCount(count + 1)}
              >
                <Add />
              </IconButton>              
            </Box>

            <Button
              onClick={()=> {dispatch(addToCart({item: {...item, count}}))}}
              sx={{backgroundColor: shades.primary[300], color: 'white'}}
            >
              Add To Cart
            </Button>

          </Box>
        </Box>
      </Box>

      <Box mt='3px'>
        <Typography>{name}</Typography>
        <Typography fontWeight='bold'>{displayAmount}</Typography>
      </Box>
    </Box>
  )
}
export default Item