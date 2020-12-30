// React and Router Stuff
import React from 'react'
// Other Components
import RetractileForm from '../retractile_sections'
import Commercial from './Commercial'
import Banking from './Banking'
import Personal from './Personal'

const Referencias = () => {
	return (
		<RetractileForm formTitle='Referencias'>
			<Commercial />
			<Banking />
			<Personal title='Personales 1' />
			<Personal title='Personales 2' />
		</RetractileForm>
	)
}

export default Referencias
