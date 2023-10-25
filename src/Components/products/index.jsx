import React from 'react';
import categories from '../../../categories.json'
// eslint-disable-next-line react/prop-types
const  Product = ({ name, qualification, time, price, image, id_category }) => {
    let name_category = ''
    categories.map((item) => {
            if (id_category == item.id ){
                name_category = item.name
            }
        }
    )
    return(
        <div className='m-6'>
            <div className='flex items-end '>
                <span className='bg-gray-100 absolute w-20 rounded-tr-xl rounded-bl-xl flex justify-center p-2'>{time} </span>
                <img src={image} alt="" className='w-52 rounded-2xl ' />
            </div>
            <div className='p-2'>
                <span className='text-ellipsis '>{name}</span>
                <div className='flex items-center'>
                    <span className='m-2'><img src="../icons/149220.svg" alt="" className='w-3'/></span>
                    <p className='m-2'>{qualification}</p>
                    <p className='m-2'>{name_category}</p>
                    <p className='m-2'>$ {price}</p>
                </div>
            </div>
        </div>
    )
}

export default Product