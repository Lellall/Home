import create from 'zustand';
import localforage from 'localforage';

const useOrderStore = create((set) => ({
  orders: [],

  // Initialize state with data from localforage
  init: async () => {
    try {
      const orders = await localforage.getItem('orders');
      if (orders !== null) {
        set({ orders });
      }
    } catch (error) {
      console.error('Error initializing orders from localforage:', error);
    }
  },

  addOrder: async (order) => {
    set((state) => {
      // Check if an order with the same ID exists
      const existingOrderIndex = state.orders.findIndex((o) => o.id === order.id);

      if (existingOrderIndex !== -1) {
        // If an order with the same ID exists, replace it
        state.orders[existingOrderIndex] = order;
      } else {
        // If not, add the new order to the array
        state.orders.push(order);
      }

      // Update orders in localforage
      localforage.setItem('orders', state.orders).catch((error) => {
        console.error('Error updating orders in localforage:', error);
      });

      // Return the updated state
      return { orders: [...state.orders] };
    });
  },
}));

// Initialize the store
useOrderStore.getState().init();

export default useOrderStore;
