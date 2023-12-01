import { ShoppingCartContext } from "../../Context/index.jsx";
import {useContext} from "react";
import Products from "../../Components/products/index.jsx";
import './style.css'


const MyOrder = () => {
    const context = useContext(ShoppingCartContext)
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    if (index === 'last') index = context.order?.length - 1



    if (!context.showOrder){
        return null
    }

    return (
        <aside className='aside'>
            <div className='navbar'>
                <div className=' products'>
                    <span>{context.setCartProducts.length}</span>
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
                    {
                        context.order.map((item) => (
                            <Products
                                key={item.id}
                                name={item.name}
                                qualification={item.qualification}
                                time={item.time}
                                price={item.price}
                                image={item.image}
                                id_category={item.id_category}

                            />
                        ))
                    }
                </div>
                <div className='amount-persons'>
                    <p className='persons'>Persons</p>
                    <div className='container-products-persons'>
                        <button className='increment' onClick={context.incrementAmount}>+</button>
                        <div className='amount-product'> {context.amountProduct}</div>
                        <button className='decrement' onClick={context.decrementAmount}>-</button>
                    </div>
                </div>
            </div>
            <div className=' container-total'>
                <div className='total'>
                    <p className=''>Total: </p>
                    <p>$1500</p>
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