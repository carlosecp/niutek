import React from 'react'
import { Formik, Form } from 'formik'
import CancelacionAnticipada from './CancelacionAnticipada'
import SubmitBtn from '../../utils/SubmitBtn'
import * as Yup from 'yup'

import {
	createValues,
	createValuesSchema,
} from './formInitialValues'

export const initialValues = {
	...createValues,
}
const validationSchema = Yup.object({
	...createValuesSchema
})

//JUAN, BORRA EL COMENTARIO LUEGO, PERO YA DESCUBRI QUE ES LO QUE PASABA CUANDO INTENTABAS PONER MULTIPLES ALERTAS, SIMPLEMENTE TENES QUE HACER UN DESTRUCTURING DE LOS VALIDATION SCHEMAS PERO DENTRO DE UN YUP.OBJECT, NO DE UN OBJETO NORMAL COMO ESTABAMOS HACIENDO.

function AnticipatedCancellationCreate() {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				alert(JSON.stringify(values, null, 2))
			}}
		>
			<Form className='form'>
				<CancelacionAnticipada />
				<SubmitBtn />
			</Form>
		</Formik>
	)
}

export default AnticipatedCancellationCreate
