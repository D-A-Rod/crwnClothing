import { createContext, useState, useEffect } from "react";


//Do this again to hammer down
const addCartItem = (cartItems, productToAdd) => {

    const existingItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

    if(existingItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? 
        {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        )
    }
 
    return [...cartItems, { ...productToAdd, quantity: 1 }]

}

const removeCartItem = (cartItems, cartItemToRemove) => {
    // find cart item to remove
    const existingItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id)

    // check if quantity is === to 1, if it is, remove that item from cart
    if(existingItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    // return back cartItems (the array of cart items), with the matching cart with reduced quantity
    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ? 
        {...cartItem, quantity: cartItem.quantity - 1} : cartItem
        )

}

const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)




export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemToCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0,
})

export const CartProvider = ({  children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)
    

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity *  cartItem.price, 0)
        setCartTotal(newCartTotal)
    }, [cartItems])


    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));

    }

    const removeItemToCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));

    }

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));

    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, removeItemToCart, clearItemFromCart, cartItems, cartCount, cartTotal}
    

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}