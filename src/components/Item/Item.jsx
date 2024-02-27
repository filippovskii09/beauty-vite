import React, { useContext, useState } from 'react'
import ItemButton from '../ui/ItemButton/ItemButton'
import styles from './Item.module.css'
import ItemLike from '../ui/ItemLike/ItemLike'
import { Link } from "react-router-dom";

const Item = ({ item }) => {
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
			<h4 className={styles.title}>{item.brand}</h4>
			<Link to={`/products/${item.id}`} className={styles.name}>{item.name}</Link>
			<p className={styles.price}>
				{new Intl.NumberFormat('uk-UA', {
					style: 'currency',
					currency: 'UAH',
				}).format(item.price)}
			</p>
			<ItemButton visible={visible} item={item}/>
			<ItemLike item={item} />
		</li>
  )
}

export default Item
