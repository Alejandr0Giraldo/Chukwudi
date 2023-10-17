import './App.css';
import  { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <section>
        <div className='flex items-center m-6 pb-6'>
          <div className="relative">
            <button
                className="text-black p-2 focus:outline-none"
                onClick={toggleMenu}
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-center p-5">
            <div className='rounded-lg bg-gray-200 p-5'>
              <div className='flex'>
                <div className='flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5'>
                  <img src='../icons/126474.svg' alt='' className='pointer-events-none absolute w-5 fill-gray-500 transition'/>
                </div>
                <input type='text' className='w-full max-w-[160px] bg-white pl-2 text-base font-semibold outline-0' placeholder='Search'/>
              </div>
            </div>
          </div>
        </div>
        
        <article >
          <div className='h-96 w-auto bg-zinc-200 flex m-6 place-content-between rounded-3xl '>
            <div className='ml-6 '>
              <img src="../images/headerimage.png" alt="" className='overflow-visible -mt-10' />
            </div>
            <div className='flex flex-col items-start justify-center'>
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
        <article>
          <div className='m-6 flex space-x-16'>
              <div className=' bg-slate-50 hover:bg-amber-300 flex flex-col items-center p-3 rounded-full cursor-pointer  '>
                <div className='bg-white rounded-full w-fit p-3  border-2'>
                  <img src="../icons/701965.svg" alt="" className=' w-12'/>
                </div>
                <p className=' my-4'>All</p>
              </div>
              <div className=' bg-slate-50 hover:bg-amber-300 flex flex-col items-center p-3 rounded-full cursor-pointer border-black '>
                <div className='bg-white rounded-full w-fit p-3  border-2'>
                  <img src="../icons/701965.svg" alt="" className=' w-12 '/>
                </div>
                <p className=' my-4'>All</p>
              </div>
          </div>
        </article>
        <article>
          <div className='m-6'>
            <div className='flex items-end '>
              <span className='bg-slate-400 absolute w-20 rounded-tr-xl rounded-bl-xl flex justify-center p-2'>time min </span>
              <img src="../images/pexels-photo-262959.jpeg" alt="" className='w-52 rounded-2xl ' />
            </div>
            <div>
              <span>Bagel story</span>
              <span><img src="../icons/149220.svg" alt="" className='w-3'/></span>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}

export default App;
