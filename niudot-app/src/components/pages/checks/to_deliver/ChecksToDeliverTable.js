// React and Router Stuff
import React from 'react'
// Other Components
import Table from '../../utils/tables'

const ChecksToDeliverTable = ({ togglePopup }) => {
	const headers = ['No. Cheque', 'Fecha', 'Paguese a', 'Moneda', 'Monto']
	const rows = [
		{
			number: 69,
			date: '10/09/2001',
			to: 'Juan Matus',
			currency: 'Cordoba',
			value: 69.69
		},
		{
			number: 128,
			date: '10/09/2001',
			to: 'Juan Matus',
			currency: 'Cordoba',
			value: 69.69
		},
		{
			number: 256,
			date: '10/09/2001',
			to: 'Juan Matus',
			currency: 'Cordoba',
			value: 69.69
		},
		{
			number: 512,
			date: '10/09/2001',
			to: 'Juan Matus',
			currency: 'Cordoba',
			value: 69.69
		},
		{
			number: 69,
			date: '10/09/2001',
			to: 'Juan Matus',
			currency: 'Cordoba',
			value: 69.69
		}
	]

	return (
		<>
			<Table headers={headers} rows={rows} />
		</>
	)
}

export default ChecksToDeliverTable
