/* eslint-disable no-case-declarations */
export const ACTION_TYPES = {
    ADD: "ADD_TO_CART",
    DELETE: "REMOVE_FROM_CART",
    INCREASE: "INCREASE_QUANTITY",
    DECREASE: "DECREASE_QUANTITY",
    CLEAR: "EMPTY_CART",
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case ACTION_TYPES.ADD:
        return [...state, action.payload];
      case ACTION_TYPES.DELETE:
        const newItems = state.filter((item) => item.id !== action.payload);
        return newItems;
      case ACTION_TYPES.INCREASE:
        const increased = state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity++ };
          }
          return item;
        });
        return increased;
      case ACTION_TYPES.DECREASE:
        const decreased = state.map((item) => {
          if (item.quantity === 1) return item;
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity-- };
          }
          return item;
        });
        return decreased;
      case ACTION_TYPES.CLEAR:
        return [];
      default:
        return state;
    }
  };
  
  export default reducer;
  