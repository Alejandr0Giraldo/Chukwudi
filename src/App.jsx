import './App.css';

function App() {
  return (
    <>
      <section>
        <article >
          <div className='h-96 w-auto bg-zinc-200 flex m-6 place-content-between rounded-3xl'>
            <div className='ml-6 '>
              <img src="../images/headerimage.png" alt="" className='overflow-visible -mt-10' />
            </div>
            <div className='flex flex-col items-start justify-center'>
              <p className='flex text-3xl'>$0 delivery for 30 days!
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
            <button className='flex content-center hover:bg-white'>
              <div className='max-w-md  bg-orange-600 flex rounded-full items-center p-2 '>
                <div><img src="../icons/149316.svg" alt="" className='w-5 m-2 invert '/></div>
                <div>
                  <p className='text-slate-200'>Delivery</p>
                </div>
                <div className=' '><img src="../icons/118740.svg" alt="" className='w-3 m-2 rotate-90 invert'/></div>
              </div>
            </button>
          </div>
        </article>
      </section>
    </>
  )
}

export default App;
