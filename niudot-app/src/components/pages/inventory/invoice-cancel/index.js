// React and Router Stuff
import React, { useState, useContext, useEffect } from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
// Other Components
import SearchCheckForm from '../../utils/search/SearchCheckForm'
import InvoiceTable from './InvoiceTable'
import EditChecksPopup from './EditChecksPopup'
import { Dropdown, Text } from '../../utils/forms'
// Context
import routesContext from '../../../../context/routes/routesContext'
import { FaPlus, FaChartLine, FaPrint } from 'react-icons/fa'

import { createValues, createValuesSchema } from './initialValues'

const initialValues = {
  ...createValues
}

const validationSchema = Yup.object({
  ...createValuesSchema
})

const  InvoiceCancel = () => {
	const { changePage } = useContext(routesContext)
	const [showEditPopup, setShowEditPopup] = useState(false)
	const [showAddPopup, setShowAddPopup] = useState(false)

	useEffect(() => {
		changePage('Anula factura')
	}, [])

	const toggleEditPopup = () => {
		setShowEditPopup(!showEditPopup)
	}

	const toggleAddPopup = () => {
		setShowAddPopup(!showAddPopup)
	}

	return (
		<>
		<div className='section'>
			<SearchCheckForm />
			<Formik
		      initialValues={initialValues}
		      validationSchema={validationSchema}
		      onSubmit={(values) => {
			alert(JSON.stringify(values, null, 2))
		      }}
		    >
			<div className = 'form-grid-layout'>
				<Text
					name='create_descripcion'
					size='md'
					placeholder='mm/dd/yy'
					label='Fecha'
				/>
				<Dropdown
					size='md'
					name='create_bodega'
					label='Bodega'
					placeholder=''
				>
					<option value='option1'> Supermercado</option>
				</Dropdown>
			</div>
			</Formik>
		</div>
		<div className='section'>
			<InvoiceTable />
			<div className='my-4 flex gap-2 justify-center flex-wrap'>
				<button className='btn bg-blue-blue btn-border-blue flex items-center gap-2'>
					Anular
				</button>
				<button className='btn flex items-center bg-blue-blue btn-border-blue gap-2'>
					Salir
				</button>

			</div>
		</div>
		</>
	)
}

export default InvoiceCancel
