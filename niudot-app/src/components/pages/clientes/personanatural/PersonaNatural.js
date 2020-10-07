import { Formik } from 'formik'
import React, { useState } from 'react'
import CreateNewClientBtn from '../../utils/CreateNewClientBtn'
import SearchUserForm from '../../utils/SearchUserForm'
import PersonaNaturalCreate from './PersonaNaturalCreate'

function PersonaNatural() {
	const [showCreateFormButton, setShowCreateFormButton] = useState(false)

	return (
		<Formik
			initialValues={{
				codigoCliente: '',
				nombres: '',
				apellidos: '',
				tipoId: '',
				numeroId: '',
				nacionalidad: '',
				fechaNacimiento: '',
				estadoCivil: '',
				numeroHijos: '',
				direccion: '',
				telefono1: '',
				telefono2: '',
				municipio: '',
				departamento: '',
				cargoPublico: false,
				profesion: ''
			}}
			onSubmit={(values) => {
				alert(JSON.stringify(values, null, 2))
			}}
		>
			<>
				<SearchUserForm />
				{showCreateFormButton ? (
					<CreateNewClientBtn setShowForm={setShowCreateFormButton} />
				) : (
					<PersonaNaturalCreate />
				)}
			</>
		</Formik>
	)
}

export default PersonaNatural
