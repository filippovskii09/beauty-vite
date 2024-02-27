import React from 'react'
import image1 from '../../../images/colections/1.png'
import image2 from '../../../images/colections/2.png'
import image3 from '../../../images/colections/3.png'
import image4 from '../../../images/colections/4.png'
import styles from './Collections.module.css'

const Collections = () => {

	const data = [
		{id:1, image: image1, name: 'Почніть піклуватися про свою шкіру вже сьогодні!' },
		{id:2, image: image2, name: 'Відновлюємо локони: 5 сироваток для кінчиків волосся' },
		{id:3, image: image3, name: 'Двоетапне очищення обличчя: шлях здорової та сяючої шкіри' },
		{id:4, image: image4, name: 'Cosrx Aloe SPF 50 чи Beauty of Joseon SPF?' }
	]

  return (
	 <section className={styles.collections}>
		<div className={`${styles.container} container`}>
			<h3 className={styles.title}>Добірки</h3>
			<div className={styles.row}>
				{data.map(item => (
					<div key={item.id} className={styles.column}>
						<div className={styles.image}>
							<img src={item.image} alt={item.name} />
						</div>
						<p className={styles.text}>{item.name}</p>
					</div>
				))}
			</div>
		</div>
	 </section>
  )
}

export default Collections
