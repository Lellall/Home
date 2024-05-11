import create from 'zustand';

// Define your Zustand store
const useStore = create((set) => ({
  streetName: '',
  houseNumber: '',
  apartmentName: '',
  estate: '',
  poBox: '',
  region: '',
  setAddress: (data) => set(data),
}));

// Function to update address
const updateAddress = (data) => {
  useStore.setState(data);
};

export { useStore, updateAddress };
