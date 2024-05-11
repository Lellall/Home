import axios from "axios";
import localforage from "localforage";
import create from "zustand";
import { BaseUrl } from "../utils/config";
import { toast } from "react-toastify";

export const useIncompleteStore = create((set) => ({
  incompleteOrders: [],
  error: null,
  showModal: false,
  loading: false,
  setShowModal: (value) => set({ showModal: value }),
  fetchIncompleteOrders: async (token) => {
    const accessToken = await localforage.getItem("accessToken");

    try {
      // set({ loading: true });
      const response = await axios.get(
        `${BaseUrl}/transactions/incomplete-order`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      set({ incompleteOrders: response.data, loading: false });
    } catch (error) {
      console.error("Error fetching incomplete orders:", error);
      set({ error: error.response, loading: false });
    }
  },
  completeOrder: async (id) => {
    const accessToken = await localforage.getItem("accessToken");
    try {
      set({ loading: true });
      // Send POST request to reply to the order
      const response = await axios.put(
        `${BaseUrl}/orders/complete/${id}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      await set({ showModal: false, loading: false });
      await fetchIncompleteOrders();
      toast.success(`Order completed successfully`, {
        position: 'top-right',
      });
    } catch (error) {
      set({ error: error.response, loading: false });
    }
  },
}));
