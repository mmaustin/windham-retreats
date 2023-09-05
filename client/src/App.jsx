import { useEffect } from "react";
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import Home from './scenes/home/Home';

const ScrollToTop = () => {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  },[pathname])

  return null;
}

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
//import { useState, useEffect } from 'react'
// import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
// import Register from './pages/Register';
// import CheckOut from './pages/CheckOut';
// import { useSelector } from 'react-redux';



// function App() {
  //const [count, setCount] = useState(0);

  // const getObject = async() => {
    //const response = await axios.get("/api/v1/messages");

    //const { data } = await response.json();
    //console.log(response.data);
  //}

  // useEffect(() => {
  //   getObject();
  // }, []);

  //const isLoggedIn = useSelector(state => state.loggedIn);

//   return (
//     <div className='app'>
//       <h1>hello</h1>
//       <h2>hello</h2>
//       <h3>hello</h3>
//       <h4>hello</h4>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/register' element={<Register />} />
//           <Route path='/checkout' element={isLoggedIn ? < CheckOut /> : <Navigate to="/register"/>} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App;

// <figure >
//   <img src="./src/assets/yoga-women.jpg" alt="yoga women" />
// </figure>
