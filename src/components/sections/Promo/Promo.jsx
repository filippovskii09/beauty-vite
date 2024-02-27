import React from 'react'
import LightButton from '../../ui/LightButton/LightButton'
import PromoImage from '../../../images/promo.png'
import styles from './Promo.module.css'

const Promo = () => {
  return (
	 <section className={styles.promo}>
		<div className={`${styles.container} container`}>
			<div className={styles.content}>
				<h4 className={styles.title}>Почніть піклуватися про свою шкіру вже сьогодні!</h4>
				<p className={styles.text}>Отримайте 15% знижки на першу покупку</p>
				<LightButton text='Отримати промокод'/>
			</div>
			<div className={styles.main}>
				<div className={styles.image}>
					<img src={PromoImage} alt='Promo-girl-image'/>
				</div>
				<div className={styles.decor}></div>
			</div>
		</div>
	 </section>
  )
}

export default Promo
