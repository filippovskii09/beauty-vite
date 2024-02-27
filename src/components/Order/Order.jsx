import React from 'react'
import styles from './Order.module.css'
import { useSelector } from 'react-redux'
import OrderTabs from './OrderTabs/OrderTabs'
import Price from '../ui/Price/Price'

const Order = () => {
	const cartTotal = useSelector((state) => state.cart.cartTotalAmount)
	
  return (
	 <section className={styles.order}>
		<div className='container'>
			<h2 className={styles.title}>Оформлення замовлення</h2>
			<div className={styles.content}>
				<div className={styles.main}>
					<OrderTabs/>
				</div>
				<div className={styles.info}>
					<div className={styles.infoTop}>
						<div className={styles.promo}>Промокод</div>
						<div className={styles.priceBlock}>
							<p className={styles.price}>
								<span>Сума замовлення</span>
								<span>				
									<Price price={cartTotal}/>
								</span>
							</p>
							<p className={styles.price}>
								<span>Вартість доставки</span>
								<span>				
									<Price price={100}/>
								</span>
							</p>
						</div>
					</div>
					<h3 className={styles.infoTotal}>
						<span>Всього</span> 
						<span>				
							<Price price={cartTotal + 100}/>
						</span> 
					</h3>
				</div>
			</div>
		</div>
	 </section>
  )
}

export default Order
