import { ShoppingCartContext } from "../../Context/index.jsx";
import {useContext} from "react";
import {XMarkIcon} from "@heroicons/react/24/solid";
import './style.css'
import ProductsCart from "../../Components/ProductsCart/index.jsx";


const MyOrder = () => {
    const context = useContext(ShoppingCartContext)
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    if (index === 'last') index = context.order?.length - 1

    const cartItems = context.cartItems

    if (!context.showOrder){
        return null
    }

    return (
        <aside className='aside'>
            <div className='navbar'>
                <div
                    onClick={context.closeShoppingCart}
                    className='x-icon'
                >
                    <XMarkIcon></XMarkIcon>
                </div>
                <div className=' products'>
                    <span>{context.cartItems.length}</span>
                </div>
                <div>
                    <div className='user' >
                        <img src='../icons/747376.svg' alt='icon-user' />
                    </div>
                </div>
            </div>
            <div className='my-order'>
                <div>
                    <p className=''>My 😉 </p>
                    <p>Order</p>
                </div>
            </div>
            <div className='container-direction'>
                <div className='section-direction'>
                    <div className='direction'>
                        <p>Direction</p>
                        <a href='#' className='edit'>Edit</a>
                    </div>
                    <div className='container-time'>
                        <div className='container-time-icon'>
                            <img  src='../icons/149316.svg' alt='' className='time-icon'/>
                        </div>
                        <p className='min-delivery'>35 min</p>
                        <a href='#' className='chose-time'>Chose time</a>
                    </div>
                </div>
            </div>
            <div className='container-products-cart'>
                <div className='products-cart'>
                    {cartItems.map(item => (
                            <ProductsCart
                                key={item.id_product}
                                name={item.name}
                                price={item.price}
                                image={item.image}
                                quantity={item.quantity}
                                id_product={item.id_product}
                            />
                ))}
                </div>
            </div>
            <div className=' container-total'>
                <div className='total'>
                    <p className=''>Total: </p>
                    <p> ${context.calculateTotalProducts()}</p>
                </div>
                <div className='section-checkout'>
                    <div className='container-checkout'>
                        <button className='checkout'>Checkout <img src='../icons/109617.svg' alt='' className='arrow'/></button>
                    </div>
                </div>
            </div>
        </aside>
    )

}

export default MyOrder