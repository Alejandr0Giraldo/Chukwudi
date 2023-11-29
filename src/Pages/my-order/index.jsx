import { ShoppingCartContext } from "../../Context/index.jsx";
import {useContext} from "react";
import Products from "../../Components/products/index.jsx";
import './styles.css'
import { Navbar } from '@material-tailwind/react';

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
            <Navbar className='navbar'>
                <div className=' products'>
                    <span>{context.setCartProducts.length}</span>
                </div>
                <div>
                    <div className='user' >
                        <img src='../icons/747376.svg' alt='icon-user' />
                    </div>
                </div>
            </Navbar>
            <div className='my-order'>
                <div>
                    <p className=''>My 😉 </p>
                    <p>Order</p>
                </div>
            </div>
            <div className='section-direction'>
                    <div className='direction'>
                        <p>Direction</p>
                        <a href='#' className='edit'>Edit</a>
                    </div>
                    <div className='container-time'>
                        <div className='container-time-icon'>
                            <img src='../icons/149316.svg' alt='' className='time-icon'/>
                        </div>
                        <p className=''>35 min</p>
                        <a href='#' className=''>Chose time</a>
                    </div>
            </div>
            <div className='p-2 flex'>
                <div className='m-4 w-full flex'>
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
                <div className='flex-col'>
                    <p className='p-4 -mb-3'>Persons</p>
                    <div className='flex border-black rounded-2xl border-2 w-fit ml-4 mb-0 '>
                        <button className='p-2' onClick={context.incrementAmount}>+</button>
                        <div className='p-2'> {context.amountProduct}</div>
                        <button className='p-2' onClick={context.decrementAmount}>-</button>
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
        </aside>
    )

}

export default MyOrder