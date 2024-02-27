import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsAPI = createApi({
	reducerPath: "productsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://e-commerce-beauty-backend.onrender.com'
	}),
	endpoints: (builder) => ({
		getAllProduct: builder.query({
			query: (name) => "products"
		})
	})
})

export const { useGetAllProductQuery } = productsAPI