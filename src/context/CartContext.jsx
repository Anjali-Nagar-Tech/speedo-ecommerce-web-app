import { createContext, useState, useContext, useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {

  // ✅ Load from localStorage initially
  const [cartItem, setCartItem] = useState(() => {
    const stored = localStorage.getItem("cartItem");
    return stored ? JSON.parse(stored) : [];
  });


  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);


  const addToCart = (product) => {
    const normalizedProduct = {
      ...product,
      id: product.id || product._id || crypto.randomUUID(), // ensure unique id
    };

    setCartItem((prev) => {
      const existingItem = prev.find(
        (item) => item.id === normalizedProduct.id
      );

      if (existingItem) {
        return prev.map((item) =>
          item.id === normalizedProduct.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...normalizedProduct, quantity: 1 }];
    });
  };


  const increaseQty = (id) => {
    setCartItem((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItem((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // ✅ Remove item (FIXED ID BUG)
  const removeFromCart = (id) => {
    setCartItem((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartItem,
        setCartItem,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};


// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);