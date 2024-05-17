// src/store/productStore.js
import create from 'zustand';
import axios from 'axios';
import { BaseUrl } from '../utils/config';
import localforage from 'localforage';
import { toast } from 'react-toastify';

const useProductStore = create((set) => ({
  products: [],
  productsSearched: [],
  categories: [],
  categoriesTotal: 0,
  searchTerm: null,
  address: {},
  distance: null,
  positionPoint: {},
  shppingFee: '',
  consumerPhoneNumber: '',
  isLoading: false,
  isOpen: false,
  setProducts: (products) => set({ products }),
  setPositionPoint: (pos) => set({ positionPoint: { ...pos } }),
  setDistance: (pos) => set({ distance: pos }),
  setFee: (fee) => set({ shppingFee: fee }),
  setPhone: (phone) => set({ consumerPhoneNumber: phone }),
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
      console.error('Error fetching products:', error);
    }
  },
  fetchCategories: async (page) => {
    console.log('page', page);
    try {
      const response = await axios.get(
        `${BaseUrl}/categories/all-categories?pageNo=${page}&pageSize=10`
      );
      const newData = response.data.data; // Assuming response.data.data is an array of products
      console.log('response', newData);
      set(() => ({
        categories: newData,
        categoriesTotal: response.data.resultTotal,
      }));
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  },
  searchProducts: async (val) => {
    const searchTerm = useProductStore.getState().searchTerm;
    try {
      const response = await axios.get(
        `${BaseUrl}/products?page=0&size=10&filter=${val}`
      );
      set({ productsSearched: response?.data?.data });
    } catch (error) {
      console.error('Error searching data:', error);
    }
  },
  searchProductsByCategory: async (categoryId) => {
    try {
      const response = await axios.get(
        `${BaseUrl}/products?page=0&size=10&categoryId=${categoryId}`
      );
      set({ products: response?.data?.data });
    } catch (error) {
      console.error('Error searching data:', error);
    }
  },
  openView: async () => {
    set({ isOpen: true });
  },
  closeView: async () => {
    set({ isOpen: false });
  },
  updateProduct: async (product) => {
    const token = await localforage.getItem('accessToken');
    try {
      set({ isLoading: true });
      await axios.patch(
        `${BaseUrl}/products/${product.id}`,
        {
          isAvailable: product.available,
          price: product.price,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      toast.success(`Record updated successfully`, {
        position: 'top-right',
      });
      set({ isLoading: false, isOpen: false });
    } catch (error) {
      set({ isLoading: false, isOpen: false });
    }
  },
}));

export default useProductStore;
