import {useContext} from "react";
import { ShoppingCartContext } from "../../Context/index.jsx";
import CategorySlide from "../../Components/CategorySlide/index.jsx";
import categories from "../../../categories.json";
import products from "../../../products.json";
import Products from "../../Components/products/index.jsx";
import './styles.css'


const Home = () => {
    const context = useContext(ShoppingCartContext)


    return (
    <section  className='section-home'>
        <div className='nav'>
            <div className='chuckwudi-container '>
                <h1 className='chuckwudi'>Chukwudi</h1>
            </div>
            <input
                value={context.inputValue}
                onChange={context.handleInputChange}
                className="input"
                placeholder="search" type="text"

            />
            <div
                onClick={context.toggleOrder}
                className='shopping-cart'>
                <img className='' src='../../../icons/shopping-cart.png' alt='shopping cart'/>
            </div>
        </div>
        <article>
            <input
                className="responsive"
                placeholder="search" type="text"
                value={context.searchProduct}
                onChange={context.handleSearchChange}
            />
            <div className='header-container'>
                <div className='image '>
                    <img src="../images/headerimage.png" alt="" className='header-image' />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='flex text-3xl '>$0 delivery for 30 days!
                        <img src="../images/d.png" alt="" className='flex h-10 ml-5' />
                    </p>
                    <p>$0 delivery fee for orders over $10 for 30 days</p>
                </div>
                <div className='m-3 flex flex-wrap items-center mr-7 content-end '>
                    <a href="#" className='flex m-2'>Learn more<img src="../icons/109617.svg" alt="" className='w-5 ml-2 ' /></a>
                </div>
            </div>
        </article>
        <article>
            <div className='m-6 flex place-content-between'>
                <div className=''>
                    <p className='flex'>Restaurants <img src="../icons/1046784.svg" alt="" className='w-4 ml-2'/></p>
                </div>
                <button className='flex content-center'>
                    <div className='max-w-md  bg-orange-600 flex rounded-full items-center p-2 '>
                        <div><img src="../icons/149316.svg" alt="" className='w-5 m-2 invert '/></div>
                        <div className='flex'>
                            <p className='text-slate-200'>Delivery:</p><span className='font-bold text-slate-200 ml-2'>Now</span>
                        </div>
                        <div className=' '><img src="../icons/118740.svg" alt="" className='w-3 m-2 rotate-90 invert'/></div>
                    </div>
                </button>
            </div>
        </article>
        <article >
            <div className="">
                <CategorySlide  categories={categories} />
            </div>
        </article>
        <article>
            <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 m-4 max-w-full object-cover overflow-hidden">
                {products.map(item => (
                <Products
                    key={item.id}
                    name={item.name}
                    qualification={item.qualification}
                    time={item.time}
                    price={item.price}
                    image={item.image}
                    id_category={item.id_category}

                />
                ))}
            </div>
        </article>
    </section>
    )
}

export default Home