// src/store/productStore.js
import create from 'zustand';
import axios from 'axios';
import { BaseUrl } from '../utils/config';

const useProductStore = create((set) => ({
  products: [],
  searchTerm: '',
  setProducts: (products) => set({ products }),
  setSearchTerm: (term) => set({ searchTerm: term }),
  fetchProducts: async () => {
    try {
      const response = await axios.get(`${BaseUrl}/products?page=0&size=10`
      );
      set({ products: response?.data?.data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
  searchProducts: async () => {
    const searchTerm = useProductStore.getState().searchTerm;
    try {
      const response = await axios.get(
        `${BaseUrl}/products?page=0&size=10&filter=${searchTerm}`
      );
      set({ products: response?.data?.data });
    } catch (error) {
      console.error('Error searching data:', error);
    }
  },
}));

export default useProductStore;
