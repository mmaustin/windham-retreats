import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const EmptyCart = () => {

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) 

  return (
    <div>You Have No Items In Your Cart</div>
  )
}
export default EmptyCart;