import { configureStore } from "@reduxjs/toolkit";
import productReducer, { productsFetch } from "../slice/productSlice";
import { productsAPI } from "../slice/productsAPI";
import cartReducer, { getTotal } from "../slice/cartSlice";
import authSlice from "../slice/authSlice";
import favoriteReducer from '../slice/favoriteSlice';

export const store = configureStore({
	reducer: {
		products: productReducer,
		cart: cartReducer,
		auth: authSlice,
		favorite: favoriteReducer,
		[productsAPI.reducerPath] : productsAPI.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsAPI.middleware),
})

store.dispatch(productsFetch())
store.dispatch(getTotal())
