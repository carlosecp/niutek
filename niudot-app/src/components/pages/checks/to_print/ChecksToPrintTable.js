// React and Router Stuff
import React, { useState } from 'react'
// Extra libraries
import * as Yup from 'yup'
import { Formik } from 'formik'
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker'
import es from 'date-fns/locale/es'
import ReactTooltip from 'react-tooltip'
import Popup from 'reactjs-popup'
import Table from '../../utils/Table'
// Other Components
import EditButton from '../../utils/EditButton'
import DatosDelCheque from './DatosDelCheque'
import SubmitBtn from '../../utils/SubmitBtn'
// Data
import { createValues, createValuesSchema } from './formInitialValues'

import { FaPlus, FaPrint, FaTrashAlt, FaUserSlash } from 'react-icons/fa'

registerLocale('es', es)
setDefaultLocale('es')

const initialValues = {
	...createValues
}
const validationSchema = Yup.object({
	...createValuesSchema
})

const CheckTable = () => {
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
				accessor: 'currency'
			},
			{
				Header: () => <div className='w-36'>Monto</div>,
				accessor: 'amount'
			},
			{
				Header: '',
				accessor: 'edit',
				Cell: (props) => {
					const row = props.row.index

					const rowData = props.data[row]
					const [open, setOpen] = useState(false)
					const closeModal = () => setOpen(false)

					return (
						<Popup
							trigger={
								<div>
									<EditButton data-tip data-for='editTip' />

									<ReactTooltip id='editTip' place='top' effect='solid'>
										Modificar Cheque
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
									>
										<DatosDelCheque />
									</Formik>
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

	return (
		<>
			<Table columns={columns} data={data} updateMyData={updateMyData} />
			<div className='mt-4 flex gap-2 pb-4 flex-wrap'>
				<button
					type='button'
					className='btn bg-blue-blue btn-border-blue inline-flex items-center gap-2 sm:break-words sm:text-sm sm:min-w-full overflow-visible sm:my-3 sm:flex-wrap'
				>
					<FaPlus className='align-middle sm:mr-2' />
					<span>Nuevo Cheque</span>
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

export default CheckTable
