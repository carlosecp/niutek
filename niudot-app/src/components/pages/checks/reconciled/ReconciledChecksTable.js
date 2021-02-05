import React, { useMemo, useRef, useState, useCallback } from "react"
import { v4 as uuidv4 } from "uuid"
import Table from "../../utils/tables"

const ChecksTable = ({ togglePopup }) => {
	const columns = useMemo(
		() => [
			{ Header: "No. Cheque", accessor: "number" },
			{ Header: "Fecha", accessor: "date" },
			{ Header: "Paguese a", accessor: "to" },
			{ Header: "Moneda", accessor: "currency" },
			{ Header: "Monto", accessor: "value" },
		],
		[]
	)

	const serverData = [
		{
			id: uuidv4(),
			number: 20688,
			date: "06/10/2020",
			to: "ANA JULIA MENDIETA SEVILLA",
			currency: "CÓRDOBAS",
			value: 7800.0,
		},
		{
			id: uuidv4(),
			number: 20689,
			date: "06/10/2020",
			to: "ANA JULIA MENDIETE SEVILLA",
			currency: "CÓRDOBAS",
			value: 6280.0,
		},
		{
			number: 20690,
			date: "06/10/200",
			to: "SILVIA CAROLINA HERNANDEZ PEREZ",
			currency: "CÓRDOBAS",
			value: 5703.47,
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
		/>
	)
}

export default ChecksTable
