import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { API_DB } from "../../cons";

const initialState = {
    products: [],
    error: '',
}

export const productRequestAsync = createAsyncThunk(
    'product/fetch', async (category) => {
        try {
            const req = await fetch(`${API_DB}?category=${category}`);
            const data = await req.json();
            return data;
        } catch (error) {
            console.error("Error fetching products:", error);
            return { error };
        }
    }
);

const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(productRequestAsync.pending, state => {
                state.error = '';
            })
            .addCase(productRequestAsync.fulfilled, (state, action) => {
                state.error = '';
                state.products = action.payload;
            })
            .addCase(productRequestAsync.rejected, (state, action) => {
                state.error = action.payload.error;
            });
    }
})

export default productSlice.reducer;
