import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const STATUSESCODE = {
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
};

const categorySlice = createSlice({
  name: "categoryfilter",
  initialState: {
    data: [],
    catStatus: STATUSESCODE.IDLE,
  },
  reducers: {
    setCatProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(categoryProduct.pending, (state, action) => {
        state.catStatus = STATUSESCODE.LOADING;
      })
      .addCase(categoryProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.catStatus = STATUSESCODE.IDLE;
      })
      .addCase(categoryProduct.rejected, (state, action) => {
        state.catStatus = STATUSESCODE.ERROR;
      });
  },
});

export const { setCatProducts, setStatus } = categorySlice.actions;

export default categorySlice.reducer;

export const categoryProduct = createAsyncThunk(
  "category/fetch",
  async (categoryName) => {
    const res = await fetch(
      `https://dummyjson.com/products/category/${categoryName}`
    );
    const data = await res.json();
    return data;
  }
);

// Create Asyncthunk
