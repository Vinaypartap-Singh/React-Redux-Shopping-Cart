import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productReducer from "./productSlice";
import categorySlice from "./categorySlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productReducer,
    category: categorySlice,
  },
});

export default store;
