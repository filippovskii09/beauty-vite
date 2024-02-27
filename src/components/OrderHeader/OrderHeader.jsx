import React from 'react'
import LogoIcon from '../../images/icons/logo.svg'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

export const HeaderStyled = styled.header`
	background: linear-gradient(90deg, rgba(255, 200, 171, 0.91) 0%, #FFE5EE 66.98%);
	box-shadow: 0px 1px 30px 0px rgba(0, 0, 0, 0.10);
	height: 82px;
	display: flex;
	align-items: center;
	justify-content: center;
`
const OrderHeader = () => {

  return (
	 <HeaderStyled>
		<div className="container">
			<Link to='/'>
			<img src={LogoIcon} alt="Logo icon" />
			</Link>
		</div>
	 </HeaderStyled>
  )
}

export default OrderHeader
