import React, { useState, useEffect } from 'react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import { object } from 'yup'
import { FormDropdownInput } from '../utils/formikComponentsEndpoint'
import Table from '../utils/Table'
import { Formik, Form } from 'formik'
import DatePicker, { registerLocale, setDefaultLocale }  from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import es from 'date-fns/locale/es';
registerLocale('es', es)
setDefaultLocale('es')

export default function CheckCreate() {
	const columns = React.useMemo(
		() => [

			{
				Header: 'Número de Cheque',
				accessor: 'checkNumber'
			},
			{
				Header: 'Fecha',
				accessor: 'date',
				Cell: ({ value }) => {
					const [startDate, setStartDate] = useState(value)

					return (
						<DatePicker
						locale='es'
							selected={startDate}
							onChange={(date) => setStartDate(date)}
							className='table-field'
						/>
					)
				}
			},
			{
				Header: () => (
					<div
					  style={{
						width: 200,
					  }}>
					  Moneda
					</div>
				  ),
				accessor: 'currency',
				width: 800,
				Cell: ({
					label,
					value: initialValue,
					updateMyData,
					row: { index },
					column: { id },
					...props
				}) => {
					const Options = ['Córdobas', 'Dolares', 'Euro', 'Quetzal']
					const [selected, selectChange] = useState(initialValue)
					const handleChange = (e) => {
						selectChange(e.target.value)
						updateMyData(index, id, e.target.value)
					}

					return (
						<FormDropdownInput
							size='lg'
							label={label}
							value={'fff'}
							onChange={handleChange}
							onBlur={() => {}}
						>
							{Options.map((x) => (
								<option key={x}>{x}</option>
							))}
						</FormDropdownInput>
					)
				}
				
			},
			{
				Header: 'Monto',
				accessor: 'amount'
			},
		],
		[]
	)
	const rows = React.useMemo(
		() => [
			{
				// date must be set in english format, it will be displayed in spanish
				currency: '',
				date: new Date('12/20/2020'),
				checkNumber: '901332',
				amount: '',
			},

			{
				currency: '',
				date: new Date(),
				checkNumber: '302312',
				amount: '',
			},

			{
				currency: '',
				date: new Date(),
				checkNumber: '380212',
				amount: '',
			},
			{
				currency: '',
				date: new Date(),
				checkNumber: '381312',
				amount: '',
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
				<Form className='table-section'>
					<Table
						columns={columns}
						data={data}
						updateMyData={updateMyData}
					/>
				</Form>
			</Formik>
		</>
	)
}
