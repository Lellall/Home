import axios from 'axios';
import localforage from 'localforage';
import create from 'zustand';

export const useIncompleteStore = create((set) => ({
  incompleteOrders: [],
  fetchIncompleteOrders: async (token) => {
    const accessToken = await localforage.getItem("accessToken");

    try {
      const response = await axios.get(
        "https://api.dev.lellall.com/transactions/incomplete-order",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      set({ incompleteOrders: response.data });
    } catch (error) {
      console.error("Error fetching incomplete orders:", error);
    }
  },
}));
