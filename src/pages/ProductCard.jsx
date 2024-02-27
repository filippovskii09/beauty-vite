import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Item from '../components/Item/Item';
import Modal from '../components/ui/Modal/Modal';
import ErrorModal from '../components/ui/ErrorModal/ErrorModal';

const ProductCard = () => {

	const { id } = useParams();
	const [item, setItem] = useState([])

	useEffect(() => {
		if (!id) return

		const getProductDetails = async () => {
			try {
				const response = await axios.get(`http://localhost:4100/products/${id}`)

				setItem(response.data)
			} catch(err) {
				console.error(err);
			}
		}

		getProductDetails()
	}, [id])

  return (
	 <>
	 	<Header/>
	 	<main>
			{item.name ?
				<Item item={item}/>
			: 
			<p>Not found</p>
			}
		 </main>
		 <Modal/>
		 <ErrorModal/>
	 </>
  )
}

export default ProductCard
