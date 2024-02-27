import React from 'react'
import Header from '../components/Header/Header'
import Modal from '../components/ui/Modal/Modal'
import ErrorModal from '../components/ui/ErrorModal/ErrorModal'

const ConfirmationPage = () => {
  return (
	<>
		<Header/>
		 <main>
			Confirmation page
		 </main>
		 <Modal/>
		 <ErrorModal/>
	</>
  )
}

export default ConfirmationPage
