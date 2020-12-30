// React and Router Stuff
import React from 'react'
// Other Components
import Table from '../../utils/tables'

const ChecksTable = ({ togglePopup, tableName }) => {
	const headers = ['Codigo',  'Descripcion' ]
	const rows = [
		{
			code: 0,
			description :`${tableName}`
		},
		{
			code: 1,
			description: "CocaCola"
		},
		{
			code: 2,
			description: "CocaCola"
		},
		{
			code: 3,
			description: "CocaCola"
		},
	]

	return (
		<>
			<Table headers={headers} rows={rows} togglePopup={togglePopup} />
		</>
	)
}

export default ChecksTable
