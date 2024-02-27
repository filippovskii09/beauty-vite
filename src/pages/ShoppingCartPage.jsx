import React from 'react'
import Header from '../components/Header/Header'
import Cart from '../components/Cart/Cart'
import Newsletters from '../components/sections/Newsletters/Newsletters'
import { ToastContainer } from 'react-toastify'
import Modal from '../components/ui/Modal/Modal'
import ErrorModal from '../components/ui/ErrorModal/ErrorModal'
import Footer from '../components/Footer/Footer'

const ShoppingCartPage = () => {
  return (
	<>
		<Header/>
		<main>
			<Cart/>
			<Newsletters/>
			<ToastContainer/>
		</main>
		<Footer/>
		<Modal/>
		<ErrorModal/>
	</>
  )
}

export default ShoppingCartPage
