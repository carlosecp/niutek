import React, { useState } from 'react'
import { Formik } from 'formik'

import PageMenu from '../../utils/PageMenu'
import SearchUserForm from '../../utils/SearchUserForm'

import CreateNewClientBtn from '../../utils/CreateNewClientBtn'
import PersonaJuridicaCreate from './PersonaJuridicaCreate'

function PersonaJuridica() {
	const [showCreateFormButton, setShowCreateFormButton] = useState(false)
	const [activeSection, setActiveSection] = useState(
		'datos-profesionales-y-economicos'
	)

	const sections = [
		'datos-economicos',
		'principales-proveedores',
		'referencias',
		'accionistas-mayoritarios',
		'origen-fondos'
	]

	return (
		<Formik initialValues={{
			
		}}>
			<>
				<SearchUserForm />
				<PageMenu
					activeSection={activeSection}
					setActiveSection={setActiveSection}
					sections={sections}
				/>
				{showCreateFormButton ? (
					<CreateNewClientBtn setShowForm={setShowCreateFormButton} />
				) : (
					<PersonaJuridicaCreate />
				)}
			</>
		</Formik>
	)
}

export default PersonaJuridica
