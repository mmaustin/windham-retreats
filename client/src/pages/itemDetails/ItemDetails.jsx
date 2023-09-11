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
  const [item, setItem] = useState(null);
  //const [items, setItems] = useState([]);
  const items = useSelector(state => state.items);
  const retreat = items.find(item => item._id === itemId);
console.log(retreat);
  return (
    <div>ItemDetails</div>
  )
}
export default ItemDetails