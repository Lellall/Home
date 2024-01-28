import create from "zustand";

const useShoppingCart = create((set) => {
  // Attempt to retrieve cart data from localStorage on initial load
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

  return {
    cart: storedCart,
    addToCart: (product) =>
      set((state) => {
        const updatedCart = [...state.cart, { ...product, qnty: 1 }];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return { cart: updatedCart };
      }),
    removeFromCart: (id) =>
      set((state) => {
        const updatedCart = state.cart.filter((item) => item.productId !== id);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return { cart: updatedCart };
      }),
    increaseQuantity: (id) =>
      set((state) => {
        console.log(id, "updatedCart");
        const updatedCart = state.cart.map((item) =>
          item.productId === id ? { ...item, qnty: item.qnty + 1 } : item
        );
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return { cart: updatedCart };
      }),
    decreaseQuantity: (id) =>
      set((state) => {
        console.log(id, "updatedCart");
        const updatedCart = state.cart.map((item) =>
          item.productId === id && item.qnty > 1 ? { ...item, qnty: item.qnty - 1 } : item
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
