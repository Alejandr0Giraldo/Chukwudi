
import {createContext, useState} from 'react'

export const ShoppingCartContext = createContext()

// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({children}) => {

    const [count, setCount] = useState(0)

    const [showOrder, setShowOrder] = useState(true)
    const toggleOrder = () => {
        setShowOrder(!showOrder)
    }

    const [searchByTitle, setSearchByTitle] = useState(null)

    const [searchByCategory, setSearchByCategory] = useState(null)



    return (
        < ShoppingCartContext.Provider value={{
            count,
            setCount,
            toggleOrder,
            showOrder,
            setShowOrder,
            searchByTitle,
            setSearchByTitle,
            searchByCategory,
            setSearchByCategory,
        }}>
            {children}
        </ShoppingCartContext.Provider>

    )
}