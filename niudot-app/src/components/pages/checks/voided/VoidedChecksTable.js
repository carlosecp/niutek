// React and Router Stuff
import React, { useMemo, useRef, useState, useCallback } from 'react'
// Other Components
import Table from '../../utils/tables'

const VoidedChecksTable = ({ togglePopup }) => {
	const columns = useMemo(() => [
		{ Header: 'No. Cheque', accessor: 'number' },
		{ Header: 'Fecha', accessor: 'date' },
		{ Header: 'Paguese a', accessor: 'to' },
		{ Header: 'Moneda', accessor: 'currency' },
		{ Header: 'Monto', accessor: 'value' }
	])

	const serverData = [
		{
			id: 1,
			number: 20683,
			date: '05/10/2020',
			to: 'DANFFER SEBASTIAN SEQUEIRA DUARTE',
			currency: 'CÓRDOBAS',
			value: 7499.47
		},
		{
			id: 2,
			number: 20673,
			date: '05/10/2020',
			to: 'ANA JULIA MENDIETA SEVILLA',
			currency: 'CÓRDOBAS',
			value: 12004.46
		},
		{
			id: 3,
			number: 15,
			date: '05/10/2020',
			to: 'CHEQUE ANULADO',
			currency: 'DÓLARES',
			value: 562.74
		},
		{
			id: 4,
			number: 20606,
			date: '25/09/2020',
			to: 'PLASTICOS MODERNOS, S.A',
			currency: 'CÓRDOBAS',
			value: 25489.8
		},
		{
			id: 5,
			number: 20537,
			date: '21/09/2020',
			to: 'ANA JULIA MENDIETA SEVILLA',
			currency: 'CÓRDOBAS',
			value: 2116.8
		},
		{
			id: 6,
			number: 15,
			date: '05/10/2020',
			to: 'CHEQUE ANULADO',
			currency: 'DÓLARES',
			value: 562.74
		},
		{
			id: 7,
			number: 20606,
			date: '25/09/2020',
			to: 'PLASTICOS MODERNOS, S.A',
			currency: 'CÓRDOBAS',
			value: 25489.8
		},
		{
			id: 8,
			number: 20537,
			date: '21/09/2020',
			to: 'ANA JULIA MENDIETA SEVILLA',
			currency: 'CÓRDOBAS',
			value: 2116.8
		},
		{
			id: 9,
			number: 20683,
			date: '05/10/2020',
			to: 'DANFFER SEBASTIAN SEQUEIRA DUARTE',
			currency: 'CÓRDOBAS',
			value: 7499.47
		},
		{
			id: 10,
			number: 20673,
			date: '05/10/2020',
			to: 'ANA JULIA MENDIETA SEVILLA',
			currency: 'CÓRDOBAS',
			value: 12004.46
		},
		{
			id: 11,
			number: 20683,
			date: '05/10/2020',
			to: 'DANFFER SEBASTIAN SEQUEIRA DUARTE',
			currency: 'CÓRDOBAS',
			value: 7499.47
		},
		{
			id: 12,
			number: 20673,
			date: '05/10/2020',
			to: 'ANA JULIA MENDIETA SEVILLA',
			currency: 'CÓRDOBAS',
			value: 12004.46
		},
		{
			id: 13,
			number: 20576,
			date: '05/10/2020',
			to: 'CHEQUE ANULADO',
			currency: 'DÓLARES',
			value: 562.74
		},
		{
			id: 14,
			number: 20606,
			date: '25/09/2020',
			to: 'PLASTICOS MODERNOS, S.A',
			currency: 'CÓRDOBAS',
			value: 25489.8
		},
		{
			id: 15,
			number: 20537,
			date: '21/09/2020',
			to: 'ANA JULIA MENDIETA SEVILLA',
			currency: 'CÓRDOBAS',
			value: 2116.8
		}
	]

	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)
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

export default VoidedChecksTable
