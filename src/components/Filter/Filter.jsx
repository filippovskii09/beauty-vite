import React, { useCallback, useEffect, useState } from 'react'
import { useGetAllProductQuery } from '../../slice/productsAPI'
import styles from './Filter.module.css'
import { useDispatch } from 'react-redux'
import { filterDataByBrand } from '../../slice/productSlice'

const Filter = () => {
	const {data, loading} = useGetAllProductQuery()
	const [brand, setBrand] = useState([])
	const [brandCounts, setBrandCounts] = useState({});

	const dispatch = useDispatch()
	
	useEffect(() => {
		if(!loading) {
			const allBrands = [...new Set(data?.map(item => item.brand))]
			setBrand(allBrands)

			const brandCountsObj = {}
			data?.forEach(item => {
				brandCountsObj[item.brand] = (brandCountsObj[item.brand] || 0) + 1
			})
			setBrandCounts(brandCountsObj)
		}
	}, [loading, data])


	const handleGetCheckboxValue = useCallback((e) => {
		dispatch(filterDataByBrand(e.target.value))
	})

	const resetAllFilter = () => {
		setBrand([])
	}
  return (
	<aside className={styles.aside}>
		<form className={styles.form}>
			<ul className={styles.list}>
				<h4 className={styles.title}>Бренд</h4>
				{brand.map((brandFilter, index) => (
					<li className={styles.item} key={index}>
						<input value={brandFilter} onChange={(e) => handleGetCheckboxValue(e)} type="radio" name='brand' id={brandFilter} />
						<label htmlFor={brandFilter}>{brandFilter}</label>
						<p className={styles.count}>({brandCounts[brandFilter]})</p>
					</li>
				))}
			</ul>
			<button className={styles.button} onClick={() => resetAllFilter()}>Reset all</button>
		</form>
	</aside>
  )
}

export default Filter
