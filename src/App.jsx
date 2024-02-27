import React from 'react'
import Header from './components/Header/Header'
import Newsletters from './components/sections/Newsletters/Newsletters'
import { ToastContainer } from 'react-toastify'
import Main from './components/sections/Main/Main'
import InfoBlock from './components/sections/InfoBlock/InfoBlock'
import Promo from './components/sections/Promo/Promo'
import Collections from './components/sections/Collections/Collections'
import Footer from './components/Footer/Footer'
import ScrolledHeader from './components/ScrolledHeader/ScrolledHeader'

import './index.css'
import './reset.css'
import 'react-toastify/dist/ReactToastify.css'
import Modal from './components/ui/Modal/Modal'
import ErrorModal from './components/ui/ErrorModal/ErrorModal'

const App = () => {

  return (
	<>
		<Header/>
		<ScrolledHeader/>
		<main className='page'>
			<Main/>
			<InfoBlock prevButton='shares-prev' nextButton='shares-next' category='Акції' title='Акції' text='Рекомендуємо лише те, чим коримтуємось самі'/>
			<InfoBlock prevButton='news-prev' nextButton='news-next' category='Новинки' title='Новинки' text='Рекомендуємо лише те, чим коримтуємось самі'/>
			<InfoBlock prevButton='best-prev' nextButton='best-next' category='Бестселери' title='Бестселери' text='Рекомендуємо лише те, чим коримтуємось самі'/>
			<Promo />
			<Collections/>
			<Newsletters/>
			<ToastContainer/>
		</main>
		<Modal/>
		<ErrorModal/>
		<Footer/>
	</>
  )
}

export default App
