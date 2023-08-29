import getFormValues from "../utils/getFormValues";

const Register = () => {

  const onSubmit = e => {
    e.preventDefault();

    const {isEmpty, data} = getFormValues(e.currentTarget);
     
    if(isEmpty) {
      console.log('please provide all values');
      return;
    }

    console.log(data);
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name"></label>
      <input type="text" id="name" name="name"/>
      <label htmlFor="email"></label>
      <input type="email" id="email" name="email"/>
      <label htmlFor="password"></label>
      <input type="password" id="password" name="password"/>
      <button type="submit">Submit</button>
    </form>
  )
}
export default Register