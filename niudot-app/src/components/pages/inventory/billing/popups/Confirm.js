import React from "react"

import * as Yup from "yup"
import { Formik, Form } from "formik"
import { Dropdown, Text } from "../../../utils/forms"
import Table from "../../../utils/tables"
import Popup from "../../../utils/tables/Popup"
//import {initialValues, validationSchema} from '../initialValues'
import { createValues, createValuesSchema } from "../initialValues"
const initialValues = {
	...createValues,
}

const validationSchema = Yup.object({
	...createValuesSchema,
})
const Articles = ({ togglePopup, total }) => {
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
					<div className="section">
						<h2 className="text-black-white text-xl font-bold">
							Confirmacion
						</h2>
						<div className="form-grid-layout">
							<Text
								name="create_efectivo"
								size="md"
								label="Efectivo"
								placeholder="500"
								type="number"
							/>
							<Text
								name="vuelto"
								size="md"
								label="Vuelto"
								value={500 - total}
							/>
						</div>
						<div className="mt-6 flex gap-2 justify-center">
							<button className="btn bg-blue-blue btn-border-blue">
								Confirmar
							</button>
						</div>
					</div>
				</Form>
			</Formik>
		</Popup>
	)
}

export default Articles
