import React, { useContext, useEffect, useState } from 'react'
import styles from './ScrolledHeader.module.css'
import { Link } from 'react-router-dom'
import Account from '../../images/icons/account.svg'
import Heart from '../../images/icons/heart.svg'
import Cart from '../../images/icons/cart.svg'
import { useSelector } from 'react-redux'
import { FavoriteContext } from '../../context/FavoriteContext'
import Logo from '../ui/Logo/Logo'
import { Squash as Hamburger } from 'hamburger-react'
import Price from '../ui/Price/Price'

const ScrolledHeader = () => {
	const cartTotal = useSelector((state) => state.cart.cartTotalAmount)
	const auth = useSelector((state) => state.auth)
	const [show, setShow] = useState(true)
	const [isOpen, setOpen] = useState(false)

	const {favoriteLength} = useContext(FavoriteContext)
	useEffect(() => {
		const headerHeight = 120

		window.addEventListener('scroll', () => {
			if(window.scrollY >= headerHeight) {
				setShow(false)
			} else {
				setShow(true)
			}
		})
	}, [])

	const data = [
		{id:1, image: Account, alt: 'account icon', link:'/account'},
		{id:2, image: Heart, alt: 'favorite icon', link:'/favorite'},
		{id:3, image: Cart, alt: 'cart icon', link:'/cart'}
	]

  return (
	<header className={styles.header} style={show ? {transform: 'translateY(-100%)'} : {transform: 'translateY(0)'}}>
		<div className={`${styles.container} container`}>
			<div className={styles.burger}>
				<Hamburger rounded toggled={isOpen} toggle={setOpen} />
			</div>
			<Logo/>
			<div className={styles.headerBottomWrapper}>
				<ul className={styles.headerBottomList}>
					{data.map(item => (
						<li key={item.id} className={`${styles.headerBottomItem} ${item.id === 1 && styles.account} ${item.id === 2 && styles.favorite}`}>
							<Link to={item.link}>
								<img src={item.image} alt={item.alt} />
							</Link>
							{item.id === 1 && <div className={auth._id ? `${styles.accountStatus} ${styles.success}` : `${styles.accountStatus} ${styles.faild}`}></div>}
							{item.id === 2 && <div className={styles.favoriteNumber}>
								{favoriteLength}
							</div>}
						</li>
					))}
					<li className={styles.price}>
						<Price price={cartTotal}/>
					</li>
				</ul>
			</div>
		</div>
	</header>
  )
}

export default ScrolledHeader
