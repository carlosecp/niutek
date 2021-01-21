// React and Router Stuff
import React, { useContext, useEffect } from 'react'
// Context
import routesContext from '../../../../context/routes/routesContext'
// Other Components
import SearchClient from '../../utils/search/users/SearchClient'
import FixedTermCertificateOpeningCreate from './FixedTermCertificateOpeningCreate'

const FixedTermCertificateOpening = () => {
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Apertura de Cuenta de Certificado a Plazo Fijo')
		// eslint-disable-next-line
	}, [])

	return (
		<>
			<SearchClient />
			<FixedTermCertificateOpeningCreate />
		</>
	)
}

export default FixedTermCertificateOpening
