import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_CAT } from "../../cons.js";

const initialState = {
    category: [],
    error: '',
    activeCategory: 0,
};

export const categoryRequestAsync = createAsyncThunk('category/fetch', () =>
    fetch(`${API_CAT}`)
        .then(req => req.json())
        .then(data => {
            const categories = data.map(category => category);
            const uniqueCategories = [...new Set(categories)];
            return { categories: uniqueCategories }
        })
        .catch(error => {
            return { error };
        })
)

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        changeCategory(state, action) {
            state.activeCategory = action.payload.indexCategory;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(categoryRequestAsync.pending, (state) => {
                state.error = '';

            })
            .addCase(categoryRequestAsync.fulfilled, (state, action) => {
                state.error = '';
                state.category = action.payload.categories;
            })
            .addCase(categoryRequestAsync.rejected, (state, action) => {
                state.error = action.payload.error;
            })
    }
})

export const { changeCategory } = categorySlice.actions;

export default categorySlice.reducer;
