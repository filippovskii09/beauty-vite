import React, { useEffect } from 'react'
import icon1 from '../../images/footer/1.svg'
import icon2 from '../../images/footer/2.svg'
import icon3 from '../../images/footer/3.svg'
import icon4 from '../../images/footer/4.svg'
import icon5 from '../../images/footer/5.svg'
import icon6 from '../../images/footer/6.svg'
import logo from '../../images/icons/logo.svg'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
	
  return (
	<footer className={styles.footer} id='footer'>
		<div className={`${styles.container} container`}>
			<div className={styles.logo}>
				<img src={logo} alt="logo-icon" />
			</div>
			<div className={styles.row}>
				<h5 className={styles.title}>Інформація</h5>
				<ul className={styles.list}>
					<li className={styles.item}><a href="" className={styles.link}>Контакти</a></li>
					<li className={styles.item}><a href="" className={styles.link}>Оплата та доставка</a></li>
					<li className={styles.item}><a href="" className={styles.link}>Зворотній зв’язок</a></li>
					<li className={styles.item}><a href="" className={styles.link}>Про магазин</a></li>
					<li className={styles.item}><a href="" className={styles.link}>Подарункові сертифікати</a></li>
				</ul>
			</div>
			<div className={styles.row}>
				<h5 className={styles.title}>Мій акаунт</h5>
				<ul className={styles.list}>
					<li className={styles.item}><Link to='/account' href="" className={styles.link}>Зареєструватися</Link></li>
					<li className={styles.item}><a href="" className={styles.link}>Моє замовлення</a></li>
					<li className={styles.item}><Link to='/cart' href="" className={styles.link}>Кошик</Link></li>
				</ul>
			</div>
			<div className={styles.row}>
				<h5 className={styles.title}>Ми у соцмережах</h5>
				<div className={styles.socials}>
					<img src={icon1} alt="" />
					<img src={icon2} alt="" />
					<img src={icon3} alt="" />
					<img src={icon4} alt="" />
					<img src={icon5} alt="" />
					<img src={icon6} alt="" />
				</div>
			</div>
		</div>	
	</footer>
  )
}

export default Footer
