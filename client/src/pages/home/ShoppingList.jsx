import { useEffect, useState } from "react";
import { setItems } from "../../state";
import { useSelector, useDispatch } from "react-redux";
import customFetch from "../../utils/customFetch";
import { Tabs, Tab, Box, Typography, useMediaQuery } from "@mui/material";
import Item from "../../components/Item";
import { shades } from "../../theme";


const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('all');
  const items = useSelector(state => state.items);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  //}

  const getRetreats = async () => {
    try {
      const response = await customFetch.get("/retreats");

      //const { response.data } //= await response.json();
      const data = response.data.retreats
      dispatch(setItems({ items: data }))
    } catch (error) {
      console.log(error);
    }
  }

  //Once I'm set on how to properly handle prices, 2:03 in the video shows how I can filter by price

  useEffect(() => {
    getRetreats();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h2" fontWeight='bold' textAlign='center' color={shades.secondary[200]}>
        WINDHAM RETREATS
      </Typography>
      <Tabs
        textColor='primary'
        indicatorColor='primary'
        value={value}
        centered
        TabIndicatorProps={{ sx: { display: isNonMobile ? 'block' : 'none' } }}
        sx={{
          m: '25px',
          "& .MuiTabs-flexContainer": {
            fleexWrap: 'wrap'
          }
        }}
      >
        <Tab label="RETREATS ON VIEW (TWO EACH: SIX TOTAL)" value="all" />
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {value === "all" && items.map(item => (
          <Item item={item} key={`${item.name}-${item._id}`} />
        ))}
      </Box>
    </Box>
  )
}
export default ShoppingList;
