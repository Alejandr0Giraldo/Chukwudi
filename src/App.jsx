import './App.css';
import Home from "./Pages/Home/index.jsx";
import { ShoppingCartProvider } from "./Context/index.jsx";
import MyOrder from "./Pages/my-order/index.jsx";


function App() {
  return (
      <ShoppingCartProvider>
          <div className='flex'>
              <Home  />
              <MyOrder  />
          </div>
      </ShoppingCartProvider>

  )
}

export default App;
