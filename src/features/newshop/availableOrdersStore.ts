// @ts-nocheck
import create from 'zustand';
import axios from 'axios';
// import useAuthStore from './useAu';
import { BaseUrl } from '../../utils/config';
import localforage from 'localforage';


const useAvailableOrdersStore = create((set) => ({
    showClaimModal: false,
    hasClaim: false,
    availableOrders: [],
    currentOrder: [],
    status: 'PENDING',
    startPolling: async() => {
        const token = await localforage.getItem("accessToken");
        const data = {
            riderLocation: {
                latitude: 9.078749,
                longitude: 7.4701862
            }
        };
        const intervalId = setInterval(async () => {
            try {
                const response = await axios.post(`${BaseUrl}/orders/available`, data, {
                    headers: {
                        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUklERVIiLCJzdWIiOiJlbmdpbmVlcmluZ0BsZWxsYWwuY29tIiwiaWF0IjoxNzA5MDI1ODY5LCJleHAiOjE3MDkwMjk0Njl9.eWOVmop6eAYLk_1RdvDYKqC0UwS2iu3Jb3j3Nh-8l3Q`,
                    },
                });
                const orders = await response.data;
                const hasAvailableOrders = orders.orderId !== null;

                set({ availableOrders: orders, showClaimModal: hasAvailableOrders }); // Set state properly
                console.log(hasAvailableOrders, 'hasAvailableOrders');
            } catch (error) {
                console.error('Error fetching available orders:', error);
            }
        }, 10000); // Poll every 10 seconds

        // Return cleanup function to stop polling when needed
        return () => clearInterval(intervalId);
    },
    replyToOrder: async (id, action, note) => {
        try {
            // Get the token from the authentication store
            const token = await localforage.getItem("accessToken");

            // Prepare payload for the request
            const payload = {
                orderId: id,
                action: action,
                note: note
            };

            // Send POST request to reply to the order
            const response = await axios.post('https://api.dev.lellall.com/orders/reply', payload, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            // Save the current order details to local storage
            // await SecureStore.setItemAsync('currentOrder', JSON.stringify(response.data));

            // Update state with the current order and hide the claim modal
            set({ currentOrder: response.data, showClaimModal: false, hasClaim: true });
        } catch (error) {
            console.error('Error replying to order:', error);
            // Handle error appropriately
        }
    },
    replyToReject: async (id, action, note) => {
        try {
            // Get the token from the authentication store
            const token = await localforage.getItem("accessToken");

            // Prepare payload for the request
            const payload = {
                orderId: id,
                action: action,
                note: note
            };

            // Send POST request to reply to the order
            const response = await axios.post('https://api.dev.lellall.com/orders/reply', payload, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            // Save the current order details to local storage
            // await SecureStore.setItemAsync('currentOrder', JSON.stringify([]));

            // Update state with the current order and hide the claim modal
            set({ currentOrder: [], showClaimModal: false, hasClaim: false });
        } catch (error) {
            console.error('Error replying to order:', error);
            // Handle error appropriately
        }
    }

}));

export default useAvailableOrdersStore;
