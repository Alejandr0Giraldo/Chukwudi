
import {createContext, useState} from 'react'

export const ShoppingCartContext = createContext()

// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({children}) => {

    const [count, setCount] = useState(1)

    const [showOrder, setShowOrder] = useState(false)

    const openShoppingCart = () => setShowOrder(true)

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
        let foundedItem = null
        let duplicateCartItem = [...cartItems]

        //Recorrer los productos del shopping cart
        cartItems.map((pepito, index) => {
            //comparar el id de pepito si es igual con el id de item para agregar, para saber si el producto esta repetido en el Sopping cart
            if (pepito.id_product === item.id_product){
                //encontrar la posicion del producto repetido
                foundedItem = index
            }
        })

        //si no se encontro ningun producto repetido, agrego el producto deseado
        if (foundedItem === null) {
            setCartItems([...cartItems, item])
        }
        //si hay un producto repetido y aqui se actualiza la cantidad del producto
        else {
            duplicateCartItem[foundedItem].quantity = duplicateCartItem[foundedItem].quantity + 1
            setCartItems([...duplicateCartItem])
        }
    }







    return (
        < ShoppingCartContext.Provider value={{    
            count,
            setCount,
            openShoppingCart,
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