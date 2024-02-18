// src/store/productStore.js
import create from "zustand";
import axios from "axios";
import { BaseUrl } from "../utils/config";

const useProductStore = create((set) => ({
  products: [],
  productsSearched: [],
  searchTerm: "",
  address: {},
  positionPoint: {},
  shppingFee: "",
  setProducts: (products) => set({ products }),
  setPositionPoint: (pos) => set({ positionPoint: { ...pos } }),
  setFee: (fee) => set({ shppingFee: fee }),
  setAddressInfo: (data) => set({ address: data }),
  setSearchTerm: (term) => set({ searchTerm: term }),
  fetchProducts: async (page) => {
    try {
      const response = await axios.get(
        `${BaseUrl}/products?page=${page}&size=10`
      );
      const newData = response.data.data; // Assuming response.data.data is an array of products
      set((state) => ({ products: [...state.products, ...newData] }));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },
  searchProducts: async () => {
    const searchTerm = useProductStore.getState().searchTerm;
    try {
      const response = await axios.get(
        `${BaseUrl}/products?page=0&size=10&filter=${searchTerm}`
      );
      set({ productsSearched: response?.data?.data });
    } catch (error) {
      console.error("Error searching data:", error);
    }
  },
  searchProductsByCategory: async (categoryId) => {
    try {
      const response = await axios.get(
        `${BaseUrl}/products?page=0&size=10&categoryId=${categoryId}`
      );
      set({ products: response?.data?.data });
    } catch (error) {
      console.error("Error searching data:", error);
    }
  },
}));

export default useProductStore;
