import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart(state, action) {
      const itemInCart = state.cart.find(
        (items) => items.id === action.payload.id
      );
      if (itemInCart) {
        if (itemInCart.quantity < 10) {
          itemInCart.quantity++;
        } else {
          alert("Maximum Items Added In Cart");
        }
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    increaseQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      if (item.quantity < 10) {
        item.quantity++;
      } else {
        alert("Maximum Items Added To Cart");
      }
    },

    decreaseQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      if (item.quantity > 1) {
        item.quantity--;
      } else {
        alert("Remove Item From Cart");
      }
    },

    removeFromCart(state, action) {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
