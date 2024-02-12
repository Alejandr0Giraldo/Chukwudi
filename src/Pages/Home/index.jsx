import {useContext} from "react";
import { ShoppingCartContext } from "../../Context/index.jsx";
import CategorySlide from "../../Components/CategorySlide/index.jsx";
import categories from "../../../categories.json";
import products from "../../../products.json";
import Products from "../../Components/products/index.jsx";
import './styles.css'


const Home = () => {
    const context = useContext(ShoppingCartContext)

    //filtrar mediante el input
    let listProducts = [...products]
    const filteredProducts = (valueSearch) => {
        let productsFiltered = listProducts.filter(product => product.name.toLowerCase().includes(valueSearch.toLowerCase()))
        listProducts = [...productsFiltered]
    }
    filteredProducts(context.inputValue)

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
                placeholder="search"
                type="text"
            />
            <div
                onClick={context.openShoppingCart}
                className='shopping-cart'>
                <img className='' src='../../../icons/shopping-cart.png' alt='shopping cart'/>
            </div>
        </div>
        <article>
            <input
                value={context.inputValue}
                onChange={context.handleInputChange}
                className="responsive"
                placeholder="search" type="text"
            />
            <div className='header-container'>
                <div className='image'>
                    <img src="../images/headerimage.png" alt="" className='header-image' />
                </div>
                <div className='header-delivery-days'>
                    <p className=''>$0 delivery for 30 days!
                        <img src="../images/d.png" alt="" className='' />
                    </p>
                    <p>$0 delivery fee for orders over $10 for 30 days</p>
                </div>
                <div className='container-more'>
                    <a href="#" className=''>Learn more<img src="../icons/109617.svg" alt="" className='arrow-more' /></a>
                </div>
            </div>
        </article>
        <article>
            <div className='section-delivery'>
                <div className='restaurant-container'>
                    <p >Restaurants <img src="../icons/1046784.svg" alt="" className='burger'/></p>
                </div>
                <button >
                    <div className='button-delivery'>
                        <img src="../icons/149316.svg" alt=""/>
                        <div className='delivery-container-button'>
                            <p >Delivery:</p><span >Now</span>
                        </div>
                        <div><img src="../icons/118740.svg" alt="" className='arrow-delivery'/></div>
                    </div>
                </button>
            </div>
        </article>
        <article >
            <div >
                <CategorySlide  categories={categories} />
            </div>
        </article>
        <article>
            <div  className="products-home">
                {listProducts.map(item => (
                <Products
                    id_product={item.id_product}
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