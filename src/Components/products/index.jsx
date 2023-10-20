import React from 'react';

const  Product = ({ name, qualification, time, price, image}) => {
    return(
        <div className='m-6'>
            <div className='flex items-end '>
                <span className='bg-slate-400 absolute w-20 rounded-tr-xl rounded-bl-xl flex justify-center p-2'>{time} </span>
                <img src={image} alt="" className='w-52 rounded-2xl ' />
            </div>
            <div>
                <span>{name}</span>
                <span><img src="../icons/149220.svg" alt="" className='w-3'/></span>
                <p>{qualification}</p>
                <p>{time}</p>
                <p>{price}</p>
            </div>
        </div>
    )
}

export default Product