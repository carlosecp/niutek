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
			number: 20686,
			date: '06/10/2020',
			to: 'OSCAR DANILO MEDINA ORTEGA',
			currency: 'CÓRDOBAS',
			value: 4084.95
		},
		{
			number: 20687,
			date: '06/10/2020',
			to: 'ALVIA COMERCIAL, S.A',
			currency: 'CÓRDOBAS',
			value: 3683.5
		},
		{
			number: 20688,
			date: '06/10/2020',
			to: 'DIRECCIÓN GENERAL DE INGRESOS',
			currency: 'CÓRDOBAS',
			value: 89649.38
		},
		{
			number: 20690,
			date: '06/10/2020',
			to: 'SILVIA CAROLINA HERNANDEZ PEREZ',
			currency: 'CÓRDOBAS',
			value: 11711.69
		},
		{
			number: 20691,
			date: '06/10/2020',
			to: 'ALCALDIA MUNICIPAL DE NINDIRI',
			currency: 'CÓRDOBAS',
			value: 1600.0
		},
		{
			number: 20691,
			date: '06/10/2020',
			to: 'ALCALDIA MUNICIPAL DE NINDIRI',
			currency: 'CÓRDOBAS',
			value: 1600.0
		},
		{
			number: 20690,
			date: '06/10/2020',
			to: 'SILVIA CAROLINA HERNANDEZ PEREZ',
			currency: 'CÓRDOBAS',
			value: 11711.69
		},
		{
			number: 20688,
			date: '06/10/2020',
			to: 'DIRECCIÓN GENERAL DE INGRESOS',
			currency: 'CÓRDOBAS',
			value: 89649.38
		},
		{
			number: 20687,
			date: '06/10/2020',
			to: 'ALVIA COMERCIAL, S.A',
			currency: 'CÓRDOBAS',
			value: 3683.5
		},
		{
			number: 20686,
			date: '06/10/2020',
			to: 'OSCAR DANILO MEDINA ORTEGA',
			currency: 'CÓRDOBAS',
			value: 4084.95
		},
		{
			number: 20686,
			date: '06/10/2020',
			to: 'OSCAR DANILO MEDINA ORTEGA',
			currency: 'CÓRDOBAS',
			value: 4084.95
		},
		{
			number: 20687,
			date: '06/10/2020',
			to: 'ALVIA COMERCIAL, S.A',
			currency: 'CÓRDOBAS',
			value: 3683.5
		},
		{
			number: 20688,
			date: '06/10/2020',
			to: 'DIRECCIÓN GENERAL DE INGRESOS',
			currency: 'CÓRDOBAS',
			value: 89649.38
		},
		{
			number: 20690,
			date: '06/10/2020',
			to: 'SILVIA CAROLINA HERNANDEZ PEREZ',
			currency: 'CÓRDOBAS',
			value: 11711.69
		},
		{
			number: 20691,
			date: '06/10/2020',
			to: 'ALCALDIA MUNICIPAL DE NINDIRI',
			currency: 'CÓRDOBAS',
			value: 1600.0
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
