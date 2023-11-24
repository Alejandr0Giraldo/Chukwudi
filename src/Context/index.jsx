
import {createContext, useEffect, useState} from 'react'

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
            setCartProducts


        }}>
            {children}
        </ShoppingCartContext.Provider>

    )
}