import customFetch from "../utils/customFetch";
import getFormValues from "../utils/getFormValues";


const Register = () => {

  const onSubmit = async (e) => {
    e.preventDefault();

    const {isEmpty, loginData} = getFormValues(e.currentTarget);
     
    if(isEmpty) {
      console.log('please provide all values');
      return;
    }
    
    try {
      const {data} = await customFetch.post('/auth/login', loginData);
      //const loginData = await response.json();
      if(data.status) console.log('yes');
    } catch (error) {
      console.log(error);
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