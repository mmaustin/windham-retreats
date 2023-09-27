import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const EmptyCart = () => {

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 4000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) 

  return (
    <div style={{marginTop: '60px'}}>You Have No Items In Your Cart</div>
  )
}
export default EmptyCart;