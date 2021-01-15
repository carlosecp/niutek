// React and Router Stuff
import React, { useState, useContext, useEffect } from 'react'
// Other Components
import SearchUserForm from '../../utils/search/users/SearchUserForm'
import CreateNewClientBtn from '../../utils/CreateNewClientBtn'
import NaturalPersonCreate from './NaturalPersonCreate'
import routesContext from '../../../../context/routes/routesContext'

const NaturalPerson = () => {
	// Este useEffect simplemente se encarga de cambiar el nombre de la pagina cuando se entra por primera vez.
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Persona Natural')
		// eslint-disable-next-line
	}, [])

	// Esta variable controla si se va a crear un nuevo usuario en vez de editar uno nuevo.
	const [createClient, setCreateClient] = useState(false)

	// Esta variable almacena el usuario que vamos a editar, en caso de que este sea encontrado desde el SearchUserForm
	const [user, setUser] = useState(null)

	const setSearchUser = (foundUser) => {
		setUser(foundUser)
	}

	// Esta variable controla si el formulario se va a mostrar o no.
	// En caso de que el formulario se muestre, tambien determina si es un formulario para crear un nuevo cliente o para editar.
	const [showForm, setShowForm] = useState({
		show: false,
		type: null
	})

	useEffect(() => {
		if (user || createClient) {
			if (user) {
				setShowForm({ show: true, type: 'edit' })
			} else {
				setShowForm({ show: true, type: 'create' })
			}
		} else {
			setShowForm({ show: false, type: null })
		}
	}, [user, createClient])

	return showForm.show ? (
		<NaturalPersonCreate type={showForm.type} user={user} />
	) : (
		<>
			<SearchUserForm setSearchUser={setSearchUser} />
			<CreateNewClientBtn setCreateClient={setCreateClient} />
		</>
	)
}

export default NaturalPerson
