import axios from 'axios';
import { create } from 'zustand';
import localforage from 'localforage';
import { BaseUrl } from '../../../utils/config';

//expected status parameters: PENDING, ACCEPTED, ON_GOING, COMPLETED, CANCELED
const useTransactionHistory = create((set) => ({
  transactionHistory: [],
  resultTotals: 0,
  loading: false,
  setTransactionHistory: (val) => set({ val }),

  fetchTransactionHistory: async (page, size, status = '') => {
    const token = await localforage.getItem('accessToken');
    if (token !== null) {
      set(() => ({
        loading: true,
      }));
      try {
        const response = await axios.get(
          `${BaseUrl}/transactions?page=${page}&size=${size}&status=${status}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        set(() => ({
          transactionHistory: response.data.data,
          resultTotals: response.data.resultTotal,
          loading: false,
        }));
      } catch (error) {
        console.error('Error fetching orders:', error);
        set(() => ({
          loading: true,
        }));
      }
    }
  },
}));

export default useTransactionHistory;
