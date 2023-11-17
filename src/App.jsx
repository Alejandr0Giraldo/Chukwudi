import './App.css';
import React from 'react';
import MyOrder from "./Pages/my-order/index.jsx";
import Home from "./Pages/Home/index.jsx";
import { ShoppingCartProvider } from "./Context/index.jsx";


function App() {
  return (
      <ShoppingCartProvider>
          <div className='flex'>
              <Home />
              <MyOrder />
          </div>
      </ShoppingCartProvider>

  )
}

export default App;
