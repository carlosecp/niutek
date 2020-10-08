import React, { useState } from 'react'
import { Formik } from 'formik'

import PageMenu from '../../utils/PageMenu'
import SearchUserForm from '../../utils/SearchUserForm'

import CreateNewClientBtn from '../../utils/CreateNewClientBtn'
import PersonaNaturalCreate from './PersonaNaturalCreate'

function PersonaNatural() {
	const [showCreateFormButton, setShowCreateFormButton] = useState(false)
	const [activeSection, setActiveSection] = useState("datos-profesionales-y-economicos")

	const sections = ['datos-profesionales-y-economicos', 'referencias', 'comerciales', 'bancarias', 'personales']

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
				<PageMenu activeSection={activeSection} setActiveSection={setActiveSection} sections={sections}/>
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
