import { createSlice } from "@reduxjs/toolkit";
const cartItems = JSON.parse(localStorage.getItem("cart"));

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: cartItems || [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const indexToRemove = state.items.findIndex(
        (item) => item?.card?.info?.id === action.payload
      );
      if (indexToRemove !== -1) {
        state.items.splice(indexToRemove, 1);
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
