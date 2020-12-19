import React, { useState, useEffect } from 'react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import { object } from 'yup'
import {
	FormDropdownInput,
	FormTextInput
} from '../../utils/formikComponentsEndpoint'
import Table from '../../utils/Table'
import { Formik, Form } from 'formik'
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import es from 'date-fns/locale/es'
import EditButton from '../../utils/EditButton'
import SearchCheckForm from '../../utils/SearchCheckForm'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import SubmitBtn from '../../utils/SubmitBtn'
import { createValues, createValuesSchema } from './formInitialValues'
import * as Yup from 'yup'
import { FaPaperPlane, FaPrint, FaTrashAlt, FaUserSlash } from 'react-icons/fa'
import DeliverCheck from './DeliverCheck'
import DeliverCheckBtn from '../../utils/DeliverCheckBtn'
import DeleteBtn from '../../utils/DeleteBtn'
import VoidBtn from '../../utils/VoidBtn'
registerLocale('es', es)
setDefaultLocale('es')
export const initialValues = {
	...createValues
}
const validationSchema = Yup.object({
	...createValuesSchema
})

export default function ChecksToDeliverTable() {
	const columns = React.useMemo(
		() => [
			{
				Header: () => <div className='w-44'>Número de Cheque</div>,
				accessor: 'checkNumber'
			},
			{
				Header: () => <div className='w-36'>Fecha</div>,
				accessor: 'date',
				Cell: ({ value }) => {
					const [startDate, setStartDate] = useState(value)

					return (
						<DatePicker
							readOnly={true}
							locale='es'
							selected={startDate}
							onChange={(date) => setStartDate(date)}
							className='table-field'
						/>
					)
				}
			},
			{
				Header: () => <div className='w-72'>Páguese a</div>,
				accessor: 'payTo'
			},
			{
				Header: () => <div className='w-36'>Moneda</div>,
				accessor: 'currency',
				width: 800
			},
			{
				Header: () => <div className='w-36'>Monto</div>,
				accessor: 'amount'
			},
			{
				Header: '',
				accessor: 'deliver',
				Cell: (props) => {
					const row = props.row.index

					const rowData = props.data[row]
					const [open, setOpen] = useState(false)
					const closeModal = () => setOpen(false)

					return (
						<Popup
							trigger={
								<button
									type='button'
									className='btn bg-blue-blue btn-border-blue flex items-center gap-2 col-span-2 min-w-min'
								>
									<FaPaperPlane />
								</button>
							}
							modal
							nested
							onClose={closeModal}
						>
							{(close) => (
								<div className='section'>
									<Formik
										initialValues={initialValues}
										validationSchema={validationSchema}
										onSubmit={(values) => {
											alert(JSON.stringify(values, null, 2))
										}}
									></Formik>
									<div></div>

									<DeliverCheck />
									<DeliverCheckBtn onClick={close} />
								</div>
							)}
						</Popup>
					)
				}
			},
			{
				Header: '',
				accessor: 'print',
				Cell: (props) => {
					const row = props.row.index

					const rowData = props.data[row]
					const [open, setOpen] = useState(false)
					const closeModal = () => setOpen(false)

					return (
						<Popup
							trigger={
								<button
									type='button'
									className='btn bg-blue-blue btn-border-blue flex items-center gap-2 col-span-2 min-w-min'
								>
									<FaPrint />
								</button>
							}
							modal
							nested
							onClose={closeModal}
						>
							{(close) => (
								<div className='section'>
									<Formik
										initialValues={initialValues}
										validationSchema={validationSchema}
										onSubmit={(values) => {
											alert(JSON.stringify(values, null, 2))
										}}
									></Formik>
									<div></div>
									<SubmitBtn onClick={close} />
								</div>
							)}
						</Popup>
					)
				}
			},
			{
				Header: '',
				accessor: 'delete',
				Cell: (props) => {
					const row = props.row.index

					const rowData = props.data[row]
					const [open, setOpen] = useState(false)
					const closeModal = () => setOpen(false)

					return (
						<Popup
							trigger={
								<button
									type='button'
									className='btn bg-gray-cstm-12 btn-border-gray-cstm-12 hover:bg-gray-cstm-10 flex items-center gap-2 col-span-2 min-w-min'
								>
									<FaTrashAlt />
								</button>
							}
							modal
							nested
							onClose={closeModal}
						>
							{(close) => (
								<div className='section'>
									<Formik
										initialValues={initialValues}
										validationSchema={validationSchema}
										onSubmit={(values) => {
											alert(JSON.stringify(values, null, 2))
										}}
									></Formik>
									<div></div>

									<h2 className='text-black-white text-xl font-bold'>
										¿Estás seguro que quieres eliminar este cheque?{' '}
									</h2>
									<DeleteBtn onClick={close} />
								</div>
							)}
						</Popup>
					)
				}
			},
			{
				Header: '',
				accessor: 'void',
				Cell: (props) => {
					const row = props.row.index

					const rowData = props.data[row]
					const [open, setOpen] = useState(false)
					const closeModal = () => setOpen(false)

					return (
						<Popup
							trigger={
								<button
									type='button'
									className='btn bg-red-400 btn-border-gray-cstm-12 hover:bg-gray-cstm-10 flex items-center gap-2 col-span-2 min-w-min'
								>
									<FaUserSlash />
								</button>
							}
							modal
							nested
							onClose={closeModal}
						>
							{(close) => (
								<div className='section'>
									<Formik
										initialValues={initialValues}
										validationSchema={validationSchema}
										onSubmit={(values) => {
											alert(JSON.stringify(values, null, 2))
										}}
									></Formik>
									<div></div>
									<h2 className='text-black-white text-xl font-bold'>
										¿Estás seguro que quieres anular este cheque?{' '}
									</h2>
									<VoidBtn onClick={close} />
								</div>
							)}
						</Popup>
					)
				}
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
			<Table columns={columns} data={data} updateMyData={updateMyData} />
			<div className='mt-4 flex gap-2 pb-4'>
				<button
					type='button'
					className='btn bg-blue-blue btn-border-blue inline-flex items-center gap-2 sm:break-words sm:text-sm '
				>
					<FaPrint className='min-w-max' />
					Listado de Cheques Por Entregar
				</button>
				<button
					type='button'
					className='btn bg-gray-cstm-14 inline-flex items-center gap-2 sm:break-words sm:text-sm '
				>
					<FaPrint className='min-w-max' />
					Reporte de Cheques
				</button>
			</div>
		</>
	)
}