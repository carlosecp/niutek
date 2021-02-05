import React, { useMemo, useRef, useState, useCallback } from "react"
import Table from "../../utils/tables"

const InvoiceTable = ({ togglePopup, setTotal }) => {
	const columns = useMemo(
		() => [
			{ Header: "Id", accessor: "id" },
			{ Header: "Nombre Abreviado", accessor: "name" },
			{ Header: "Precio", accessor: "price" },
			{ Header: "Cantidad", accessor: "quantity" },
			{ Header: "Total", accessor: "total" },
		],
		[]
	)

	const serverData = [
		{
			id: 69,
			name: "Album 2010",
			price: 69.69,
			quantity: 1,
			total: 69.69,
		},
		{
			id: 69,
			name: "Album 2010",
			price: 69.69,
			quantity: 1,
			total: 69.69,
		},
		{
			id: 69,
			name: "Album 2010",
			price: 69.69,
			quantity: 1,
			total: 69.69,
		},
		{
			id: 69,
			name: "Album 2010",
			price: 69.69,
			quantity: 1,
			total: 69.69,
		},
		{
			id: 69,
			name: "Album 2010",
			price: 69.69,
			quantity: 1,
			total: 69.69,
		},
	]
	setTotal(278.26)

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

export default InvoiceTable
