import './styles.css'
import {useContext} from "react";
import {ShoppingCartContext} from "../../Context/index.jsx";

const ProductsCart = ({image, price, name, quantity }) => {
    const context = useContext(ShoppingCartContext)

    return(
        <div className='container-products-cart'>
            <div className='productCart' >
                <img src={image} alt=""/>
                <div className='name-product'>{name}</div>
                <div>{price}</div>
                <div className='amount-persons'>
                    <p className='persons'>Quantity</p>
                    <div className='container-products-persons'>
                        <button className='increment' onClick={context.incrementAmount}>+</button>
                        <div className='amount-product'> {quantity}</div>
                        <button className='decrement' onClick={context.decrementAmount}>-</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductsCart