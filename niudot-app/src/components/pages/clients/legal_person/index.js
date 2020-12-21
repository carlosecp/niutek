// React and Router Stuff
import React, { useContext, useEffect, useState } from 'react'
// Context
import routesContext from '../../../../context/routes/routesContext'
// Other Components
import SearchUserForm from '../../utils/SearchUserForm'
import CreateNewClientBtn from '../../utils/CreateNewClientBtn'
import LegalPersonCreate from './LegalPersonCreate'

const LegalPerson = () => {
	const [showCreateFormButton, setShowCreateFormButton] = useState(false)
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Persona Juridica')
	}, [])

	return (
		<>
			<SearchUserForm />
			{showCreateFormButton ? (
				<CreateNewClientBtn setShowForm={setShowCreateFormButton} />
			) : (
				<LegalPersonCreate />
			)}
		</>
	)
}

export default LegalPerson
