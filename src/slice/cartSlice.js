import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
	cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
	cartTotalQuantity: 0,
	cartTotalAmount: 0
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action) {
			const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
			
			if (itemIndex >= 0) {
				state.cartItems[itemIndex].cartQuantity += 1
				// toast.info('Increased product', {
				// 	position: "bottom-left"
				// })
			} else {
				const tempProduct = { ...action.payload, cartQuantity: 1 };
				state.cartItems.push(tempProduct)
				// toast.success('Added to card', {
				// 	position: "bottom-left"
				// })
			}

			localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
		},
		removeFromCart(state, action) {
			const nextCartItems = state.cartItems.filter(
				cartItem => cartItem.id !== action.payload.id
			)

			state.cartItems = nextCartItems
			
			localStorage.setItem('cartItems', JSON.stringify(state.cartItems))

			// toast.error('Remove from cart', {
			// 	position: "bottom-left"
			// })

		},
		decreaseQuantity(state, action) {
			const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)

			if(state.cartItems[itemIndex].cartQuantity > 1) {
				state.cartItems[itemIndex].cartQuantity -= 1

				// toast.info('Decreased cart quantity', {
				// 	position: "bottom-left"
				// })

			} else if (state.cartItems[itemIndex].cartQuantity === 1) {
				const nextCartItems = state.cartItems.filter(
					cartItem => cartItem.id !== action.payload.id
				)

				state.cartItems = nextCartItems
	
				localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
	
				// toast.error('Remove from cart', {
				// 	position: "bottom-left"
				// })
			}
			localStorage.setItem('cartItems', JSON.stringify(state.cartItems))

		},
		getTotal(state) {
			let {total, quantity} = state.cartItems.reduce((cartTotal, cartItem) => {
				const { price, cartQuantity } = cartItem;
				const ItemTotal = price * cartQuantity

				cartTotal.total += ItemTotal
				cartTotal.quantity += cartQuantity

				return cartTotal
			}, {
				total: 0,
				quantity: 0
			})

			state.cartTotalQuantity = quantity
			state.cartTotalAmount = total
		},
		clearCart(state) {
			state.cartItems = [];
		}
	}
})

export const { addToCart, removeFromCart, getTotal, decreaseQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer