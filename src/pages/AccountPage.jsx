import React from 'react'
import Header from '../components/Header/Header'
import OrderTabs from '../components/Order/OrderTabs/OrderTabs'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Modal from '../components/ui/Modal/Modal'
import ErrorModal from '../components/ui/ErrorModal/ErrorModal'

export const Main = styled.main`
	display:flex;
	flex-direction:column;
	align-items:center;
	justify-content: center;
	padding-top:40px;
	row-gap: 25px;
	h2 {
		font-size: 30px;
		font-weight: 500;
		padding: 12px 0px;
	}
`

const AccountPage = () => {

	const auth = useSelector((state) => state.auth)
  return (
	<>
		<Header/>
		<Main className='account'>
			<h2 className="account__title">Особистий кабінет</h2>
			{
				auth._id
				? <button>Log out</button> 
				: <OrderTabs/>
			}
		</Main>
		<Modal/>
		<ErrorModal/>
	</>
  )
}

export default AccountPage
