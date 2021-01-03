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
			number: 10298,
			date: '30/01/2016',
			to: 'CSU DE NICARAGUA, S.A',
			currency: 'CÓRDOBAS',
			value: 126000.0
		},
		{
			number: 10299,
			date: '30/01/2016',
			to: 'CSU DE NICARAGUA, S.A',
			currency: 'CÓRDOBAS',
			value: 27000.0
		},
		{
			number: 10300,
			date: '30/01/2016',
			to: 'SILVIA CAROLINA HERNANDEZ PEREZ',
			currency: 'CÓRDOBAS',
			value: 4000.0
		},
		{
			number: 10301,
			date: '29/01/2016',
			to: 'COGUMESA',
			currency: 'CÓRDOBAS',
			value: 46033.54
		},
		{
			number: 10302,
			date: '29/01/2016',
			to: 'ANA JULIA MENDIETA SEVILLA',
			currency: 'CÓRDOBAS',
			value: 6694.84
		},
		{
			number: 10300,
			date: '30/01/2016',
			to: 'SILVIA CAROLINA HERNANDEZ PEREZ',
			currency: 'CÓRDOBAS',
			value: 4000.0
		},
		{
			number: 10301,
			date: '29/01/2016',
			to: 'COGUMESA',
			currency: 'CÓRDOBAS',
			value: 46033.54
		},
		{
			number: 10302,
			date: '29/01/2016',
			to: 'ANA JULIA MENDIETA SEVILLA',
			currency: 'CÓRDOBAS',
			value: 6694.84
		},
		{
			number: 10298,
			date: '30/01/2016',
			to: 'CSU DE NICARAGUA, S.A',
			currency: 'CÓRDOBAS',
			value: 126000.0
		},
		{
			number: 10299,
			date: '30/01/2016',
			to: 'CSU DE NICARAGUA, S.A',
			currency: 'CÓRDOBAS',
			value: 27000.0
		},
		{
			number: 10298,
			date: '30/01/2016',
			to: 'CSU DE NICARAGUA, S.A',
			currency: 'CÓRDOBAS',
			value: 126000.0
		},
		{
			number: 10299,
			date: '30/01/2016',
			to: 'CSU DE NICARAGUA, S.A',
			currency: 'CÓRDOBAS',
			value: 27000.0
		},
		{
			number: 10300,
			date: '30/01/2016',
			to: 'SILVIA CAROLINA HERNANDEZ PEREZ',
			currency: 'CÓRDOBAS',
			value: 4000.0
		},
		{
			number: 10301,
			date: '29/01/2016',
			to: 'COGUMESA',
			currency: 'CÓRDOBAS',
			value: 46033.54
		},
		{
			number: 10302,
			date: '29/01/2016',
			to: 'ANA JULIA MENDIETA SEVILLA',
			currency: 'CÓRDOBAS',
			value: 6694.84
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
