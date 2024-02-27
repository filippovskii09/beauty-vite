import React, { useContext } from 'react'
import { AddedItemContext } from '../../../context/AddedItemContext'
import styles from './Modal.module.css'
import Price from '../Price/Price'
import { Link, useNavigate } from "react-router-dom";

const Modal = () => {

	const {addedItem, display, setDisplay} = useContext(AddedItemContext)

	const navigate = useNavigate()
	const handleModalClose = (e) => {
		e.target.classList.contains('modal') && setDisplay(false)
	}

	const removeToCart = () => {
		navigate('/cart')
		document.documentElement.classList.remove('modal-open')
		setDisplay(false)
	}
  return (
	<div onClick={(e) => handleModalClose(e)} className={`${styles.modal} modal ${display ? styles.show : styles.hide}`}>
		<div className={styles.modalContent}>
			<h1 className={styles.title}>Додано до кошика</h1>
			{addedItem?.id ? 
				<div className={styles.item}>
					<div className={styles.image}>
						<img src={addedItem.image} alt={addedItem.brand} />
					</div>
					<div className={styles.info}>
						<h3 className={styles.name}>
							{addedItem.name}
						</h3>
						<div className={styles.price}><Price price={addedItem.price}/></div>
						<div className={styles.actions}>
							<button onClick={() => removeToCart()} className={styles.next}>
								Перейти до кошика
							</button>
							<button onClick={() => setDisplay(false)} className={styles.close}>Продовжити покупки</button>
						</div>
					</div>
				</div>
			: 'Oooops...'
			}
		</div>
	</div>
  )
}

export default Modal
