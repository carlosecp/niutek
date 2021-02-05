import React from "react"

import Table from "../../utils/tables"

const MaintenanceTable = ({ togglePopup }) => {
	const headers = ["Codigo", "Descripcion"]
	const rows = [
		{
			code: 0,
			description: "Test 1",
		},
		{
			code: 1,
			description: "CocaCola",
		},
		{
			code: 2,
			description: "CocaCola",
		},
		{
			code: 3,
			description: "CocaCola",
		},
	]

	return (
		<>
			<Table headers={headers} rows={rows} togglePopup={togglePopup} />
		</>
	)
}

export default MaintenanceTable
