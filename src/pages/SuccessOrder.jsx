import React from 'react'
import OrderHeader from '../components/OrderHeader/OrderHeader'
import Icon from '../images/icons/check-mark-svgrepo-com.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Modal from '../components/ui/Modal/Modal'
import ErrorModal from '../components/ui/ErrorModal/ErrorModal'

export const MainStyled = styled.main`
	display:flex;
	flex-direction: column;
	text-align: center;
	align-items: center;
	padding-top: 180px;
	h1 {
		color: var(--bw-black, #323232);
		font-size: 40px;
		font-weight: 600;
		line-height: 120%; /* 48px */
		letter-spacing: -0.8px;
		padding-top: 36px;
		padding-bottom: 16px;
	}
	p {
		color: var(--bw-dark-gray, var(--, #575757));
		font-size: 18px;
		font-weight: 500;
		letter-spacing: 0.36px;
		padding-bottom: 16px;
	}
	h4 {
		color: var(--bw-dark-gray, var(--, #575757));
		font-size: 21px;
		font-weight: 500;
		letter-spacing: 0.42px;
		padding-bottom: 72px;
	}
	.btn {
		color: #FFF;
		width: 208px;
		height: 46px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 26px;
		background: #343434;
		border: none;
	}
`
const SuccessOrder = () => {
  return (
	<>
		<OrderHeader/>
		 <MainStyled>
		 	<img src={Icon} alt="" />
			<h1>Дякуємо, Ваше замовлення оформлене!</h1>
			<p>Код відстеження замовлення BSL56R34W</p>
			<h4>Лист-підтвердження надіслано на ваш e-mail</h4>
			<Link to='/' className='btn'>Продовжити покупки</Link>
		 </MainStyled>
		 <Modal/>
		 <ErrorModal/>
	</>
  )
}

export default SuccessOrder
