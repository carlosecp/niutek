import React, { useState, useContext, useEffect } from 'react'
import SearchClient from '../../utils/search/users/SearchClient'
import NewFormBtn from '../../utils/NewFormBtn'
import NaturalPersonCreate from './NaturalPersonCreate'
import routesContext from '../../../../context/routes/routesContext'
import axios from 'axios'
import requestConfig from '../../../../utils/requestConfig'

const NaturalPerson = () => {
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Persona Natural')
		// eslint-disable-next-line
	}, [])

	const [loading, setLoading] = useState(false)
	const [fetchingClient, setFetchingClient] = useState(false)

	const [matches, setMatches] = useState([])
	const [client, setClient] = useState(null)
	const [form, setForm] = useState(false)

	const [savingClient, setSavingClient] = useState(false)

	const fetchClient = async (clientId) => {
		setFetchingClient(true)

		const res = await axios.post(
			`${process.env.REACT_APP_URL}/read/client`,
			{ p_cod_cliente: clientId },
			requestConfig
		)

		console.log(res.data)

		setFetchingClient(false)
		setClient({ p_cod_cliente: clientId, ...res.data })
		setMatches([])
		setLoading(false)
		setForm(true)
	}

	const writeForm = async (type, data) => {
		setSavingClient(true)
		try {
			const res = await axios.post(
				`${process.env.REACT_APP_URL}/${type}/cliente_natural`,
				data,
				requestConfig
			)
		} catch (err) {
			console.error(err)
		} finally {
			setSavingClient(false)
		}
	}

	return form ? (
		<NaturalPersonCreate
			clientData={client}
			writeForm={writeForm}
			savingClient={savingClient}
			goBack={() => {
				setForm(false)
				setClient(null)
			}}
		/>
	) : (
		<>
			<SearchClient
				loading={loading}
				setLoading={setLoading}
				matches={matches}
				setMatches={setMatches}
				fetchClient={fetchClient}
				fetchingClient={fetchingClient}
				path='cliente_natural'
			/>
			<NewFormBtn
				text={{
					title: 'Crear Un Nuevo Cliente',
					description: 'Registra Un Nuevo Cliente',
					proceed: 'Registra Un Nuevo Cliente',
				}}
				toggleForm={() => setForm(true)}
			/>
		</>
	)
}

export default NaturalPerson
