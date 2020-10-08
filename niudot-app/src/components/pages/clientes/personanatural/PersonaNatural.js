import React, { useState } from 'react'
import CreateNewClientBtn from '../../utils/CreateNewClientBtn'
import SearchUserForm from '../../utils/SearchUserForm'
import PersonaNaturalCreate from './PersonaNaturalCreate'

function PersonaNatural() {
	const [showCreateFormButton, setShowCreateFormButton] = useState(true)

	return (
		<>
			<SearchUserForm />
			{showCreateFormButton ? (
				<CreateNewClientBtn setShowForm={setShowCreateFormButton} />
			) : (
				<PersonaNaturalCreate />
			)}
		</>
	)
}

export default PersonaNatural
