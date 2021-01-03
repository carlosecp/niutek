// React and Router Stuff
import React, { useMemo } from 'react'
import { FaEdit } from 'react-icons/fa'
// Extra libraries
// Other Components
import Table from '../../utils/tables'

const ChecksTable = ({ togglePopup }) => {
	const columns = useMemo(() => [
		{ Header: 'No. Cheque', accessor: 'number' },
		{ Header: 'Fecha', accessor: 'date' },
		{ Header: 'Paguese a', accessor: 'to' },
		{ Header: 'Moneda', accessor: 'currency' },
		{ Header: 'Monto', accessor: 'value' },
		{ Header: '', accessor: 'edit' }
	])

	const data = [
		{
			number: 20688,
			date: '06/10/2020',
			to: 'ANA JULIA MENDIETA SEVILLA',
			currency: 'CÓRDOBAS',
			value: 7800.0
		},
		{
			number: 20689,
			date: '06/10/2020',
			to: 'ANA JULIA MENDIETE SEVILLA',
			currency: 'CÓRDOBAS',
			value: 6280.0
		},
		{
			number: 20690,
			date: '06/10/200',
			to: 'SILVIA CAROLINA HERNANDEZ PEREZ',
			currency: 'CÓRDOBAS',
			value: 5703.47
		}
	]

	const dataEditBtn = data.map((rowData) => {
		return {
			...rowData,
			edit: (
				<FaEdit
					className='text-blue-700 fill-current hover:underline cursor-pointer'
					onClick={togglePopup}
				/>
			)
		}
	})

	return (
		<Table columns={columns} data={dataEditBtn} togglePopup={togglePopup} />
	)
}

export default ChecksTable
