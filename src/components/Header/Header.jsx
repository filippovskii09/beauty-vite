import React, { useContext, useEffect, useState } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import Account from '../../images/icons/account.svg'
import Heart from '../../images/icons/heart.svg'
import Cart from '../../images/icons/cart.svg'
import { useSelector } from 'react-redux'
import NavBar from '../sections/NavBar/NavBar'
import { FavoriteContext } from '../../context/FavoriteContext'
import Logo from '../ui/Logo/Logo'
import TopNavBar from '../TopNavBar/TopNavBar'
import Price from '../ui/Price/Price'
import { Squash as Hamburger } from 'hamburger-react'

const Header = () => {
	const cartTotal = useSelector((state) => state.cart.cartTotalAmount)
	const auth = useSelector((state) => state.auth)
	const [isOpen, setOpen] = useState(false)

	const { favoriteLength } = useContext(FavoriteContext)

	const data = [
		{id:1, image: Account, alt: 'account icon', link:'/account'},
		{id:2, image: Heart, alt: 'favorite icon', link:'/favorite'},
		{id:3, image: Cart, alt: 'cart icon', link:'/cart'}
	]

  return (
	<>
		<header className={styles.header}>
			<div className={styles.headerContainer}>
				<TopNavBar/>
				<div className={styles.headerLine}></div>
				<div className={styles.headerBottom}>
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
			</div>
		</header>
		<NavBar/>
	</>
  )
}

export default Header
