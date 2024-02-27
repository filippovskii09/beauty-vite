import React, { useContext } from 'react'
import { AddedItemContext } from '../../../context/AddedItemContext'
import styles from '../Modal/Modal.module.css'

const ErrorModal = () => {

	const {errorModal, setErrorModal} = useContext(AddedItemContext)

	const handleModalClose = (e) => {
		e.target.classList.contains('modal') && setErrorModal(false)
	}

  return (
	<div onClick={e => handleModalClose(e)} className={`${styles.modal} modal ${errorModal ? styles.show : styles.hide}`}>
		<div className={styles.modalContent}>
			<h1 className={styles.title}>Немає в наявності</h1>
		</div>
	</div>
  )
}

export default ErrorModal