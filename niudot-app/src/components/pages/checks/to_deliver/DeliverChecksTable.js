// React and Router Stuff
import React, { useMemo, useRef, useState, useCallback } from 'react'
// Extra libraries
import { v4 as uuidv4 } from 'uuid'
// Other Components
import Table from '../../utils/tables'

const ChecksTable = ({ loading, setLoading, togglePopup }) => {
	const columns = useMemo(() => [
		{ Header: 'No. Cheque', accessor: 'number' },
		{ Header: 'Fecha', accessor: 'date' },
		{ Header: 'Paguese a', accessor: 'to' },
		{ Header: 'Moneda', accessor: 'currency' },
		{ Header: 'Monto', accessor: 'value' }
	])

	const serverData = [
		{
			id: uuidv4(),
			number: 20686,
			date: '06/10/2020',
			to: 'OSCAR DANILO MEDINA ORTEGA',
			currency: 'CÓRDOBAS',
			value: 4084.95
		},
		{
			id: uuidv4(),
			number: 20687,
			date: '06/10/2020',
			to: 'ALVIA COMERCIAL, S.A',
			currency: 'CÓRDOBAS',
			value: 3683.5
		},
		{
			id: uuidv4(),
			number: 20688,
			date: '06/10/2020',
			to: 'DIRECCIÓN GENERAL DE INGRESOS',
			currency: 'CÓRDOBAS',
			value: 89649.38
		},
		{
			id: uuidv4(),
			number: 20690,
			date: '06/10/2020',
			to: 'SILVIA CAROLINA HERNANDEZ PEREZ',
			currency: 'CÓRDOBAS',
			value: 11711.69
		},
		{
			id: uuidv4(),
			number: 20691,
			date: '06/10/2020',
			to: 'ALCALDIA MUNICIPAL DE NINDIRI',
			currency: 'CÓRDOBAS',
			value: 1600.0
		},
		{
			id: uuidv4(),
			number: 20691,
			date: '06/10/2020',
			to: 'ALCALDIA MUNICIPAL DE NINDIRI',
			currency: 'CÓRDOBAS',
			value: 1600.0
		},
		{
			id: uuidv4(),
			number: 20690,
			date: '06/10/2020',
			to: 'SILVIA CAROLINA HERNANDEZ PEREZ',
			currency: 'CÓRDOBAS',
			value: 11711.69
		},
		{
			id: uuidv4(),
			number: 20688,
			date: '06/10/2020',
			to: 'DIRECCIÓN GENERAL DE INGRESOS',
			currency: 'CÓRDOBAS',
			value: 89649.38
		},
		{
			id: uuidv4(),
			number: 20687,
			date: '06/10/2020',
			to: 'ALVIA COMERCIAL, S.A',
			currency: 'CÓRDOBAS',
			value: 3683.5
		},
		{
			id: uuidv4(),
			number: 20687,
			number: 20686,
			date: '06/10/2020',
			to: 'OSCAR DANILO MEDINA ORTEGA',
			currency: 'CÓRDOBAS',
			value: 4084.95
		},
		{
			id: uuidv4(),
			number: 20686,
			date: '06/10/2020',
			to: 'OSCAR DANILO MEDINA ORTEGA',
			currency: 'CÓRDOBAS',
			value: 4084.95
		},
		{
			id: uuidv4(),
			number: 20687,
			date: '06/10/2020',
			to: 'ALVIA COMERCIAL, S.A',
			currency: 'CÓRDOBAS',
			value: 3683.5
		},
		{
			id: uuidv4(),
			number: 20688,
			date: '06/10/2020',
			to: 'DIRECCIÓN GENERAL DE INGRESOS',
			currency: 'CÓRDOBAS',
			value: 89649.38
		},
		{
			id: uuidv4(),
			number: 20690,
			date: '06/10/2020',
			to: 'SILVIA CAROLINA HERNANDEZ PEREZ',
			currency: 'CÓRDOBAS',
			value: 11711.69
		},
		{
			id: uuidv4(),
			number: 20691,
			date: '06/10/2020',
			to: 'ALCALDIA MUNICIPAL DE NINDIRI',
			currency: 'CÓRDOBAS',
			value: 1600.0
		}
	]

	const [data, setData] = useState([])
	const [pageCount, setPageCount] = useState(0)
	const fetchIdRef = useRef(0)

	const fetchData = useCallback(({ pageSize, pageIndex }) => {
		// Esta funcion se va correr cada vez que cambiemos de pagina, para que asi no tengamos que traer la informacion de todas las paginas de un solo.

		const fetchId = ++fetchIdRef.current
		setLoading(true)

		setTimeout(() => {
			if (fetchId === fetchIdRef.current) {
				const startRow = pageSize * pageIndex
				const endRow = startRow + pageSize
				// Decimos que la cantidad de datos que queremos mostrar pues es solamente la cantidad de final que queremos tener (desde start hasta end)
				setData(serverData.slice(startRow, endRow))

				setPageCount(Math.ceil(serverData.length / pageSize))
				setLoading(false)
			}
		}, 1000)
	}, [])

	return (
		<Table
			columns={columns}
			data={data}
			fetchData={fetchData}
			loading={loading}
			pageCount={pageCount}
			togglePopup={togglePopup}
			showEdit={true}
		/>
	)
}

export default ChecksTable
