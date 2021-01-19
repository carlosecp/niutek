// React and Router Stuff
import React from 'react'
// Other Components
import RetractileForm from '../retractile_sections'
import Commercial from './Commercial'
import Banking from './Banking'
import Personal from './Personal'

const Referencias = ({ values }) => {
	return (
		<RetractileForm formTitle='Referencias'>
			<Commercial values={values} />
			<Banking values={values} />
			<Personal values={values} />
		</RetractileForm>
	)
}

export default Referencias
