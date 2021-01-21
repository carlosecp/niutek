import React, { useMemo, useRef, useState, useCallback } from "react"

import Table from "../../utils/tables"

const ProductsTable = ({ togglePopup }) => {
	const columns = useMemo(() => [
		{ Header: "Artículo", accessor: "item" },
		{ Header: "Descripción", accessor: "description" },
		{ Header: "Presentación", accessor: "presentation" },
		{ Header: "Cantidad", accessor: "quantity" },
		{ Header: "Costo", accessor: "cost" },
		{ Header: "Total", accessor: "total" },
	])
	const serverData = [
		{
			item: "29102",
			description: "Salchichas para Hot Dog",
			presentation: "UNIDAD",
			quantity: "1",
			cost: "12.76",
			total: "12.76",
		},
		{
			item: "29102",
			description: "Salchichas para Hot Dog",
			presentation: "UNIDAD",
			quantity: "1",
			cost: "12.76",
			total: "12.76",
		},
		{
			item: "29102",
			description: "Salchichas para Hot Dog",
			presentation: "UNIDAD",
			quantity: "1",
			cost: "12.76",
			total: "12.76",
		},
		{
			item: "29102",
			description: "Salchichas para Hot Dog",
			presentation: "UNIDAD",
			quantity: "1",
			cost: "12.76",
			total: "12.76",
		},
		{
			item: "29102",
			description: "Salchichas para Hot Dog",
			presentation: "UNIDAD",
			quantity: "1",
			cost: "12.76",
			total: "12.76",
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
	}, [])

	return (
		<>
			<Table
				columns={columns}
				data={data}
				fetchData={fetchData}
				loading={loading}
				pageCount={pageCount}
				togglePopup={togglePopup}
				showEdit={true}
			/>
		</>
	)
}

export default ProductsTable
