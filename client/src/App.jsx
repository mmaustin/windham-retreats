// import { useEffect } from "react";
// import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
// import Home from './pages/home/Home';
// import ItemDetails from "./pages/itemDetails/ItemDetails";
// import Checkout from "./pages/checkout/Checkout";
// import Confirmation from "./pages/checkout/Confirmation";
// import Navbar from "./pages/global/Navbar";
// import CartMenu from "./pages/global/CartMenu";
// import Footer from "./pages/global/Footer";

// //import MainCarousel from "./pages/home/MainCarousel";

// //import pic from './'


// const ScrollToTop = () => {
//   const {pathname} = useLocation();

//   useEffect(() => {
//     window.scrollTo(0,0);
//   },[pathname])

//   return null;
// }

// const App = () => {
//   return (
//     <div className="app">
//       <BrowserRouter>
//         <Navbar />
//         <ScrollToTop />
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/item/:itemId' element={<ItemDetails />} />
//           <Route path='/checkout' element={<Checkout />} />
//           <Route path='/checkout/success' element={<Confirmation />} />
//         </Routes>
//         <CartMenu />
//         <Footer />
//       </BrowserRouter>
//     </div>
//   )
// }
// export default App
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
import  { useState, useEffect } from "react";
//import "./App.css";

const ProductDisplay = () => (
  <section>
    <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
      <h3>Stubborn Attachments</h3>
      <h5>$20.00</h5>
      </div>
    </div>
    <form action="/create-checkout-session" method="POST">
      <button type="submit">
        Checkout
      </button>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function App() {
  const [message, setMessage] = useState("");
  console.log(message);
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
}