

const Register = () => {

  const onSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    //console.log(Object.fromEntries(formData));
    const values = [...formData.values()];
    const isEmpty = values.includes('');
    if(isEmpty) {
      console.log('please provide all values');
      return;
    }
    console.log(values);
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