// React and Router Stuff
import React, { useState } from 'react'
import PropTypes from 'prop-types'
// Extra libraries
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { FaPlusCircle, FaPrint, FaTrashAlt, FaUserSlash } from 'react-icons/fa'
import ReactTooltip from 'react-tooltip'
import Popup from 'reactjs-popup'
// Other Components
import Table from '../../utils/Table'
import DeleteBtn from '../../utils/DeleteBtn'
import VoidBtn from '../../utils/VoidBtn'
// Data
import { createValues, createValuesSchema } from './formInitialValues'

const initialValues = {
	...createValues
}
const validationSchema = Yup.object({
	...createValuesSchema
})

const DatosDelChequeTable = () => {
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
								<div>
									<button
										data-tip
										data-for='deleteTip'
										type='button'
										className='btn bg-gray-cstm-12 btn-border-gray-cstm-12 hover:bg-gray-cstm-10 flex items-center gap-2 col-span-2 min-w-min'
									>
										<FaTrashAlt />
									</button>

									<ReactTooltip id='deleteTip' place='top' effect='solid'>
										Eliminar Cheque
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

									<h2 className='text-black-white text-xl font-bold'>
										¿Estás seguro que quieres eliminar esta cuenta?{' '}
									</h2>
									<DeleteBtn />
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

	const [open, setOpen] = useState(false)
	const closeModal = () => setOpen(false)

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
							Añadir Cuenta
						</button>
					</div>

					<div className='inline-flex flex-wrap pt-4'>
						<button
							type='button'
							className='btn bg-blue-blue btn-border-blue flex items-center gap-2 sm:my-3 mr-2'
						>
							<FaPrint className='align-middle sm:mr-2' />
							Imprimir Cheque
						</button>

						<Popup
							trigger={
								<button
									type='button'
									className='btn bg-gray-cstm-14 inline-flex items-center gap-2 sm:break-words sm:text-sm sm:max-w-full overflow-hidden sm:flex-wrap sm:my-3 mr-2'
								>
									<FaTrashAlt className='align-middle sm:mr-2' />
									Eliminar Cheque
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
						<Popup
							trigger={
								<button
									type='button'
									className='btn bg-red-400 inline-flex items-center gap-2 sm:break-words sm:text-sm sm:max-w-full overflow-hidden sm:flex-wrap sm:my-3'
								>
									<FaUserSlash className='align-middle sm:mr-2' />
									Anular Cheque
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
					</div>
				</Form>
			</Formik>
		</>
	)
}

DatosDelChequeTable.propTypes = {
	value: PropTypes.object
}

export default DatosDelChequeTable
