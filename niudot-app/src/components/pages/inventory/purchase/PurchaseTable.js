// React and Router Stuff
import React, { useMemo, useRef, useState, useCallback } from 'react'
// Other Components
import Table from '../../utils/tables'

const PurchaseTable = ({ togglePopup }) => {
	const columns = useMemo(() => [
		{ Header: 'Artículo', accessor: 'item' },
		{ Header: 'Descripción', accessor: 'description' },
		{ Header: 'Presentación', accessor: 'presentation' },
		{ Header: 'Cantidad', accessor: 'quantity' },
		{ Header: 'Monto', accessor: 'value' },
		{ Header: 'Total', accessor: 'total' }
	])
	const serverData = [
		{
			item: 'Coca Cola',
			description: '10/09/2001',
			presentation: 'Juan Matus',
			quantity: 20,
			value: 34,
			total: 680
		},
		{
			item: 'Coca Cola',
			description: '10/09/2001',
			presentation: 'Juan Matus',
			quantity: 20,
			value: 34,
			total: 680
		},
		{
			item: 'Coca Cola',
			description: '10/09/2001',
			presentation: 'Juan Matus',
			quantity: 20,
			value: 34,
			total: 680
		},
		{
			item: 'Coca Cola',
			description: '10/09/2001',
			presentation: 'Juan Matus',
			quantity: 20,
			value: 34,
			total: 680
		},
		{
			item: 'Coca Cola',
			description: '10/09/2001',
			presentation: 'Juan Matus',
			quantity: 20,
			value: 34,
			total: 680
		},
		{
			item: 'Coca Cola',
			description: '10/09/2001',
			presentation: 'Juan Matus',
			quantity: 20,
			value: 34,
			total: 680
		},
		{
			item: 'Coca Cola',
			description: '10/09/2001',
			presentation: 'Juan Matus',
			quantity: 20,
			value: 34,
			total: 680
		},
		{
			item: 'Coca Cola',
			description: '10/09/2001',
			presentation: 'Juan Matus',
			quantity: 20,
			value: 34,
			total: 680
		},
		{
			item: 'Coca Cola',
			description: '10/09/2001',
			presentation: 'Juan Matus',
			quantity: 20,
			value: 34,
			total: 680
		},
		{
			item: 'Coca Cola',
			description: '10/09/2001',
			presentation: 'Juan Matus',
			quantity: 20,
			value: 34,
			total: 680
		},
		{
			item: 'Coca Cola',
			description: '10/09/2001',
			presentation: 'Juan Matus',
			quantity: 20,
			value: 34,
			total: 680
		},
		{
			item: 'Coca Cola',
			description: '10/09/2001',
			presentation: 'Juan Matus',
			quantity: 20,
			value: 34,
			total: 680
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

export default PurchaseTable
