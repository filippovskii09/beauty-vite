import React from 'react'
import DeleteIcon from '../../../images/icons/itemDelete/icon.svg'
import styles from '../CartItem.module.css'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../../slice/cartSlice'
import PropTypes from 'prop-types';

const ItemDelete = ({item}) => {

	const dispatch = useDispatch()

	const handleDeleteItem = (item) => {
		dispatch(removeFromCart(item))
	}

  return (
	<button onClick={() => handleDeleteItem(item)}  className={styles.itemDelete}>
		<img src={DeleteIcon} alt="" />
	</button>
  )
}

export default ItemDelete


ItemDelete.propTypes = {
	item: PropTypes.object
}