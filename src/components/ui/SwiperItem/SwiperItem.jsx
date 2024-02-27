import React, { useState } from 'react'
import styles from './SwiperItem.module.css'
import ItemButton from '../ItemButton/ItemButton'
import { Link } from "react-router-dom";
import ItemLike from '../ItemLike/ItemLike'

const SwiperItem = ({item}) => {
	const [visible, setVisible] = useState(true)

	const handleShowButton = () => {
		setVisible(false)
	}

	const handleHideButton = () => {
		setVisible(true)
	}

  return (
	<li onMouseMove={handleShowButton} onMouseLeave={handleHideButton} className={styles.item} key={item.id}>
		<div className={styles.image}>
			<img src={item.image} alt={item.name}/>
		</div>
		<h2 className={styles.title}>{item.brand}</h2>
		<Link to={`/products/${item.id}`} className={styles.name}>{item.name}</Link>
		<p className={styles.price}>
			{new Intl.NumberFormat('uk-UA', {
				style: 'currency',
				currency: 'UAH',
			}).format(item.price)}
		</p>
		<ItemButton visible={visible} item={item}/>
		<ItemLike item={item}/>
	</li>
  )
}

export default SwiperItem
