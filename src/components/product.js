import React from 'react'
import shadebox from './shadebox.js'

const product = ({ item }) => {
	return (
		<div>
			<h2>{item.brand}</h2>
			<h3>{item.product}</h3>
			<shadebox shade={item.hex} />
		</div>
	)
}

export default product
