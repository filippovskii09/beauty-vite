import React from 'react'
import styles from './OrderTabsLogin.module.css'
import OrderButton from '../../OrderButton/OrderButton'

const OrderTabsLogin = () => {
  return (
	 <form className={styles.form}>
		<div className={styles.row}>
			<div className={styles.column}>
				<label className={styles.label} htmlFor='email'>E-mail</label>
				<input className={styles.input} id='email' type='email' placeholder='E-mail'/>
			</div>
			<div className={styles.column}>
				<label className={styles.label} htmlFor='pass'>Пароль</label>
				<input className={styles.input} id='pass' type='password' placeholder='Пароль'/>
			</div>
		</div>
		<OrderButton text={'Увійти'}/>
	 </form>
  )
}

export default OrderTabsLogin
