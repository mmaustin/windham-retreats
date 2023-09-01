import { useSelector, useDispatch } from "react-redux";
import customFetch from "../utils/customFetch";
import getFormValues from "../utils/getFormValues";
import { setLogin } from "../state";


const Register = () => {

  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state => state.loggedIn);
  console.log(isLoggedIn);

  const onSubmit = async (e) => {
    e.preventDefault();

    const {isEmpty, loginData} = getFormValues(e.currentTarget);
     
    if(isEmpty) {
      console.log('please provide all values');
      return;
    }
    
    try {
      //if async data fetch fells, the error below is an axios error
      const {data} = await customFetch.post('/auth/login', loginData);
      //const loginData = await response.json();
      dispatch(setLogin({
        loggedIn: data.status
      }))
    } catch (error) {
      //an axios error whose message can be overwritten
      if(error){
        error.message = "coocoo for cocoa puffs!"
        console.log(error.message);
      }
    }
    //e.currentTarget.reset();

  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email"></label>
      <input type="email" id="email" name="email"/>
      <label htmlFor="password"></label>
      <input type="password" id="password" name="password"/>
      <button type="submit">Submit</button>
    </form>
  )
}
export default Register