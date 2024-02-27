import React from 'react'
import styles from './ItemButton.module.css'
import { useDispatch } from 'react-redux';
import { addToCart, getTotal } from '../../../slice/cartSlice';

const ItemButton = ({ item, visible }) => {
	const dispatch = useDispatch()

	const handleAddToCard = (item) => {
		dispatch(addToCart(item))
		dispatch(getTotal())
	}

  return (
	<button 
		disabled={!item.stock}
	 	onClick={() => handleAddToCard(item)} 
		style={{opacity: visible ? 0 : 1}} 
		className={styles.button}>
		{item.stock ? 'Додати до кошика' : 'Немає в наяності'}
	</button>
  )
}

export default ItemButton
