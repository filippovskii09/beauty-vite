import React from 'react'
import styles from './Main.module.css'
import Button from '../../ui/Button/Button'
import MainImage from '../../../images/back-main.png'
import MainMobileImage from '../../../images/mobile-main.png'

const Main = () => {
  return (
		<section className={styles.main}>
			<div className={`${styles.container} container`}>
				<img className={`${styles.image} ${styles.desktopImage}`} src={MainImage} alt='main-background-image' />
				<img className={`${styles.image} ${styles.mobileImage}`} src={MainMobileImage} alt='main-background-image' />
				<h1 className={styles.title}>Б’юті-рутина більше не проблема!</h1>
				<p className={styles.text}>Скористайся безкоштовною консультацією косметолога</p>
				<Button title='Детальніше'/>
			</div>
		</section>
  )
}

export default Main
