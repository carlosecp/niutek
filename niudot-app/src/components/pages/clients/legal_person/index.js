import React, { useState, useContext, useEffect } from 'react'
import SearchClient from '../../utils/search/users/SearchClient'
import NewFormBtn from '../../utils/NewFormBtn'
import LegalPersonCreate from './LegalPersonCreate'
import routesContext from '../../../../context/routes/routesContext'
import axios from 'axios'
import requestConfig from '../../../../utils/requestConfig'
import alertsContext from '../../../../context/alerts/alertsContext'

const LegalPerson = () => {
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Persona Jurídica')
		// eslint-disable-next-line
	}, [])

	const [loading, setLoading] = useState(false)
	const [fetchingClient, setFetchingClient] = useState(false)
	const [sendingForm, setSendingForm] = useState(false)

	const [matches, setMatches] = useState([])
	const [client, setClient] = useState(null)
	const [form, setForm] = useState(false)

	const { addAlert } = useContext(alertsContext)

	const fetchClient = async (clientId) => {
		setFetchingClient(true)

		const res = await axios.post(
			`${process.env.REACT_APP_URL}/read/datos_cliente_juridico`,
			{ p_cod_cliente: clientId, p_cod_empresa: 1, p_cod_sucursal: 0 },
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
		setSendingForm(true)
		console.log('Esto es lo que estoy enviando: ', data)
		try {
			const res = await axios.post(
				`${process.env.REACT_APP_URL}/${type}/clientes_juridico`,
				data,
				requestConfig
			)
			console.log(res)
			addAlert(res.data)
		} catch (err) {
			console.log('Persona Juridica (writeForm): ', err)
			addAlert(err, 'error')
		} finally {
			setSendingForm(false)
		}
	}

	return form ? (
		<LegalPersonCreate
			clientData={client}
			writeForm={writeForm}
			sendingForm={sendingForm}
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
				path='juridico'
			/>
			<NewFormBtn
				text={{
					title: 'Crear Un Nuevo Cliente Persona Jurídica',
					description: 'Registra un nuevo cliente persona jurídica.',
					proceed: 'Registra Un Nuevo Cliente',
				}}
				toggleForm={() => setForm(true)}
			/>
		</>
	)
}

export default LegalPerson
