import { useDispatch } from "react-redux";
import { emptyCart, removeCustomer } from "../state";
import { useEffect } from "react";

const Completion = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(emptyCart());
    dispatch(removeCustomer());
  }, [])

  return (
    <div style={{marginTop: '60px'}}>
      Your Payment Was Successful!
    </div>
  )
}
export default Completion