import React, { useState } from 'react'
import styled from 'styled-components';
import Bg from '../../../images/form-bg.png'
import validator from 'validator';

export const NewsLetter = styled.section`
	* {
		margin: 0;
		padding: 0;
	}
	height: 236px; 
	position:relative;
	display: flex;
	align-items:center;
	flex-direction: column;
	img {
		position: absolute;
		left:0;
		top:0;
		z-index:-1;
		height: 100%;
		width: 100%; 
	}
	h2 {
		color: var(--bw-black, #323232);
		font-size: 32px;
		font-weight: 500;
		letter-spacing: 0.64px;
		text-align: center;
		padding-top:50px;
		padding-bottom: 48px;
		@media (max-width:797px){
			padding-bottom: 28px;
		}
		@media (max-width:585px){
			font-size:16px;
			max-width: 240px;
		}
	}
	form {
		display: flex;
		align-items:flex-start;
		gap: 18px;
		@media (max-width:585px){
			flex-direction: column;
			align-items: center;
			row-gap: 14px;
		}
	}
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	input {
		width: 350px;
		height: 45px;
		padding-left:18px;
		display: flex;
		align-items:center;
		border-radius: 26px;
		border: 1px solid var(--bw-dark-gray, #575757);
		cursor:pointer;
		background: #F9D3D8;
		&:invalid {
      	border: 1px solid red;
		}
		@media (max-width:585px){
			width: 200px;
		}
	}
	input::placeholder {
		color: var(--bw-dark-gray, #575757);
		font-size: 14px;
		font-style: normal;
		transition: all 0.3s ease 0s;
		&:invalid {
      	color: '#fff';
		}
	}
	input:hover::placeholder {
		opacity: 0.6;
	}
	input:focus::placeholder {
		opacity: 0;
	}
	button {
		color: var(--bw-white, #FFF);
		border-radius: 24px;
		background: var(--bw-black, #323232);
		width: 160px;
		height: 42px;
		border: none;
		cursor: pointer;
		transition: all 0.3s ease 0s;
		@media (max-width:585px){
			width: 150px;
			height: 38px;
		}
	}
	button:hover {
		background:#727272;
	}
	p {
		padding: 5px 10px;
		color: red;
		font-size: 14px;
	}
`
const Newsletters = () => {
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');

	const handleGetEmail = (e) => {
		e.preventDefault()

		if(!validator.isEmail(email)) {
			setError('Введіть правильну електронну пошту')
			return;
		}

		setError('');
		setEmail('');
	}

  return (
	 <NewsLetter>	
		<img src={Bg} alt='newsletter-background'/>
		<h2>Дізнавайтесь першими про розпродажі і новинки! </h2>
		<form>
			<div>
				<input 
					type='email' 
					onChange={(e) => setEmail(e.target.value)} 
					value={email} 
					placeholder='Електронна пошта' 
				/>
				<p style={{display: error.length === 0 ? 'none': 'block'}}>{error}</p>
			</div>
			<button 
				type='submit' 
				onClick={handleGetEmail}
			>
			Підписатися
			</button>
		</form>
	 </NewsLetter>
  )
}

export default Newsletters
