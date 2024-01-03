import categories from '../../../categories.json'
import {PlusIcon} from "@heroicons/react/20/solid/index.js";
import './styles.css'
// eslint-disable-next-line react/prop-types
const  Product = ({ name, qualification, time, price, image, id_category, addToCart }) => {
    let name_category = ''
    categories.map((item) => {
            if (id_category === item.id ){
                name_category = item.name
            }
        }
    )

    return(
        <div className='container-card'>
            <div className='container-img'>
                <span className='delivery-time'>{time} </span>
                <img src={image} alt="" className='img ' />
                <div
                    onClick={() => addToCart(name)}
                    className='icon-plus'>
                    <PlusIcon className='plus'></PlusIcon>
                </div>

            </div>
            <div className='description-container'>
                <span >{name}</span>
                <div className='time-delivery-container'>
                    <span ><img src="../icons/149220.svg" alt="" className='star'/></span>
                    <p >{qualification}</p>
                    <p >{name_category}</p>
                    <p >$ {price}</p>
                </div>
            </div>
        </div>
    )
}

export default Product