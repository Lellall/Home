// src/store/orderStore.js
import create from 'zustand';

const useOrderStore = create((set) => ({
  orders: [],
  addOrder: (order) => set((state) => ({ orders: [...state.orders, order] })),
}));

export default useOrderStore;
