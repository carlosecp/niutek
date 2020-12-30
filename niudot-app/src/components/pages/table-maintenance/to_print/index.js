// React and Router Stuff
import React, { useState, useContext, useEffect } from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
// Other Components
import SearchCheckForm from '../../utils/search/SearchCheckForm'
import PrintChecksTable from './PrintChecksTable'
import EditChecksPopup from './EditChecksPopup'
import AddChecksPopup from './AddChecksPopup'
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

const TableMaintenance = () => {
	const { changePage } = useContext(routesContext)
	const [showEditPopup, setShowEditPopup] = useState(false)
	const [showAddPopup, setShowAddPopup] = useState(false)

	useEffect(() => {
		changePage('Mantenimiento de tablas')
	}, [])

	const toggleEditPopup = () => {
		setShowEditPopup(!showEditPopup)
	}

	const toggleAddPopup = () => {
		setShowAddPopup(!showAddPopup)
	}

	return (
		<div className='section'>
		    <Formik
		      initialValues={initialValues}
		      validationSchema={validationSchema}
		      onSubmit={(values) => {
			alert(JSON.stringify(values, null, 2))
		      }}
		    >
			<Form>
			<Dropdown
				size='md'
				name='create_tablas'
				label='Tablas'
				placeholder=''
			>
				<option value='option1'> Bodegas </option>
				<option value='option2'> Marcas </option>
				<option value='option3'> Presentaciones </option>
				<option value='option4'> Grupos </option>
			</Dropdown>
			</Form>
		</Formik>
	
			<PrintChecksTable togglePopup={toggleEditPopup} />
			{showEditPopup && <EditChecksPopup togglePopup={toggleEditPopup} />}
			{showAddPopup && <AddChecksPopup togglePopup={toggleAddPopup} />}
			<div className='my-4 flex gap-2 justify-center flex-wrap'>
				<button
					className='btn bg-blue-blue btn-border-blue flex items-center gap-2'
				>
					Agregar
					<FaPlus />
				</button>
				<button className='btn bg-blue-blue btn-border-blue flex items-center gap-2'>
					Eliminar	
				</button>
				<button className='btn bg-blue-blue btn-border-blue flex items-center gap-2'>
					Modificar
				</button>
				<button className='btn flex items-center bg-blue-blue btn-border-blue gap-2'
				onClick={toggleAddPopup}>
					
					Reporte 
					<FaChartLine />
				</button>
			</div>
		    <Formik
		      initialValues={initialValues}
		      validationSchema={validationSchema}
		      onSubmit={(values) => {
			alert(JSON.stringify(values, null, 2))
		      }}
		    >
			<Form>
			<Text
				name='create_codigo'
				size='md'
				placeholder='0'
				label='codigo'
				type='number'
				min='0'
			/>
			<Text
				name='create_descripcion'
				size='md'
				placeholder=''
				label='descripcion'
				min='0'
			/>
			</Form>
		</Formik>
		</div>
	)
}

export default TableMaintenance
