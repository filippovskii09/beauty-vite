import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../CartItem/CartItem';
import styles from './Cart.module.css'
import { clearCart, getTotal } from '../../slice/cartSlice';
import { useNavigate } from 'react-router-dom';
import Price from '../ui/Price/Price'

const Cart = () => {
	const cartItems = useSelector((state) => state.cart.cartItems);
	const cartTotal = useSelector((state) => state.cart.cartTotalAmount)
	const cart = useSelector((state) => state.cart)
	const auth = useSelector((state) => state.auth)

	const dispatch = useDispatch()
	const navigate = useNavigate()

	useEffect(() => {
		dispatch(getTotal())
	}, [cart, dispatch])

	const handleClearCart = () => {
		if (auth._id) {
			navigate('/ordered')
			dispatch(clearCart())
		} else {
			navigate('/order')
		}
	}

  return (
	 <section className={styles.cart}>
		<div className='container'>
			<h2 className={styles.title}>Кошик</h2>
			{cartItems.length !== 0 ? 
				<div className={styles.wrapper}>
					<ul className={styles.list}>
						{cartItems.map(item => (
							<CartItem key={item.id} item={item}/>
						))}
					</ul>
					<div className={styles.info}>
						<h3 className={styles.infoTitle}>
							<span>Загальна сума</span>
							<span>
								<Price price={cartTotal}/>
							</span>
						</h3>
						<button className={styles.infoButton} onClick={handleClearCart}>Оформити замовлення</button>
					</div>
				</div>
				: <p className={styles.errorText}>No products in cart</p>
				}
		</div>
	 </section>
  )
}

export default Cart
