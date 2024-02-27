import React from 'react'
import LangSelect from '../Header/LangSelect/LangSelect'
import styles from './TopNavBar.module.css'

const TopNavBar = () => {
  return (
		<div className={styles.headerTop}>
			<p className={styles.headerItem}>Безкоштовна доставка по Україні!</p>
			<div className={styles.headerTopWrapper}>
				<ul className={styles.headerTopList}>
					<li className={styles.headerItem}>
						<a href=''  id="style-2" data-replace="Акції"><span>Акції</span></a>
					</li>
					<li className={styles.headerItem}>
						<a  href="/" id="style-2" data-replace="Новинки"><span>Новинки</span></a>
					</li>
					<li className={styles.headerItem}> 
						<a href="/" id="style-2" data-replace="Бестселери"><span>Бестселери</span></a>
					</li>
					<li className={styles.headerItem}>
						<a href="/" id="style-2" data-replace="Добірки"><span>Добірки</span></a>
					</li>
				</ul>
				<LangSelect/>
			</div>
		</div>
  )
}

export default TopNavBar
