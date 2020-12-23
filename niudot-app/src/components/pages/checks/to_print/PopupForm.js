// React and Router Stuff
import React from 'react'
// Extra libraries
import { Formik, Form } from 'formik'

const PopupForm = () => {
	return (
		<Formik
			//initialValues={initialValues}
			//validationSchema={validationSchema}
			onSubmit={(values) => {
				alert(JSON.stringify(values, null, 2))
			}}
		>
			<Form>
				<div className='section'>
					<h2 className='text-black-white text-xl font-bold'>
						Test de los popups
					</h2>
					<p className='text-gray-gray'>
						Me muero de sueño y son las 17:45, y si, tengo el teclado en
						español, pero solo para poner la ñ, y por supuesto, para poner los
						nombres de las variables en español cuando programo en PHP.
					</p>
				</div>
			</Form>
		</Formik>
	)
}

export default PopupForm
