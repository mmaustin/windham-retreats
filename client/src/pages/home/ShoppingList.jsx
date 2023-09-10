import { useEffect, useState } from "react";
import { setItems } from "../../state";
import { useSelector, useDispatch } from "react-redux";
import customFetch from "../../utils/customFetch";
import { Tabs, Tab, Box, Typography, useMediaQuery } from "@mui/material";
import Item from "../../components/Item";



const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('all');
  const items = useSelector(state => state.items);
  const isNonMobile = useMediaQuery("(min-width:600px)");


  //console.log(items);
  // const itemsDisplay = items.map((item, i) => (
  //   <div key={i}>
  //     <Item item={item} />
  //   </div>
  //))

  //const [count, setCount] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  
  const getRetreats = async() => {
    try { 
      const response = await customFetch.get("/retreats");
    
      //const { response.data } //= await response.json();
      const data = response.data.retreats
      dispatch(setItems({items: data}))
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    getRetreats();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      
    </div>
  )
}
export default ShoppingList;
