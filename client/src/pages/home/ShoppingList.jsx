import { useEffect, useState } from "react";
import { setItems } from "../../state";
import { useSelector, useDispatch } from "react-redux";
import customFetch from "../../utils/customFetch";



const ShoppingList = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items);
  console.log(items);

  //const [count, setCount] = useState(0);
  
  const getObject = async() => {
    try { 
      const response = await customFetch.get("/retreats");
    
      //const { response.data } //= await response.json();
      console.log(response.data);
      const data = response.data.retreats
      dispatch(setItems({items: data}))
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    getObject();
  }, []);

  return (
    <div>ShoppingList</div>
  )
}
export default ShoppingList;
