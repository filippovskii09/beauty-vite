import React from 'react'
import Order from '../components/Order/Order'
import OrderHeader from '../components/OrderHeader/OrderHeader'
import Modal from '../components/ui/Modal/Modal'
import ErrorModal from '../components/ui/ErrorModal/ErrorModal'

const OrderPage = () => {
  return (
	<>
		<OrderHeader/>
		 <main>
		 	<Order/>
		 </main>
		 <Modal/>
		 <ErrorModal/>
	</>
  )
}

export default OrderPage
