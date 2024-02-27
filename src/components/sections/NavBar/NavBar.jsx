import React from 'react'
import { NavLink } from 'react-router-dom'
import NavBarLinks from './NavBarLinks'
import styles from './NavBar.module.css'

const NavBar = () => {
	const data = NavBarLinks;

  return (
		<section className={styles.navigation}>
		 <div className='container'>
		 	<nav className={styles.nav}>
				<div className={styles.menu}>
					<ul className={styles.list}>
						{data.map(item => (
							<li key={item.id} className={styles.item}>
								<NavLink
								  to={item.href}
								  className={({ isActive, isPending }) =>
								    isPending ? "pending" : isActive ? "active" : ""
								  }
								>
									{item.title}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			 </nav>
		 </div>
		</section>
  )
}

export default NavBar