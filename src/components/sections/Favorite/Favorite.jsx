import React from 'react'
import { useSelector } from 'react-redux'
import Item from '../../Item/Item'
import styles from './Favorite.module.css'

const Favorite = () => {

	const favoriteList = useSelector(state => state.favorite.favoriteList)

  return (
	<section className='favorite'>
		<div className='container'>
			{favoriteList.length === 0 ? (
				<p className={styles.error}>No items added</p>
			) : (
				<ul className={styles.list}>
					{favoriteList.map(item => (
						<Item key={item.id} item={item}/>
					))}
				</ul>
			)}
		</div>
	</section>
  )
}

export default Favorite
