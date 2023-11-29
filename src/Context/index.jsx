
import {createContext, useState} from 'react'

export const ShoppingCartContext = createContext()

// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({children}) => {

    const [count, setCount] = useState(0)

    const [showOrder, setShowOrder] = useState(true)
    const toggleOrder = () => {
        setShowOrder(!showOrder)
    }

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
    const [order, setOrder] = useState([])
    const addToOrder = (product) => {
        setOrder([...order, product])
    }


    return (
        < ShoppingCartContext.Provider value={{    
            count,
            setCount,
            toggleOrder,
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
            order,
            setOrder,
            addToOrder,

        }}>
            {children}
        </ShoppingCartContext.Provider>

    )
}