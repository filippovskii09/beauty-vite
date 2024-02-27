import React from 'react'
import styles from './OrderButton.module.css'

const OrderButton = ({ text }) => {

	return (
	<button type='submit' className={styles.button}>
		{text}
	</button>
  )
}

export default OrderButton
