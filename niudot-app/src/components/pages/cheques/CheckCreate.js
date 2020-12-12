import { Formik, Form } from 'formik'
import React from 'react'
import Table from '../utils/Table'
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css"



export default function CheckCreate() {
	return (
		<>
			<Formik>
				<Form>
					<Table />
				</Form>
			</Formik>
		</>
	)
}
