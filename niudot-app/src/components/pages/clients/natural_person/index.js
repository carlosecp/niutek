// React and Router Stuff
import React, { useState, useContext, useEffect } from 'react'
// Other Components
import SearchUserForm from '../../utils/SearchUserForm'
import CreateNewClientBtn from '../../utils/CreateNewClientBtn'
import NaturalPersonCreate from './PersonaNaturalCreate'
import routesContext from '../../../../context/routes/routesContext'

const NaturalPerson = () => {
	const [showCreateFormButton, setShowCreateFormButton] = useState(false)

	const { changePage } = useContext(routesContext)
	useEffect(() => {
		changePage('Persona Natural')

		// eslint-disable-next-line
	}, [])

	return (
		<>
			<SearchUserForm />
			{showCreateFormButton ? (
				<CreateNewClientBtn setShowForm={setShowCreateFormButton} />
			) : (
				<NaturalPersonCreate />
			)}
		</>
	)
}

export default NaturalPerson
