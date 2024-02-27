import React, { useEffect } from 'react'
import styles from './Catalog.module.css'
import Item from '../Item/Item'
import { useGetAllProductQuery } from '../../slice/productsAPI'
import { useSelector } from 'react-redux'
import { filterDataByBrand } from '../../slice/productSlice'

const Catalog = () => {

	const {data, error, isLoading} = useGetAllProductQuery()

	const filteredData = useSelector((state) => state.products.filteredItems)

  return (
	 <section>
		<div className='container'>
			<ul className={styles.ul} style={error && {color: 'red'}}>
				{isLoading ? (
				<p>Loading...</p>
				) : error ? (
				<p style={{textAlign:'center'}}>Error {error.message}</p>
				) : (
					(filteredData.length > 0 ? filteredData : data)?.map(item => (
						<Item key={item.id} item={item}></Item>
					))
				)}
			</ul>
		</div>
	 </section>
  )
}

export default Catalog
