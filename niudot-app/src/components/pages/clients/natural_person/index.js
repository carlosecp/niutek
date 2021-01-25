import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import SearchClient from '../../utils/search/users/SearchClient'
import CreateNewClientBtn from '../../utils/CreateNewClientBtn'
import NaturalPersonCreate from './NaturalPersonCreate'
import routesContext from '../../../../context/routes/routesContext'
import requestConfig from '../../../../utils/requestConfig'

const NaturalPerson = () => {
	const { changePage } = useContext(routesContext)
	// Show form or not, and determine the type of the form to show (new cliente or previous client)
	const [form, setForm] = useState(false)
	const [loading, setLoading] = useState(false)

	// Esta variale controla al usuario seleccionado tras la busqueda
	// Este es solo el id del cliente seleccionado, no el cliente en si
	const [selected, setSelected] = useState(null)

	// Esta es el usuario, si es nulo, pues vamos a crear un nuevo usuario, si no, entonces vamos a editarlo
	const [client, setClient] = useState(null)

	// Este es la funcion que se encarga de traer la informacion de Persona Natural para el cliente seleccionado
	const getClientData = async () => {
		setLoading(true)
		try {
			const res = await axios.post(
				'https://backend-dot-nicascriptproject.uc.r.appspot.com/read/client',
				{ p_cod_cliente: selected },
				requestConfig
			)
			setClient(res.data)
		} catch (err) {
			console.error(err)
		} finally {
			setLoading(false)
		}
	}

	// Esta es la funcion que se encarga de escribir un nuevo usuario o actualizar uno existente, basicamente guarda lo que esta en el formulario en la base de datos.
	const writeClient = async (type, data) => {
		console.log('LO QUE ESTOY MANDANDO', data)
		try {
			const res = await axios.post(
				`https://backend-dot-nicascriptproject.uc.r.appspot.com/update/cliente_natural`,
				data,
				requestConfig
			)
			console.log('LO QUE ESTOY RECIBIENDO', res.data)
		} catch (err) {
			console.error(err)
		}
	}

	// Esto lo que hace es que si hay un cliente seleccionado, mandamos a pedir la informacion especifica de ese cliente
	useEffect(() => {
		if (selected) {
			getClientData()
		}
	}, [selected])

	// Y pues, esto solo cambia el titulo de la pagina
	useEffect(() => {
		changePage('Persona Natural')
		// eslint-disable-next-line
	}, [])

	return form ? (
		<NaturalPersonCreate
			client={client}
			clientId={selected}
			writeClient={writeClient}
		/>
	) : (
		<>
			<SearchClient
				selected={selected}
				setSelected={setSelected}
				allowed={client ? true : false}
				toggleForm={() => setForm(true)}
			/>
			<CreateNewClientBtn toggleForm={() => setForm(true)} />
		</>
	)
}

export default NaturalPerson
