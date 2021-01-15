// React and Router Stuff
import React, { useContext, useEffect, useState } from 'react'
// Context
import routesContext from '../../../../context/routes/routesContext'
// Other Components
import SearchUserForm from '../../utils/search/users/SearchUserForm'
import CreateNewClientBtn from '../../utils/CreateNewClientBtn'
import SavingAccountCancellationCreate from './SavingAccountCancellationCreate'

const SavingAccountCancellation = () => {
	const [showCreateFormButton, setShowCreateFormButton] = useState(false)
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Cancelación de Cuenta de Ahorro')
		// eslint-disable-next-line
	}, [])

	return (
		<>
			<SearchUserForm />
			{showCreateFormButton ? (
				<CreateNewClientBtn setShowForm={setShowCreateFormButton} />
			) : (
				<SavingAccountCancellationCreate />
			)}
		</>
	)
}

export default SavingAccountCancellation
