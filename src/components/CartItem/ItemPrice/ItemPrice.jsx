import React from 'react'
import styles from '../CartItem.module.css'
import PropTypes from 'prop-types';

const ItemPrice = ({price, count}) => {
  return (
		<h2 className={styles.price}>
			{new Intl.NumberFormat('uk-UA', {
				style: 'currency',
				currency: 'UAH',
			}).format(price * count)}
		</h2>
  )
}

export default ItemPrice

ItemPrice.propTypes = {
	price: PropTypes.number,
	count: PropTypes.number,
}