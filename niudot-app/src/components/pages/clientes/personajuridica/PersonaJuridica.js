import React, { useState } from 'react'
import CreateNewClientBtn from '../../utils/CreateNewClientBtn'
import PageMenu from '../../utils/PageMenu'
import SearchUserForm from '../../utils/SearchUserForm'
import PersonaJuridicaCreate from './PersonaJuridicaCreate'

export default function PersonaJuridica() {
	const [showCreateFormButton, setShowCreateFormButton] = useState(false)

	return (
		<>
			<SearchUserForm />
			<PageMenu />
			{showCreateFormButton ? (
				<CreateNewClientBtn setShowForm={setShowCreateFormButton} />
			) : (
				<PersonaJuridicaCreate />
			)}
		</>
	)
}
