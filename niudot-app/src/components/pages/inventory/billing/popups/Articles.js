// React and Router Stuff
import React from 'react'
// Extra libraries
import { Formik, Form } from 'formik'
import { Dropdown, Text } from '../../../utils/forms'
import Table from '../../../utils/tables'
import Popup from '../../../utils/tables/Popup'
import * as Yup from 'yup'
import { createValues, createValuesSchema } from '../initialValues'
const initialValues = {
  ...createValues
}

const validationSchema = Yup.object({
  ...createValuesSchema
})
const Articles = ({ togglePopup }) => {
	const headers = []

	const rows = [{}]

	return (
		<Popup togglePopup={togglePopup}>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values) => {
					alert(JSON.stringify(values, null, 2))
				}}
			>
				<Form>
					<div className='section'>
						<h2 className='text-black-white text-xl font-bold'>
							Catalogo de articulos
						</h2>
						<div className='form-grid-layout'>
						    	<Text
								name='create_articulo'
								size='lg'
								label='Articulos'
							/>
						</div>
						<ul>
							<li> Club Social </li>
							<li> Club Social Integral </li> 
							<li> Club Social Queso y Cebolla </li>
						</ul>
					</div>
				</Form>
			</Formik>
		</Popup>
	)
}

export default Articles