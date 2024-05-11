import axios from 'axios';
import { create } from 'zustand';
import { BaseUrl } from '../utils/config';
import localforage from 'localforage';

//expected status parameters: PENDING, ACCEPTED, ON_GOING, COMPLETED, CANCELED
const useOrdersHistory = create((set) => ({
  ordersHistory: [],
  resultTotals: 0,

  setOrdersHistory: (val) => set({ val }),

  fetchOrdersHistory: async (page, status) => {
    const token = await localforage.getItem('accessToken');
    if (token !== null) {
      try {
        const response = await axios.get(
          `${BaseUrl}/orders/consumer/history?page=${page}&size=10&status=${status}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const newData = response.data.data;
        console.log(
          'localforage.getItem::::',
          localforage.getItem('accessToken')
        );
        set(() => ({
          ordersHistory: newData,
          resultTotals: response.data.resultTotal,
        }));
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    }
  },
}));

export default useOrdersHistory;
