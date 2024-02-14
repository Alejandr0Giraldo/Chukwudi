
import {createContext, useState} from 'react'

export const ShoppingCartContext = createContext()

// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({children}) => {

    const [showOrder, setShowOrder] = useState(false)
    //Abrir ShoppingCart
    const openShoppingCart = () => setShowOrder(true)
    //Cerrar ShoppingCart
    const closeShoppingCart = () => setShowOrder(false)

    //valor del searchInput
    const [searchProduct, setSearchProduct] = useState('')
    const handleSearchChange = (e) => {
        setSearchProduct(e.target.value)
    }

    // My Order . products
    const [cartItems, setCartItems] = useState([])
    const addToCart = (product) => {
        const existingProduct = cartItems.find(item => item.id_product === product.id_product)
        if (existingProduct) {
            // Si el producto ya está en el carrito, puedes actualizar la cantidad
            setCartItems(cartItems.map(item => (item.id_product === product.id_product ? { ...item, quantity: item.quantity + 1 } : item)));

        } else {
            // Si el producto no está en el carrito, agrégalo
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    }


    // sumar cantidades al producto
    const incrementProducts = (id_product) => {
        let duplicateItem = [...cartItems]
        let foundItem = cartItems.findIndex(item => {
            if (item.id_product === id_product) {
                return true
            }
        })
        duplicateItem[foundItem].quantity = duplicateItem[foundItem].quantity + 1
        setCartItems([...duplicateItem])
    }

    // decrement amount
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

    //searchByCategory
    const [searchCategory, setSearchCategory] = useState('')

    //muestra lo que se escribe en el input
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (event) => {
        const newValue = event.target.value
        setInputValue(newValue)
    }

    //Eliminar productos del carrito
    const handleDelete = (id) => {
        const filteredProducts = cartItems.filter(product => product.id_product !== id)
        setCartItems(filteredProducts)
    }

    //Calcular el total del precio dependiendo las cantitades
    const calculateTotalProducts = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
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
            handleInputChange,
            handleDelete,
            calculateTotalProducts,
            searchCategory,
            setSearchCategory,


        }}>
        
            {children}
        </ShoppingCartContext.Provider>

    )
}