import React from 'react'
import Header from '../components/Header/Header'
import Favorite from '../components/sections/Favorite/Favorite'
import Modal from '../components/ui/Modal/Modal'
import ErrorModal from '../components/ui/ErrorModal/ErrorModal'
import Footer from '../components/Footer/Footer'
import Newsletters from '../components/sections/Newsletters/Newsletters'

const FavoritePage = () => {
  return (
	 <>
		<Header/>
		<main>
			<Favorite/>
		</main>
		<Newsletters/>
		<Footer/>
		<Modal/>
		<ErrorModal/>

	 </>
  )
}

export default FavoritePage
