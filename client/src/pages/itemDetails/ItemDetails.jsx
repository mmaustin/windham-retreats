import { Add, Remove, FavoriteBorderOutlined } from "@mui/icons-material";
import { IconButton, Box, Typography, Button, Tabs, Tab } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../state";
import { shades } from "../../theme";
import Item from '../../components/Item';

const ItemDetails = () => {

  const dispatch = useDispatch();
  const {itemId} = useParams();
  const [count, setCount] = useState(1);
  const [retreat, setRetreat] = useState(null);
  //const [items, setItems] = useState([]);
  const retreats = useSelector(state => state.items);
  const pageRetreat = retreats.find(singleRetreat => singleRetreat._id === itemId);

  useEffect(() => {
    setRetreat(pageRetreat);
  }, [pageRetreat]);

  console.log(retreat);

  return (
    <Box width='80%' m='80px auto 0px auto'>
      <Box display='flex' flexWrap='wrap' columnGap='40px'>
        
        <Box flex='1 1 40%' mb='40px'>
          <img
            alt={retreat?.name}
            width='100%'
            height='100%'
            src={`../src/assets/${retreat?.picturePath}`}
            style={{objectFit: 'contain'}}
          />
        </Box>

        <Box flex='1 1 50%' mb='40px'>
          <Box display='flex' justifyContent='center'>
            <Typography mb='40px' variant="h3">{retreat?.name}</Typography>
          </Box>

          <Box display='50px 0 25px 0'>
            <Typography variant="h4">{retreat?.description}</Typography>
            <Typography sx={{mt: '20px'}} variant="h4">{retreat?.displayAmount}</Typography>
          </Box>
        </Box>

      </Box>
    </Box>
  )
}
export default ItemDetails