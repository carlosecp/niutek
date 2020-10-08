import React, { useState } from 'react'
import CreateNewClientBtn from '../../utils/CreateNewClientBtn'
import PageMenu from '../../utils/PageMenu'
import SearchUserForm from '../../utils/SearchUserForm'
import PersonaJuridicaCreate from './PersonaJuridicaCreate'

export default function PersonaJuridica() {
	const [showCreateFormButton, setShowCreateFormButton] = useState(false)
	const [activeSection, setActiveSection] = useState("datos-profesionales-y-economicos")

	const sections = ['datos-economicos', 'principales-proveedores', 'referencias', 'accionistas-mayoritarios', 'origen-fondos']

	return (
		<>
			<SearchUserForm />
			<PageMenu activeSection={activeSection} setActiveSection={setActiveSection} sections={sections}/>
			{showCreateFormButton ? (
				<CreateNewClientBtn setShowForm={setShowCreateFormButton} />
			) : (
				<PersonaJuridicaCreate />
			)}
		</>
	)
}
