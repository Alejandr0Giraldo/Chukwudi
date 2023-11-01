import './App.css';
import React, { useState } from 'react';
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
              {/*<div className='m-6 flex items-center space-x-16 max-lg:grid max-md: grid-cols-2'>*/}
              {/*  <div className="flex flex-wrap justify-center items-center ">*/}
              {/*    {categories.map((item) => (*/}
              {/*        <Categories key={item.id} name={item.name} icon={item.icon} id={item.id} />*/}
              {/*    ))}*/}
              {/*  </div>*/}
              {/*</div>*/}
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
        <section className='w-1/5 max-md:hidden ml-10  '>
          <div className='bg-gray-100 -ml-0'>
            <div className='flex flex-row-reverse '>
              <div className=' '>
                <span className=''>3</span>
              </div>
              <div className=''>
                <div className=' '>
                  <img src='../icons/747376.svg' alt='' className='w-6'/>
                </div>
              </div>
            </div>
            <div className='p-4'>
              <div className='text-4xl mb-6'>
                <p className=''>My 😉 </p>
                <p>Order</p>
              </div>
            </div>
            <div className='p-6'>
              <div className='bg-blue-700 rounded-2xl w-full p-5'>
                <div className='flex justify-between pb-6 text-slate-200'>
                  <p>Direction</p>
                  <a href='#' className='text-amber-300'>Edit</a>
                </div>
                <div className='flex justify-between items-center pb-5'>
                  <div className='bg-amber-500/60 w-9 p-2 rounded-xl h-full'>
                    <img src='../icons/149316.svg' alt='' className='w-8'/>
                  </div>
                  <p className='text-slate-200'>35 min</p>
                  <a href='#' className='text-amber-300'>Chose time</a>
                </div>
              </div>
            </div>
            <div className='p-2'>
              <div className='m-4 w-full flex'>
                <img src='../images/pexels-photo-156114.jpeg' alt='' className='w-20 rounded-lg'/>
                <p className='p-1 ml-2'>1 x</p>
                <p className='p-1'>beach burger</p>
                <p className='p-1'>$ 14.99 </p>
              </div>
              <div className='m-4 w-full flex'>
                <img src='../images/pexels-photo-156114.jpeg' alt='' className='w-20 rounded-lg'/>
                <p className='p-1 ml-2'>1 x</p>
                <p className='p-1'>beach burger</p>
                <p className='p-1'>$ 14.99 </p>
              </div>
              <div className='m-4 w-full flex'>
                <img src='../images/pexels-photo-156114.jpeg' alt='' className='w-20 rounded-lg'/>
                <p className='p-1 ml-2'>1 x</p>
                <p className='p-1'>beach burger</p>
                <p className='p-1'>$ 14.99 </p>
              </div>
            </div>
            <div className=' '>
              <div className='flex justify-between p-4'>
                <p className=''>Total: </p>
                <p>$1500</p>
              </div>
              <div className='flex justify-between'>
                <div className='flex-col'>
                  <p className='p-4 -mb-3'>Persons</p>
                  <div className='flex border-black rounded-2xl border-2 w-fit ml-4 mb-0 '>
                    <button className='p-2'>+</button>
                    <div className='p-2'> 1</div>
                    <button className='p-2'>-</button>
                  </div>
                </div>
                <div className='bg-amber-200 w-fit flex rounded-l-2xl '>
                  <button className='p-6 font-bold flex items-center'>Checkout <img src='../icons/109617.svg' alt='' className='w-3 ml-4 mr-6'/></button>
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>
    </>
  )
}

export default App;
