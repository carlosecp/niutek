import React, { useState } from 'react'
import { Formik } from 'formik'
import CreateNewClientBtn from '../../utils/CreateNewClientBtn'
import SearchUserForm from '../../utils/SearchUserForm'
import PersonaNaturalCreate from './PersonaNaturalCreate'

function PersonaNatural() {
	const [showCreateFormButton, setShowCreateFormButton] = useState(true)

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
				<RightMenu />
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
