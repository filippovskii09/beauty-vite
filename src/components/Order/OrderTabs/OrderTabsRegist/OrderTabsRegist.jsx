import React, { useEffect, useState } from 'react'
import styles from './OrderTabsRegist.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../../../slice/authSlice'
import { useNavigate } from 'react-router-dom'
import { clearCart } from '../../../../slice/cartSlice'

const OrderTabsRegist = () => {
	const [user, setUser] = useState({
		name: "",	
		email: "",
		password: ""
	})

	const navigate = useNavigate()
	const dispatch = useDispatch()
	const auth = useSelector((state) => state.auth)

	useEffect(() => {
		if(auth._id) {
			navigate("/ordered")
			dispatch(clearCart())
		}
	}, [auth._id, navigate, dispatch])

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(registerUser(user))
	}

  return (
	 <form onSubmit={handleSubmit} className={styles.form}>
	 	<div className={styles.row}>
			<div className={styles.column}>
				<label className={styles.label} htmlFor='name'>Ваше ім’я</label>
				<input 
					className={styles.input} 
					onChange={(e) => setUser({...user, name: e.target.value})}
					id='name' 
					type='text' 
					placeholder='Введіть ваше ім’я'
				/>
			</div>
			<div className={styles.column}>
				<label className={styles.label} htmlFor='email'>E-mail</label>
				<input 
					className={styles.input} 
					onChange={(e) => setUser({...user, email: e.target.value})} 
					id='email' 
					type='email' 
					placeholder='E-mail'
				/>
			</div>
		</div>
		<div className={styles.row}>
			<div className={styles.column}>
				<label className={styles.label} htmlFor='pass'>Пароль</label>
				<input 
					className={styles.input}
					onChange={(e) => setUser({...user, password: e.target.value})} 
					id='pass' 
					type='password' 
					placeholder='Пароль'
				/>
			</div>
		</div>
		{auth.registerStatus === "pending"
		? ( <p style={{textAlign: 'center'}}>Loading...</p> )
		: auth.registerStatus === "rejected"
		? ( <p style={{textAlign: 'center', color: 'red'}}>Failed connection</p> )
		: ( <button className={styles.button}>{auth._id ? 'Далі' : 'Зареєструватися'}</button> )}
		<p className={styles.error}>{auth.registerError}</p>
	 </form>
  )
}

export default React.memo(OrderTabsRegist)
