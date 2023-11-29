import categories from '../../../categories.json'
import {PlusIcon} from "@heroicons/react/20/solid/index.js";
// eslint-disable-next-line react/prop-types
const  Product = ({ name, qualification, time, price, image, id_category }) => {
    let name_category = ''
    categories.map((item) => {
            if (id_category === item.id ){
                name_category = item.name
            }
        }
    )



    return(
        <div className='w-5/6 h-60 mb-6'>
            <div className='relative  w-full h-4/5 overflow-hidden cursor-pointer'>
                <span className='bottom-0 left-0 bg-gray-100 absolute w-20 rounded-tr-xl rounded-bl-xl flex justify-center p-2'>{time} </span>
                <img src={image} alt="" className='object-cover rounded-2xl w-full h-full ' />
                <div
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-8 h-8 rounded-full m-2 p-1'>
                    <PlusIcon className='h-6 w-6 text-black'></PlusIcon>
                </div>

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