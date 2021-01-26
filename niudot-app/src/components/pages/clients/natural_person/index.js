import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import SearchClient from '../../utils/search/users/SearchClient'
import CreateNewClientBtn from '../../utils/CreateNewClientBtn'
import NaturalPersonCreate from './NaturalPersonCreate'
import routesContext from '../../../../context/routes/routesContext'
import requestConfig from '../../../../utils/requestConfig'

const NaturalPerson = () => {
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Persona Natural')
		// eslint-disable-next-line
	}, [])

	const [loading, setLoading] = useState(false)

	return false ? (
		<NaturalPersonCreate />
	) : (
		<>
			<SearchClient loading={loading} setLoading={setLoading} />
			<CreateNewClientBtn />
		</>
	)
}

export default NaturalPerson
