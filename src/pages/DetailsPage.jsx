import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Newsletters from '../components/sections/Newsletters/Newsletters'
import Details from '../components/sections/Details/Details'
import Modal from '../components/ui/Modal/Modal'
import ErrorModal from '../components/ui/ErrorModal/ErrorModal'

const DetailsPage = () => {
	const {id} = useParams()
	const [item, setItem] = useState([])

	useEffect(() => {
		if(!id) return

		const fetchingSinglePage = async () => {
			try {
				const response = await fetch(`http://localhost:4100/products/${id}`)
				const data = await response.json()

				setItem(data)
			} catch(err) {
				console.error(err);
			}
		}

		fetchingSinglePage()
	}, [id])

  return (
	 <>
	 <Header/>
		<main className='page'>
			{item.name ? 
				<Details item={item}/>
				:
				<p>No products by this id</p>
			}
		</main>
		<Newsletters/>
		<Footer/>
		<Modal/>
		<ErrorModal/>
	 </>
  )
}

export default DetailsPage
