import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

const initialState = {
	items: [],
	filteredItems: [],
	status: null,
	error: null
}

export const productsFetch = createAsyncThunk(
	"products/productsFetch",
	async (id = null, {rejectWithValue}) => {
		try {
			const response = await axios.get("https://e-commerce-beauty-backend.onrender.com/products")
			return response?.data
		}	catch (err) {
			return rejectWithValue(err.response.data)
		}
	}
)

const productSlice = createSlice({ 
	name: "products",
	initialState,
	reducers: {
		filterDataByBrand: (state, action) => {
			const filtredData = state.items.filter(item => item.brand === action.payload)
			state.filteredItems = filtredData;
			console.log(state.filteredItems);
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(productsFetch.pending, (state) => {
			state.status = 'pending'
			})
			.addCase(productsFetch.fulfilled, (state, action) => {
				state.status = 'success'
				state.items = action.payload
			})
			.addCase(productsFetch.rejected, (state, action) => {
				state.status = 'rejected'
				state.error = action.payload
			})
	}
})

export default productSlice.reducer

export const  {filterDataByBrand} = productSlice.actions