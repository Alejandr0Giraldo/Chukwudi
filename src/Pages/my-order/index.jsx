import React from "react";

const MyOrder = () => {
    return (
    <section className='w-1/5 max-md:hidden ml-10  '>
        <div className='bg-gray-100 -ml-0 h-full'>
            <div className='w-auto flex flex-row-reverse items-center justify-self-end '>
                <div className=' m-4 bg-amber-300 p-4 rounded-xl'>
                    <span className='w-6'>3</span>
                </div>
                <div className=''>
                    <div className=' '>
                        <img src='../icons/747376.svg' alt='' className='w-6 cursor-pointer'/>
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
            <div className='p-2 flex'>
                <div className='m-4 w-full flex'>
                    <img src='../images/pexels-photo-156114.jpeg' alt='' className='w-20 rounded-lg'/>
                    <p className='p-1 ml-2'>1 x</p>
                    <p className='p-1'>beach burger</p>
                    <p className='p-1'>$ 14.99 </p>
                </div>
                <div className='flex-col'>
                    <p className='p-4 -mb-3'>Persons</p>
                    <div className='flex border-black rounded-2xl border-2 w-fit ml-4 mb-0 '>
                        <button className='p-2'>+</button>
                        <div className='p-2'> 1</div>
                        <button className='p-2'>-</button>
                    </div>
                </div>
            </div>
            <div className=' '>
                <div className='flex justify-between p-4'>
                    <p className=''>Total: </p>
                    <p>$1500</p>
                </div>
                <div className='flex justify-between'>

                    <div className='bg-amber-200 w-screen flex rounded-full m-6'>
                        <button className='p-6 font-bold flex items-center'>Checkout <img src='../icons/109617.svg' alt='' className='w-3 ml-4 mr-6'/></button>
                    </div>
                </div>
            </div>
        </div>

    </section>
    )

}

export default MyOrder