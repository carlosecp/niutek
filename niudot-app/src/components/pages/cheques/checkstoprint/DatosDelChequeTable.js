import React, { useState, useEffect } from 'react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import Table from '../../utils/Table'
import { Formik, Form } from 'formik'
import 'react-datepicker/dist/react-datepicker.css'
import es from 'date-fns/locale/es'
import 'reactjs-popup/dist/index.css'
import { FaPlusCircle, FaRegCheckCircle, FaRegTimesCircle, FaTrashAlt } from 'react-icons/fa'

export default function DatosDelChequeTable() {
	const columns = React.useMemo(
		() => [
			{
				Header: () => <div className='w-48'>Cuenta</div>,
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
				account: '381944812',
				description: 'EQUIPO DE TRANSPORTE',
				debit: '52,733.84',
				credit: '42,482.00'
			},

			{
				account: '324821342',
				description: 'BAC CORRIENTE',
				debit: '212,323.42',
				credit: '382,482.32'
			},

			{
				account: '849031843',
				description: 'BANPRO AHORRO',
				debit: '573,342.54',
				credit: '633,941.44'
			},
			{
				account: '148520132',
				description: 'NIUDOT WALLET',
				debit: '42,323.34',
				credit: '50,482.32'
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
				<Form className='table-section-popup'>
					<Table columns={columns} data={data} updateMyData={updateMyData} />
					<div className='mt-4 flex gap-2 pb-4'>
						<button
							type='button'
							className='btn bg-blue-blue btn-border-blue flex items-center gap-2'
						>
							<FaPlusCircle />
							Añadir
							
						</button>
						<button
							type='button'
							className='text-white btn bg-gray-cstm-12 flex items-center gap-2 transition hover:bg-gray-cstm-10 focus:outline-none focus:ring focus:ring-gray-cstm-14 dark:bg-gray-cstm-2 dark:hover:bg-gray-cstm-4 dark:focus:ring-gray-cstm-5'
						>
							<FaTrashAlt/>
							Eliminar
							
						</button>
					</div>
				</Form>
			</Formik>
		</>
	)
}
