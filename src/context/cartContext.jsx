import { createContext, useContext, useState } from "react"
import { db } from "../firebase/firebaseConfig"
import { doc, setDoc, getDoc } from "firebase/firestore"

export const CartContext = createContext()
export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const cartQty = cart.reduce((acc, item) => acc + item.qty, 0)
  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0)
  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id)
      if (existingProduct) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + qty } : item
        )
      } else {
        return [...prev, { ...product, qty }]
      }
    })
  }
  const removefromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setCart([])
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removefromCart,
        clearCart,
        cartQty,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
