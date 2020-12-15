import React, { useState, useEffect } from 'react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import { object } from 'yup'
import { FormDropdownInput } from '../utils/formikComponentsEndpoint'
import Table from '../utils/Table'
import { Formik, Form } from 'formik'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function CheckCreate() {
	const columns = React.useMemo(
		() => [
			{
				Header: 'Date',
				accessor: 'date',
				Cell: ({ value }) => {
					const [startDate, setStartDate] = useState(value)

					return (
						<DatePicker
							selected={startDate}
							onChange={(date) => setStartDate(date)}
							className='table-field'
						/>
					)
				}
			},

			{
				Header: 'Age',
				accessor: 'age'
			},
			{
				Header: 'Moneda',
				accessor: 'currency',
				Cell: ({ label, ...props }) => {
					const Options = ['Córdobas', 'Dolares', 'Euro', 'Quetzal']

					return (
						<FormDropdownInput
							size='lg'
							label={label}
							value={props.value.selected}
							onChange={(e) => (props.value.selected = e.target.value)}
						>
							{Options.map((x) => (
								<option>{x}</option>
							))}
						</FormDropdownInput>
					)
				}
			}
		],
		[]
	)
	const rows = React.useMemo(
		() => [
			{
				currency: {
					selected: ''
				},
				date: new Date('12/7/1997'),
				age: '18'
			},

			{
				currency: {
					selected: ''
				},
				date: new Date(),
				age: '19'
			},

			{
				currency: {
					selected: ''
				},
				date: new Date(),
				age: '19'
			},
			{
				currency: {
					selected: ''
				},
				date: new Date(),
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
