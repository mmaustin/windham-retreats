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

  const { unitAmount, name, picturePath } = item;

  return (
    <Box width={width}>

    </Box>
  )
}
export default Item