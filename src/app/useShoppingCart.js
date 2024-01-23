import create from "zustand";

const useShoppingCart = create((set) => {
  // Attempt to retrieve cart data from localStorage on initial load
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

  return {
    cart: storedCart,
    addToCart: (product) =>
      set((state) => {
        const existingItem = state.cart.find((item) => item.id === product.id);

        if (existingItem) {
          // Item already in the cart, increase qnty
          const updatedCart = state.cart.map((item) =>
            item.id === product.id ? { ...item, qnty: item.qnty + 1 } : item
          );
          localStorage.setItem("cart", JSON.stringify(updatedCart));
          return { cart: updatedCart };
        } else {
          // Item not in the cart, add with initial qnty
          const updatedCart = [...state.cart, { ...product, qnty: 1 }];
          localStorage.setItem("cart", JSON.stringify(updatedCart));
          return { cart: updatedCart };
        }
      }),
    removeFromCart: (productId) =>
      set((state) => {
        const updatedCart = state.cart.filter((item) => item.id !== productId);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return { cart: updatedCart };
      }),
    increaseQuantity: (productId) =>
      set((state) => {
        const updatedCart = state.cart.map((item) =>
          item.id === productId ? { ...item, qnty: item.qnty + 1 } : item
        );
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return { cart: updatedCart };
      }),
    decreaseQuantity: (productId) =>
      set((state) => {
        const updatedCart = state.cart.map((item) =>
          item.id === productId && item.qnty > 1
            ? { ...item, qnty: item.qnty - 1 }
            : item
        );
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return { cart: updatedCart };
      }),
    isProductInCart: (productId) => {
      const foundItem = useShoppingCart
        .getState()
        .cart.find((item) => item.id === productId);
      return Boolean(foundItem);
    },
  };
});

export default useShoppingCart;
