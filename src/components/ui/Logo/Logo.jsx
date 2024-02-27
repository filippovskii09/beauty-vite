import React from 'react'
import LogoIcon from '../../../images/icons/logo.svg'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
		<Link to='/'>
			<img src={LogoIcon} alt="Logo icon" />
		</Link>
  )
}

export default Logo
