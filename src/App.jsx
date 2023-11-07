import './App.css';
import React from 'react';
import MyOrder from "./Pages/my-order/index.jsx";
import Home from "./Pages/Home/index.jsx";



function App() {
  return (
    <>
      <div className='flex'>
        <Home />
        <MyOrder />
      </div>
    </>
  )
}

export default App;
