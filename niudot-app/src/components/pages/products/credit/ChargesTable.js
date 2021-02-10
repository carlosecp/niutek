import React, { useMemo, useRef, useState, useCallback } from 'react'
import Table from '../../utils/tables'

const ChargesTable = ({ togglePopup }) => {
	const columns = useMemo(
		() => [
			{ Header: 'Cargos', accessor: 'cargos' },
			{ Header: 'Moneda', accessor: 'moneda' },
			{ Header: 'Valor', accessor: 'valor' },
			{ Header: 'Tipo (%/Monto)', accessor: 'tipo' },
		],
		[]
	)

	const serverData = [
		{
			id: 1,
			cargos: 'Cargos 1',
			moneda: 'Dolares',
			valor: 101,
			tipo: 'Tipo 1',
		},
		{
			id: 2,
			cargos: 'Cargos 1',
			moneda: 'Dolares',
			valor: 102,
			tipo: 'Tipo 2',
		},
		{
			id: 3,
			cargos: 'Cargos 3',
			moneda: 'Dolares',
			valor: 103,
			tipo: 'Tipo 3',
		},
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
		// eslint-disable-next-line
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
			fullRow={true}
		/>
	)
}

export default ChargesTable
