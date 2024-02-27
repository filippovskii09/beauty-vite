import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import styles from './CartItem.module.css'
import ItemDelete from './itemDelete/ItemDelete';
import ItemCounter from './ItemCounter/ItemCounter';
import ItemPrice from './ItemPrice/ItemPrice';
import PropTypes from 'prop-types'; 

const CartItem = ({ item }) => {
	const dispatch = useDispatch()

	const [count, setCount] = useState(item?.cartQuantity || 0);

	useEffect(() => {
		setCount(item?.cartQuantity || 0)
	}, [item?.cartQuantity])

	return (
	<li className={styles.item}>
	<div className={styles.itemImage}>
		<img src={item.image} alt={item.name}/>
	</div>
	<div className={styles.itemContent}>
		<h3 className={styles.itemTitle}>{item.brand} - {item.name}</h3>
		<p className={styles.itemText}>
			{item.subscribe}
		</p>
		<div className={styles.itemActions}>
			<div className={styles.actionsWrapper}>
				<ItemCounter count={count} setCount={setCount} dispatch={dispatch} item={item}/>
				<ItemPrice price={item.price} count={count}/>
			</div>
			<ItemDelete dispatch={dispatch} item={item}/>
		</div>
	</div>
</li>
  )
}

export default CartItem


CartItem.propTypes = {
	item: PropTypes.object
}