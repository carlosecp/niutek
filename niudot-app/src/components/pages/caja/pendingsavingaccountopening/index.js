import React, { useState, useContext, useEffect } from 'react'
import SearchUserForm from '../../utils/SearchUserForm'
import CreateNewClientBtn from '../../utils/CreateNewClientBtn'
import Alerts from '../../alerts/Alerts'
import SavingAccountOpeningCreate from './SavingAccountOpeningCreate'
import routesContext from '../../../../context/routes/routesContext'

function SavingAccountOpening() {

	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Apertura de Cuenta de Ahorro Pendiente')
	}, [])

    const [showCreateFormButton, setShowCreateFormButton] = useState(false)

	return (
		<>
			<div>
				<Alerts />
				<SearchUserForm />
				{showCreateFormButton ? (
					<CreateNewClientBtn setShowForm={setShowCreateFormButton} />
				) : (
					<SavingAccountOpeningCreate />
				)}
			</div>
		</>
	)
}

export default SavingAccountOpening
