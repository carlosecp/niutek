import React, { useState } from 'react'
import CreateNewClientBtn from '../../utils/CreateNewClientBtn'
import SearchUserForm from '../../utils/SearchUserForm'
import PersonaJuridicaCreate from './PersonaJuridicaCreate'

export default function PersonaJuridica() {
	const [showCreateFormButton, setShowCreateFormButton] = useState(false)

	return (
		<>
			<SearchUserForm />
			{showCreateFormButton ? (
				<CreateNewClientBtn setShowForm={setShowCreateFormButton} />
			) : (
				<PersonaJuridicaCreate />
			)}
		</>
	)
}
