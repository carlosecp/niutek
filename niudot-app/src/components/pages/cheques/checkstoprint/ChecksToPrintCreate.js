import React, { useState, useEffect } from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import 'react-datepicker/dist/react-datepicker.css'
import es from 'date-fns/locale/es'
import SearchCheckForm from '../../utils/SearchCheckForm'

import 'reactjs-popup/dist/index.css'

import CheckTable from './ChecksToPrintTable'
import {createValues, createValuesSchema }from './formInitialValues'

export const initialValues = {
	...createValues
}

const validationSchema = Yup.object({
	...createValuesSchema
})

export default function CheckCreate() {
	// We need to keep the table from resetting the pageIndex when we
	// Update data. So we can keep track of that flag with a ref.

	// When our cell renderer calls updateMyData, we'll use
	// the rowIndex, columnId and new value to update the
	// original data

	return (
		<>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values) => {
					alert(JSON.stringify(values, null, 2))
				}}
			>
				<Form className='table-section content-start'>
					<SearchCheckForm className='mx-0 p-8' />
					<CheckTable />
				</Form>
			</Formik>
		</>
	)
}
