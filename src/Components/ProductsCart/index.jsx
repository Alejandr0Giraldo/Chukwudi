import './styles.css'
import {useContext} from "react";
import {ShoppingCartContext} from "../../Context/index.jsx";
import {TrashIcon} from "@heroicons/react/20/solid/index.js";
// import {checkNavigable} from "react-slick/lib/utils/innerSliderUtils.js";

const ProductsCart = ({image, price, name, quantity, id_product}) => {
    const context = useContext(ShoppingCartContext)
    return(
        <div  className='container-products-cart'>
            <div className='productCart' >
                <img src={image} alt=""/>
                <div className='name-product'>{name}</div>
                <div>{price}</div>
                <div className='amount-persons'>
                    <TrashIcon className='handleDelete' onClick={() => context.handleDelete(id_product)}>X</TrashIcon>

                    <p className='persons'>Quantity</p>
                    <div className='container-products-persons'>
                        <button className='increment' onClick={() => context.incrementProducts(id_product, quantity)}>+</button>
                        <div className='amount-product'> {quantity}</div>
                        <button className='decrement' onClick={() => context.decrementAmount(id_product, quantity)}>-</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductsCart