//import { useState, useEffect } from 'react'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import Register from './pages/Register';
import CheckOut from './pages/CheckOut';
import { useSelector } from 'react-redux';


function App() {
  //const [count, setCount] = useState(0);

  // const getObject = async() => {
    //const response = await axios.get("/api/v1/messages");

    //const { data } = await response.json();
    //console.log(response.data);
  //}

  // useEffect(() => {
  //   getObject();
  // }, []);

  const isLoggedIn = useSelector(state => state.loggedIn);

  return (
    <div className='app'>   
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/checkout' element={isLoggedIn ? < CheckOut /> : <Navigate to="/register"/>} />
        </Routes>
      </BrowserRouter>
    </div>
    // <figure >
    //   <img src="./src/assets/yoga-women.jpg" alt="yoga women" />
    // </figure>
  )
}

export default App;
