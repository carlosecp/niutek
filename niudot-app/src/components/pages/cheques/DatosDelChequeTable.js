import React, { useState, useEffect } from 'react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import { object } from 'yup'
import {
	FormDropdownInput,
	FormTextInput
} from '../utils/formikComponentsEndpoint'
import Table from '../utils/Table'
import { Formik, Form } from 'formik'
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import es from 'date-fns/locale/es'
import EditButton from '../utils/EditButton'
import SearchCheckForm from '../utils/SearchCheckForm'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import DatosDelCheque from './DatosDelCheque'

registerLocale('es', es)
setDefaultLocale('es')

export default function DatosDelChequeTable() {
	const columns = React.useMemo(
		() => [
			{
				Header: () => <div className='w-60'>Cuenta</div>,
				accessor: 'account'
			},
			{
				Header: () => <div className='w-64'>Descripción</div>,
				accessor: 'description'
			},
			{
				Header: () => <div className='w-32'>Débito</div>,
				accessor: 'debit'
			},
			{
				Header: () => <div className='w-32'>Crédito</div>,
				accessor: 'credit'
			}
		],
		[]
	)
	const rows = React.useMemo(
		() => [
			{
				// date must be set in english format, it will be displayed in spanish
				currency: 'Euro',
				date: new Date('12/20/2020'),
				checkNumber: '901332',
				amount: '3,543.84',
				payTo: 'Juan Bosco Matus Gutiérrez'
			},

			{
				currency: 'Dolar',
				date: new Date(),
				checkNumber: '302312',
				amount: '4323.31',
				payTo: 'Carlos Eduardo Castillo Pereira'
			},

			{
				currency: 'Dolar',
				date: new Date(),
				checkNumber: '380212',
				amount: '3312.32',
				payTo: 'Carlos Fernando Arcia Castro'
			},
			{
				currency: 'Dolar',
				date: new Date(),
				checkNumber: '381312',
				amount: '100.00',
				payTo: 'El Gato de Niudot'
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
				<Form className='table-section p-0'>
					<Table columns={columns} data={data} updateMyData={updateMyData} />
				</Form>
			</Formik>
		</>
	)
}
