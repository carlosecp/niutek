import React from 'react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import { object } from 'yup'
import { FormDropdownInput } from '../utils/formikComponentsEndpoint'
import Table from '../utils/Table'
import { Formik, Form } from 'formik'

export default function CheckCreate() {
	const columns = React.useMemo(
		() => [
			{
				Header: 'Moneda',
				accessor: 'currency',
				Cell: ({ label, ...props }) => {
					console.log('hola', props)

					return (
						<FormDropdownInput size='lg' label={label} >
							{props.value.map((x) => (
								<option>{x}</option>
							))}
						</FormDropdownInput>
					)
				}
			},
			{
				Header: 'Last Name',
				accessor: 'lastName'
			},

			{
				Header: 'Age',
				accessor: 'age'
			}
		],
		[]
	)
	const rows = React.useMemo(
		() => [
			{
				currency: ['Córdobas', 'Dolares', 'Euro', 'Quetzal'],
				lastName: 'Matus',
				age: '18'
			},

			{
				currency: ['Córdobas', 'Dolares', 'Euro', 'Quetzal'],
				lastName: 'Arcia',
				age: '19'
			},

			{
				currency: ['Córdobas', 'Dolares', 'Euro', 'Quetzal'],
				lastName: 'Castillo',
				age: '19'
			},
			{
				currency: ['Córdobas', 'Dolares', 'Euro', 'Quetzal'],
				lastName: 'Niudot',
				age: '20'
			}
		],

		[]
	)

	const [data, setData] = React.useState(rows)
	const [originalData] = React.useState(data)
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
	console.log(data)

	return (
		<>
			<Formik
				/* initialValues={initialValues}
			validationSchema={validationSchema} */
				onSubmit={(values) => {
					alert(JSON.stringify(values, null, 2))
				}}
			>
				<Form className='form'>
					<Table
						className='table'
						columns={columns}
						data={data}
						updateMyData={updateMyData}
					/>
				</Form>
			</Formik>
		</>
	)
}
