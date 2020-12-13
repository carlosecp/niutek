import React from 'react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import Table from '../utils/Table'

export default function CheckCreate() {
	const columns = React.useMemo(
		() => [
			{
				Header: 'First Name',
				accessor: 'firstName'
			},
			{
				Header: 'Last Name',
				accessor: 'lastName'
			},

			{
				Header: 'Age',
				accessor: 'age'
			},
		],
		[]
	)
	const rows = React.useMemo(
		() => [
			{
				firstName: 'Juan',
				lastName: 'Matus',
				age: '18',
			},

			{
				firstName: 'Carlos',
				lastName: 'Arcia',
				age: '19',
			},

			{
				firstName: 'Carlos',
				lastName: 'Castillo',
				age: '19',

			},
			{
				firstName: 'Gato',
				lastName: 'Niudot',
				age: '20',
			},
		],

		[]
	)
	
	const [data, setData] = React.useState(rows)
	const [originalData] = React.useState(data);
	const [skipPageReset, setSkipPageReset] = React.useState(false)


	// We need to keep the table from resetting the pageIndex when we
	// Update data. So we can keep track of that flag with a ref.

	// When our cell renderer calls updateMyData, we'll use
	// the rowIndex, columnId and new value to update the
	// original data
	const updateMyData = (rowIndex, columnId, value) => {
		// We also turn on the flag to not reset the page
		setData((old) =>
			old.map((row, index) => {
				if (index === rowIndex) {
					return {
						...old[rowIndex],
						[columnId]: value
					}
				}
				return row
			})
		)
	}

	React.useEffect(() => {
		setSkipPageReset(false)
	  }, [data])
	console.log(data);

	return (
		<>
			<Table
				className='table'
				columns={columns}
				data={data}
				updateMyData={updateMyData}
			/>
		</>
	)
}
