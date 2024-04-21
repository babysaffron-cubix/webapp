import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import { getRequest } from "utils/asiox";

export interface Product {
  id: string;
  name: string;
}

const initialState = {
  loading: false,
  products: [] as Array<Product>,
  error: "" as string | undefined,
};

export const fetchProducts = createAsyncThunk("users/fetchUsers", async () => {
    const response = await getRequest("character/1,2,3");
    return response.data; // Assuming the data property contains the array of products
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Array<Product>>) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

export const { addProduct } = productSlice.actions;
export const productSelector = (state: RootState) => state.productReducer;

export default productSlice.reducer;
