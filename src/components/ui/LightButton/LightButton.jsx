import React from 'react'
import styles from './LightButton.module.css'

const LightButton = (props) => {

  return (
	 <button className={styles.button}>
		{props.text}
	 </button>
  )
}

export default LightButton
