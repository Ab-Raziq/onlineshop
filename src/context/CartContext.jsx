import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        { ...product, quantity: 1 }
      ]);
    }
  };

  const increaseQuantity = (productId) =>{
    setCart(
        cart.map((item) => (
            item.id === productId
            ?{...item , quantity:item.quantity+1}
            : item
        ))
    )
  }

  const decreaseQuantity = (productId) =>{
    setCart(
        cart.map((item)=>(
            item.id === productId && item.quantity > 1
            ? {...item , quantity:item.quantity-1}
            : item

        ))
    )
  }
  const removeFromCart = (productId) => {
    setCart(
        cart.filter((item) => item.id !== productId)
    )
};

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
        setCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}