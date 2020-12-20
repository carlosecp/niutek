import React, { useState } from 'react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import Table from '../../utils/Table'
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import es from 'date-fns/locale/es'
import 'reactjs-popup/dist/index.css'
import { createValues, createValuesSchema } from './formInitialValues'
import * as Yup from 'yup'
import { FaPrint } from 'react-icons/fa'
import { Formik } from 'formik'
import Popup from 'reactjs-popup'
import SubmitBtn from '../../utils/SubmitBtn'
import ReactTooltip from 'react-tooltip'


registerLocale('es', es)
setDefaultLocale('es')

export const initialValues = {
	...createValues
}
const validationSchema = Yup.object({
	...createValuesSchema
})

export default function ReconciledChecksTable() {
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
				accessor: 'print',
				Cell: (props) => {
					const row = props.row.index

					const rowData = props.data[row]
					const [open, setOpen] = useState(false)
					const closeModal = () => setOpen(false)

					return (
						<Popup
							trigger={
								<div>
									<button
										data-tip
										data-for='printTip'
										type='button'
										className='btn bg-blue-blue btn-border-blue flex items-center gap-2 col-span-2 min-w-min'
									>
										<FaPrint />
									</button>

									<ReactTooltip id='printTip' place='top' effect='solid'>
										Imprimir Cheque
									</ReactTooltip>
								</div>
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

	const [open, setOpen] = useState(false)
	const closeModal = () => setOpen(false)
	return (
		<>
			<Table columns={columns} data={data} updateMyData={updateMyData} />
			<div className='mt-4 flex gap-2 pb-4 flex-wrap'>
				<button
					type='button'
					className='btn  bg-gray-cstm-14 inline-flex items-center gap-2 sm:break-words sm:text-sm sm:min-w-full overflow-visible sm:mb-3 sm:flex-wrap'
				>
					<FaPrint className='align-middle sm:mr-2' />
					<span>Listado de Cheques Por Conciliados</span>
				</button>

				<button
					type='button'
					className='btn bg-gray-cstm-14 inline-flex items-center gap-2 sm:break-words sm:text-sm sm:min-w-full overflow-hidden sm:flex-wrap sm:my-3'
				>
					<FaPrint className='align-middle sm:mr-2' />
					Reporte de cheques
				</button>
			</div>
		</>
	)
}
