import React from 'react'
import styles from '../CartItem.module.css'
import { addToCart, decreaseQuantity } from '../../../slice/cartSlice'
import PropTypes from 'prop-types';

const ItemCounter = ({ dispatch, item}) => {
	
	const handleDeleteItem = () => {
		dispatch(decreaseQuantity(item))
	}
	const handleIncreaseCart = (item) => {
		dispatch(addToCart(item))
	}
  return (
	<div className={styles.counter}>
		<button onClick={handleDeleteItem} className={styles.counterButton}>-</button>
		<p className={styles.counterCount}>{item.cartQuantity}</p>
		<button onClick={() => handleIncreaseCart(item)} className={styles.counterButton}>+</button>
	</div>
  )
}

export default ItemCounter

ItemCounter.propTypes = {
	dispatch: PropTypes.func,
	item: PropTypes.object
}