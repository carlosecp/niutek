// React and Router Stuff
import React, { useState } from 'react'
// Extra libraries
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import Table from '../../utils/Table'
// Other Components
import { FaCheckSquare, FaSearch } from 'react-icons/fa'
import SearchProviderForm from '../../utils/SearchProviderForm'

const BuscarProveedor = () => {
	const [open, setOpen] = useState(false)
	const closeModal = () => setOpen(false)
	const columns = React.useMemo(
		() => [
			{
				Header: () => <div className='w-32'>Código</div>,
				accessor: 'code'
			},
			{
				Header: () => <div className='w-80'>Nombre del Proveedor</div>,
				accessor: 'provider'
			},
			{
				Header: '',
				accessor: 'select',
				Cell: (props) => {
					const row = props.row.index

					const rowData = props.data[row]

					return (
						<button
							type='button'
							className='btn bg-blue-blue btn-border-blue flex items-center gap-2 col-span-2  min-w-min'
						>
							<FaCheckSquare />
						</button>
					)
				}
			}
		],
		[]
	)
	const rows = React.useMemo(
		() => [
			{
				code: '191331',
				name: 'TESLA'
			},

			{
				code: '414521',
				name: 'KRAFT'
			},

			{
				code: '234123',
				name: 'MICROSOFT'
			},
			{
				code: '213443',
				name: 'NIUDOT'
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
					<SearchProviderForm />
					<Table columns={columns} data={data} updateMyData={updateMyData} />
				</Form>
			</Formik>
		</>
	)
}

export default BuscarProveedor
