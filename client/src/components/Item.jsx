/* eslint-disable react/prop-types */
import { Add, Remove } from "@mui/icons-material";
import { IconButton, Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { shades } from "../theme";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";


const Item = ({ item }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const { displayAmount, name, picturePath, _id } = item;

  return (
    <Box  >
      <Box
        position='relative'
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          alt={item.name}
          width='300px'
          height='300px'
          src={`../src/assets/${picturePath}`}
          onClick={() => navigate(`/item/${item._id}`)}
          style={{ cursor: 'pointer' }}
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
                onClick={() => setCount(Math.max(count - 1, 1))}
              >
                <Remove />
              </IconButton>
              <Typography color={shades.primary[300]}>{count}</Typography>
              {count < 2 ? (
                <IconButton
                  onClick={() => setCount(count + 1)}
                >
                  <Add />
                </IconButton>
              ) : (
                <IconButton>
                  <Add />
                </IconButton>
              )
              }
            </Box>
            <Button
              onClick={() => { dispatch(addToCart({ item: { ...item, count } })) }}
              sx={{ backgroundColor: shades.primary[300], color: 'white' }}
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