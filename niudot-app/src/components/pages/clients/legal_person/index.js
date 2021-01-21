// React and Router Stuff
import React, { useContext, useEffect, useState } from 'react'
// Context
import routesContext from '../../../../context/routes/routesContext'
// Other Components
import SearchClient from '../../utils/search/users/SearchClient'
import CreateNewClientBtn from '../../utils/CreateNewClientBtn'
import LegalPersonCreate from './LegalPersonCreate'

const LegalPerson = () => {
	const [showCreateFormButton, setShowCreateFormButton] = useState(true)
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Persona Juridica')
		// eslint-disable-next-line
	}, [])

	return (
		<>
			{showCreateFormButton && <SearchClient />}
			{showCreateFormButton ? (
				<CreateNewClientBtn setShowForm={setShowCreateFormButton} />
			) : (
				<LegalPersonCreate />
			)}
		</>
	)
}

export default LegalPerson
