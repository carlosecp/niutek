import React, { useState } from 'react'
import SearchUserForm from '../../utils/SearchUserForm'
import CreateNewClientBtn from '../../utils/CreateNewClientBtn'
import Alerts from '../../alerts/Alerts'
import SavingAccountOpeningCreate from './SavingAccountOpeningCreate'

function SavingAccountOpening() {

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
