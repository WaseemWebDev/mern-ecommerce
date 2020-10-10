import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      let checkProduct = state.cart.find((cart) => {
        return cart._id === action.payload._id;
      });
      if (!checkProduct) {
        state.cart.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.cart.splice(action.payload, 1);
    },
    increaseQuantity: (state, action) => {
      state.cart[action.payload].defaultQuantity += 1;
    },
    decreaseQuantity: (state, action) => {
      state.cart[action.payload].defaultQuantity -= 1;
    },
    clearCart:(state,payload)=>{
      state.cart = [];
    }
  },
});

export const {
  addToCart,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart
} = counterSlice.actions;
export default counterSlice.reducer;
