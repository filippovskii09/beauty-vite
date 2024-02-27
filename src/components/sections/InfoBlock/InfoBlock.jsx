import React from 'react'
import { useGetAllProductQuery } from '../../../slice/productsAPI'
import SwiperItem from '../../ui/SwiperItem/SwiperItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode} from 'swiper/modules';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import LightButton from '../../ui/LightButton/LightButton';

import styles from './InfoBlock.module.css';
import 'swiper/css';
import 'swiper/css/navigation';

const InfoBlock = (props) => {
	const {data, error, isLoading} = useGetAllProductQuery()

	const filtredData = data?.filter(item => item.category === props.category)

  return (	
	 <section className={styles.propose}>
		<div className={`${styles.container} container`}>
			<div className={styles.info}>
				<h4 className={styles.title}>{props.title}</h4>
				<p className={styles.text}>{props.text}</p>
				<LightButton text='Дивитись'/>
			</div>
			<div className={styles.swiper}>
				<div className={styles.swiperButtons}>
					<div className={`${props.prevButton} swiper-button-prev`}><FaArrowLeft /></div>
					<div className={`${props.nextButton} swiper-button-next`}><FaArrowRight /></div>
				</div>
				{isLoading ? (
				<p>Loading...</p>
				) : error ? (
				<p style={{textAlign:'center'}}>Error: {error.message}</p>
				) : (
					<Swiper
						slidesPerView={3}
						spaceBetween={0}
						freeMode={true}
						modules={[Navigation, FreeMode]}
						navigation={{
							nextEl: `.${props.nextButton}`, 
							prevEl: `.${props.prevButton}`, 
						}}	  
						className="mySwiper"
					>
					{filtredData?.map(item => (
						<SwiperSlide key={item.id}><SwiperItem item={item}/></SwiperSlide>
					))}
				 </Swiper>
				)}
			</div>
		</div>
	 </section>
  )
}

export default InfoBlock
