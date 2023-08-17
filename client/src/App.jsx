import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const getObject = async() => {
    const response = await fetch("/api/v1/vigor");
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    getObject();
  }, []);

  return (
    <>
      {count}
    </>
  )
}

export default App
