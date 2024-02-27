import React from 'react'
import Header from '../components/Header/Header'
import Catalog from '../components/Catalog/Catalog'
import Modal from '../components/ui/Modal/Modal'
import ErrorModal from '../components/ui/ErrorModal/ErrorModal'
import Filter from '../components/Filter/Filter'
import styles from './CatalogPage.module.css'

const CatalogPage = () => {
  return (
	<>	
		<Header/>
		<main className={`${styles.main} container`}>
			<Filter/>
			<Catalog/>
		</main>
		<Modal/>
		<ErrorModal/>
	</>
  )
}

export default CatalogPage
