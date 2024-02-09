
import {createContext, useState} from 'react'

export const ShoppingCartContext = createContext()

// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({children}) => {


    const [showOrder, setShowOrder] = useState(false)

    const openShoppingCart = () => setShowOrder(true)

    const closeShoppingCart = () => setShowOrder(false)


    const [searchProduct, setSearchProduct] = useState('')
    const handleSearchChange = (e) => {
        setSearchProduct(e.target.value)
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

    // sumar cantidades al producto 
    const incrementProducts = (id_product) => {
        let duplicateCartItem = [...cartItems]
        let foundItem = cartItems.findIndex(item => {
            if (item.id_product === id_product) {
                return true
            }
        })
        duplicateCartItem[foundItem].quantity = duplicateCartItem[foundItem].quantity + 1
        setCartItems([...duplicateCartItem])
    }

    //decrement amount
    const decrementAmount = (id_product) => {
        let duplicateCartItem = [...cartItems]
        //encontrar la posicion del item
        let foundItem = cartItems.findIndex(item => {
            //valida si id_product del item es igual al id_product del json
            if (item.id_product === id_product){
                return true
            }
        })
        // valida si la cantidad en mayor a 1 y actualiza la cantidad, si es menor a 1 no actualiza
        if (duplicateCartItem[foundItem].quantity > 1){
            //disminuye la cantidad encontrando la posicion del item
            duplicateCartItem[foundItem].quantity = duplicateCartItem[foundItem].quantity - 1
            //actualiza cart items
            setCartItems([...duplicateCartItem])
        }
    }

    //muestra lo que se escribe en el input
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (event) => {
        const newValue = event.target.value
        setInputValue(newValue)
        console.log(newValue, 'newValue')
    }








    return (
        < ShoppingCartContext.Provider value={{    
            openShoppingCart,
            closeShoppingCart,
            showOrder,
            setShowOrder,
            searchProduct,
            setSearchProduct,
            handleSearchChange,
            cartItems,
            setCartItems,
            addToCart,
            incrementProducts,
            decrementAmount,
            setInputValue,
            inputValue,
            handleInputChange

        }}>
        
            {children}
        </ShoppingCartContext.Provider>

    )
}