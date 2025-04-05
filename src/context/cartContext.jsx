import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const storedCartString = localStorage.getItem("cart");
      console.log("Initial localStorage read:", storedCartString);

      if (storedCartString) {
        const parsedCart = JSON.parse(storedCartString);
        console.log("Parsed cart:", parsedCart);
        return parsedCart;
      }
    } catch (error) {
      console.error("Error initializing cart from localStorage:", error);
    }
    return [];
  });

  useEffect(() => {
    try {
      console.log("Saving cart to localStorage:", cart);
      localStorage.setItem("cart", JSON.stringify(cart));

      const verification = localStorage.getItem("cart");
      console.log("Verification - localStorage after save:", verification);
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  }, [cart]);

  const updateQty = (id, newQty) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: newQty } : item))
    );
  };

  const formatPrice = (amount) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const cartQty = cart.reduce((acc, item) => acc + item.qty, 0);
  const cartTotal = formatPrice(
    cart.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  const addToCart = (product, qty = 1) => {
    console.log("Adding to cart:", product, "qty:", qty);
    setCart((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);
      if (existingProduct) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + qty } : item
        );
      } else {
        return [
          ...prev,
          {
            id: product.id,
            title: product.name,
            price: product.price,
            img: product.img,
            stock: product.stock,
            qty: qty,
          },
        ];
      }
    });
  };

  const removeFromCart = (id) => {
    console.log("Removing from cart, id:", id);
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    console.log("Clearing cart");
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        cartQty,
        cartTotal,
        formatPrice,
        updateQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
