// React and Router Stuff
import React, { useState, useContext, useEffect } from 'react'
// Other Components
import SearchUserForm from '../../utils/search/SearchUserForm'
import CreateNewClientBtn from '../../utils/CreateNewClientBtn'
import NaturalPersonCreate from './NaturalPersonCreate'
import routesContext from '../../../../context/routes/routesContext'

const NaturalPerson = () => {
	const [showCreateFormButton, setShowCreateFormButton] = useState(true)

	const { changePage } = useContext(routesContext)
	useEffect(() => {
		changePage('Persona Natural')
		// eslint-disable-next-line
	}, [])

	return (
		<>
			{showCreateFormButton && <SearchUserForm />}
			{showCreateFormButton ? (
				<CreateNewClientBtn setShowForm={setShowCreateFormButton} />
			) : (
				<NaturalPersonCreate />
			)}
		</>
	)
}

export default NaturalPerson
