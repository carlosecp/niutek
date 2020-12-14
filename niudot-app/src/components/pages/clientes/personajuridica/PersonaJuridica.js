import React, { useState } from 'react'

import PageMenu from '../../utils/PageMenu'
import SearchUserForm from '../../utils/SearchUserForm'

import CreateNewClientBtn from '../../utils/CreateNewClientBtn'
import PersonaJuridicaCreate from './PersonaJuridicaCreate'
import Alerts from '../../alerts/Alerts'

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
		<>
			<Alerts />
			<div>
				<SearchUserForm />
				{showCreateFormButton ? (
					<CreateNewClientBtn setShowForm={setShowCreateFormButton} />
				) : (
					<PersonaJuridicaCreate />
				)}
			</div>
			<PageMenu
				activeSection={activeSection}
				setActiveSection={setActiveSection}
				sections={sections}
			/>
		</>
	)
}

export default PersonaJuridica
