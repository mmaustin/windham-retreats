//import { useState, useEffect } from 'react'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import Register from './pages/Register';
import CheckOut from './pages/CheckOut';
import { useSelector } from 'react-redux';

// import reactLogo from './assets/react.svg';
// import yogaWomen from './assets/yoga-women.jpg'
// import viteLogo from '/vite.svg'
// import './App.css'


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
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/checkout' element={isLoggedIn ? < CheckOut /> : <Navigate to="/register"/>} />
      </Routes>
    </BrowserRouter>
    // <figure >
    //   <img src="./src/assets/yoga-women.jpg" alt="yoga women" />
    // </figure>
  )
}

export default App
