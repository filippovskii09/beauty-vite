import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
	favoriteList: localStorage.getItem('favoriteItems') ? JSON.parse(localStorage.getItem('favoriteItems')) : [],
	totalLength : localStorage.getItem('favoriteItems') ? JSON.parse(localStorage.getItem('favoriteItems')).length : 0
}

const favoriteSlice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		addToFavorite(state, action) {
			const addedProduct = { ...action.payload, liked: true}
			state.favoriteList.push(addedProduct)

			localStorage.setItem('favoriteItems', JSON.stringify(state.favoriteList))
		},
		removeFromFavorite(state, action) {
			const filtredFavoriteList = state.favoriteList.filter(item => item.id !== action.payload.id)

			state.favoriteList = filtredFavoriteList

			localStorage.setItem('favoriteItems', JSON.stringify(state.favoriteList))
		}
	}
})

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer