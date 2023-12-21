
import {createContext, useState} from 'react'

export const ShoppingCartContext = createContext()

// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({children}) => {

    const [count, setCount] = useState(0)

    const [showOrder, setShowOrder] = useState(false)

    const openShopppingCart = () => setShowOrder(true)

    const closeShoppingCart = () => setShowOrder(false)


    const [searchProduct, setSearchProduct] = useState('')
    const handleSearchChange = (e) => {
        setSearchProduct(e.target.value)
    }

    //amount products
    const [cartProducts, setCartProducts] = useState([])

    //increment products
    const [amountProduct, setAmountProduct] = useState(0)
    const incrementAmount = () => {
        setAmountProduct(amountProduct + 1)
    }
    const decrementAmount = () => {
        if (amountProduct > 0) {
            setAmountProduct(amountProduct - 1)
        }
    }

    // My Order . products
    const [cartItems, setCartItems] = useState([])
    const addToCart = (item) => {
        setCartItems([...cartItems, item])
    }


    return (
        < ShoppingCartContext.Provider value={{    
            count,
            setCount,
            openShopppingCart,
            closeShoppingCart,
            showOrder,
            setShowOrder,
            searchProduct,
            setSearchProduct,
            handleSearchChange,
            cartProducts,
            setCartProducts,
            amountProduct,
            setAmountProduct,
            incrementAmount,
            decrementAmount,
            cartItems,
            setCartItems,
            addToCart,

        }}>
            {children}
        </ShoppingCartContext.Provider>

    )
}