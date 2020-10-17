import React from 'react'
import { Formik, Form } from 'formik'
import DatosProfesionalesEconomicos from './DatosProfesionalesEconomicos'
import Referencias from '../../utils/referencias/Referencias'
import NewClient from './NewClient'
import SubmitBtn from '../../utils/SubmitBtn'
import OrigenFondos from './OrigenFondos'

import {
	createValues,
	datosValues,
	origenFondos,
	refComercialesValues,
	refBancariasValues,
	refPersonales1Values,
	refPersonales2Values
} from './formInitialValues'

// * Comentarios para Juan
{
	/* Para trabajar con Formik necesitamos valores iniciales en los formularios. Cada formulario tiene un archivo dentro del mismo directorio en donde esta al formulario, que tiene el nombre de formInitialValues, aca se almacenan los valores por defecto que necesita Formik. Andate a ese archivo y despues volves aca...

	Ahora que ya viste como generamos los valores iniciales, simplemente haces un destructuring de ellos en un objeto initialValues, y eso se lo pasas al componente <Formik />, que debe envuelve a cada uno de las PAGINAS. Si te das cuenta, este mismo componente tiene la accion que se va a ejucutar en el momento del submit. Por el momento no hay restricciones en cuanto a si un input es requerido o no, pero luego las ponemos, esto se debe a que para irlo probando, tendriamos que llenar todas las inputs, lo cual seria horrible de hacer, asi que cuando hagas submit al form, deberias ver impresos en la consola los valores que pusiste en los input de TODA las pagina.
	
	Tambien cada pagina esta envuelta en un componente <Form />.

	Ahora andate a NuevoCliente...
	*/
}

export const initialValues = {
	...createValues,
	...datosValues,
	...origenFondos,
	...refComercialesValues,
	...refBancariasValues,
	...refPersonales1Values,
	...refPersonales2Values
}

function PersonaNaturalCreate() {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={(values) => {
				console.log(values)
				for (const value in values) {
					console.log(value)
				}
			}}
		>
			<Form>
				<div className='form-title-container'>
					<h2>Crear Un Nuevo Cliente</h2>
					<p className='form-description'>Crear un nuevo cliente.</p>
				</div>
				<NewClient id='nuevo-cliente' />
				<OrigenFondos />
				<DatosProfesionalesEconomicos id='datos-profesionales-economicos' />
				<Referencias id='referencias' />
				<SubmitBtn />
			</Form>
		</Formik>
	)
}

export default PersonaNaturalCreate
