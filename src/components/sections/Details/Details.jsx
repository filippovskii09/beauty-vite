import React, { useContext, useEffect } from 'react'
import styles from './Details.module.css';
import { useDispatch } from 'react-redux';
import { addToCart, getTotal } from '../../../slice/cartSlice';
import { AddedItemContext } from '../../../context/AddedItemContext';

const Details = ({item}) => {
	const dispatch = useDispatch()

	const {setDisplay, setAddedItem, setErrorModal, display, errorModal} = useContext(AddedItemContext)

	const handleAddToCard = (item) => {
		if(!item.stock) {
			console.log('no in stock')
			setErrorModal(true)
		} else {
			dispatch(addToCart(item))
			dispatch(getTotal())
			setDisplay(true)
			setAddedItem(item)
		}
	}

	useEffect(() => {
		display || errorModal ? document.documentElement.classList.add('modal-open') : document.documentElement.classList.remove('modal-open')
	}, [setDisplay, display, setErrorModal, errorModal])

  return (
	<section className={styles.detail}>
		<div className={`${styles.container} container`}>
			<div className={styles.left}>
				<div className={styles.image}>
					<img src={item.image} alt={item.name} />
				</div>
			</div>
			<div className={styles.rigth}>
				<h1 className={styles.name}>{item.brand} - {item.name}</h1>
				<p className={styles.prop}>{item.prop}</p>
				<div className={styles.productInfo}>
					<p className={styles.text}>ID товару: {item.id}</p>
					<div className={`${styles.status} ${item.stock ? styles.stockTrue : styles.stockFalse}`}>{item.stock ? 'В наявності' : 'Немає'}</div>
				</div>
				<h2 className={styles.price}>
					460,00 ГРН
				</h2>
				<button disabled={!item.stock} onClick={() => handleAddToCard(item)} className={styles.button}>{item.stock ? 'Додати до кошика' : 'Немає в наявності'}</button>
			</div>
		</div>
	</section>
  )
}

export default Details
