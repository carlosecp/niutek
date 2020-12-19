import React, { useState, useContext, useEffect } from 'react'

import PageMenu from '../../utils/PageSectionMenu'
import SearchUserForm from '../../utils/SearchUserForm'
import CreateNewClientBtn from '../../utils/CreateNewClientBtn'
import { PageContext } from '../../../../context/sections/SectionsContext'
import Alerts from '../../alerts/Alerts'
import routesContext from '../../../../context/routes/routesContext'
import FixedTermCertificateOpeningCreate from './FixedTermCertificateOpeningCreate'

function FixedTermCertificateOpening() {

	const [showCreateFormButton, setShowCreateFormButton] = useState(false)

	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Apertura de Cuenta de Certificado a Plazo Fijo')
	}, [])

	return (
		<>
			<div>
				<Alerts />
				<SearchUserForm />
				{showCreateFormButton ? (
					<CreateNewClientBtn setShowForm={setShowCreateFormButton} />
				) : (
					<FixedTermCertificateOpeningCreate />
				)}
			</div>
		</>
	)
}

export default FixedTermCertificateOpening

