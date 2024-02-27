import React from 'react'

const Price = (props) => {
  return (
	<>
		{new Intl.NumberFormat('uk-UA', {
			style: 'currency',
			currency: 'UAH',
		}).format(props.price)}
	</>
  )
}

export default Price
