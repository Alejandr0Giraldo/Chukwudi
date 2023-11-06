import './App.css';
import React, { useState } from 'react';
import MyOrder from "./Pages/my-order/index.jsx";
import categories from '../categories.json';
import products from '../products.json';
import Products from './Components/products/index.jsx';
import CategorySlide from './Components/CategorySlide/index.jsx'


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className='flex'>
        <section  className='w-4/5 max-md:w-full '>
          <div className='flex items-center justify-between m-4 max-md:w-auto max-sm:w-auto  '>
            <div className="relative">
              <button className="text-black p-6 focus:outline-none" onClick={toggleMenu} >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/>
                </svg>
              </button>
            </div>
            <div className='flex '>
              <h1 className='font-bold text-2xl mr-4'>Chukwudi</h1>
            </div>
            <input className="block w-full m-2 px-6 py-3 text-black border border-gray-200 rounded-full focus:outline-none max-md:hidden" placeholder="search" type="text"/>
            <div className='w-8 mr-4'>
              <img className='md:hidden ' src='../icons/shopping-cart.png' alt='shopping cart'/>
            </div>
          </div>
          <article className=''>
            <input className="block  m-6 p-3 border border-gray-200 rounded-full focus:outline-none w-5/6 md:hidden" placeholder="search" type="text"/>
            <div className=' w-full bg-zinc-200 flex m-6 place-content-between rounded-3xl max-md:w-auto '>
              <div className='ml-6 '>
                <img src="../images/headerimage.png" alt="" className='overflow-visible -mt-10 max-lg:hidden' />
              </div>
              <div className='flex flex-col justify-center items-center'>
                <p className='flex text-3xl '>$0 delivery for 30 days!
                  <img src="../images/d.png" alt="" className='flex h-10 ml-5' />
                </p>
                <p>$0 delivery fee for orders over $10 for 30 days</p>
              </div>
              <div className='m-3 flex flex-wrap items-center mr-7 content-end '>
                <a href="#" className='flex m-2'>Learn more<img src="../icons/109617.svg" alt="" className='w-5 ml-2 ' /></a>
              </div>
            </div>
          </article>
          <article>
            <div className='m-6 flex place-content-between'>
              <div className=''>
                <p className='flex'>Restaurants <img src="../icons/1046784.svg" alt="" className='w-4 ml-2'/></p>
              </div>
              <button className='flex content-center'>
                <div className='max-w-md  bg-orange-600 flex rounded-full items-center p-2 '>
                  <div><img src="../icons/149316.svg" alt="" className='w-5 m-2 invert '/></div>
                  <div className='flex'>
                    <p className='text-slate-200'>Delivery:</p><span className='font-bold text-slate-200 ml-2'>Now</span>
                  </div>
                  <div className=' '><img src="../icons/118740.svg" alt="" className='w-3 m-2 rotate-90 invert'/></div>
                </div>
              </button>
            </div>
          </article>
          <article >
            <div className="">
              <CategorySlide  categories={categories} />
            </div>
          </article>
          <article>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 m-4 max-w-full object-cover overflow-hidden">
              {products.map((item) => (
                  <Products
                      key={item.id}
                      name={item.name}
                      qualification={item.qualification}
                      time={item.time}
                      price={item.price}
                      image={item.image}
                      id_category={item.id_category}
                  />
              ))}
            </div>
          </article>
        </section>
        <MyOrder />
      </div>
    </>
  )
}

export default App;
