// React and Router Stuff
import React, { useContext, useEffect } from 'react'
// Context
import routesContext from '../../../../context/routes/routesContext'
// Other Components
import SearchUserForm from '../../utils/SearchUserForm'
import FixedTermCertificateOpeningCreate from './FixedTermCertificateOpeningCreate'

const FixedTermCertificateOpening = () => {
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Apertura de Cuenta de Certificado a Plazo Fijo')
	}, [])

	return (
		<>
			<SearchUserForm />
			<FixedTermCertificateOpeningCreate />
		</>
	)
}

export default FixedTermCertificateOpening
