// React and Router Stuff
import React from 'react'
// Other Components
import Table from '../../utils/tables'

const PurchaseTable = ({ togglePopup }) => {
	const headers = [
		'Artículo',
		'Descripción',
		'Presentación',
		'Cantidad',
		'Monto',
		'Total'
	]
	const rows = [
		{
			item: 'Coca Cola',
			description: '10/09/2001',
			presentation: 'Juan Matus',
			quantity: 20,
			value: 34,
			total: 680
		},
		{
			item: 'Coca Cola',
			description: '10/09/2001',
			presentation: 'Juan Matus',
			quantity: 20,
			value: 34,
			total: 680
		},
		{
			item: 'Coca Cola',
			description: '10/09/2001',
			presentation: 'Juan Matus',
			quantity: 20,
			value: 34,
			total: 680
		},
		{
			item: 'Coca Cola',
			description: '10/09/2001',
			presentation: 'Juan Matus',
			quantity: 20,
			value: 34,
			total: 680
		}
	]

	return (
		<>
			<Table headers={headers} rows={rows} />
		</>
	)
}

export default PurchaseTable
