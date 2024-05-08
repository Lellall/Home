import axios from 'axios';
import { create } from 'zustand';
import localforage from 'localforage';
import { BaseUrl } from '../../../utils/config';

//expected status parameters: PENDING, ACCEPTED, ON_GOING, COMPLETED, CANCELED
const useTransactionHistory = create((set) => ({
  transactionHistory: [],
  resultTotals: 0,

  setTransactionHistory: (val) => set({ val }),

  fetchTransactionHistory: async (page) => {
    const token = await localforage.getItem('accessToken');
    if (token !== null) {
      try {
        const response = await axios.get(
          `${BaseUrl}/transactions?page=${page}&size=10`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        set(() => ({
          transactionHistory: response.data.data,
          resultTotals: response.data.resultTotal,
        }));
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    }
  },
}));

export default useTransactionHistory;
