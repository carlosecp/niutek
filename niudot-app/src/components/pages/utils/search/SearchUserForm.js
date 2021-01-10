// React and Router Stuff
import React, { useEffect, useState } from 'react'
// Extra libraries
import { FaSearch } from 'react-icons/fa'
import axios from 'axios'
import { Form, Formik } from 'formik'
// Images
import spinner from '../../../../assets/images/spinner.png'
// Other Components
import { Dropdown } from '../../utils/forms'

const SearchUserForm = ({ setSearchUser }) => {
	const [loading, setLoading] = useState(false)
	const [username, setUserName] = useState('')
	const [users, setUsers] = useState([])
	const [activeUserId, setActiveUserId] = useState(null)

	const handleUserNameInput = (event) => {
		setUserName(event.target.value)
	}

	const handleUserNameSubmit = async (event) => {
		event.preventDefault()

		// Hacemos una request al backend para que nos busque el usuario, esto va a retornarnos o el usuario, o un error.
		// Para simular la respuesta (usuario o error), por ahora vamos a utilizar un booleano. True si el usuario ha sido encontrado, false si no.
		const config = {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Credentials': 'true'
			}
		}

		setLoading(true)
		const res = await axios.post(
			'https://backend-dot-nicascriptproject.uc.r.appspot.com/search/user',
			JSON.stringify({ name: username }),
			config
		)
		setLoading(false)

		// Checkeamos a ver si el usuario ha sido encontrado o no.
		if (res.data.length > 0) {
			// Hemos encontrado este usuario, por lo tanto, es el usuario que queremos editar. Se lo tenemos que mandar al formulario.
			setUsers(res.data)
			setUserName('')
		} else {
			setUsers([])
			setActiveUserId(null)
		}
	}

	return (
		<div className='section mb-4'>
			<h2 className='text-black-white font-bold text-xl'>
				Buscar Cliente Existente
			</h2>
			<p className='text-gray-gray'>Buscar entre los clientes registrados.</p>
			<form className='mt-2 mb-1' onSubmit={handleUserNameSubmit}>
				<div className='form-grid-layout'>
					<div className='form-container-md flex gap-2'>
						<input
							type='text'
							className='form-field block flex-1'
							placeholder='Nombre del Cliente'
							onChange={handleUserNameInput}
							value={username}
						/>
						<button
							className={`w-10 h-10 rounded bg-blue-blue btn-border-blue flex justify-center items-center cursor-pointer ${
								loading && 'disabled'
							}`}
						>
							{loading ? (
								<img
									src={spinner}
									alt='Loading...'
									className='w-10 h-10 animate-spin'
								/>
							) : (
								<FaSearch size={16} />
							)}
						</button>
					</div>
				</div>
			</form>
			<Formik
				initialValues={{ userId: '' }}
				onSubmit={(values) => {
					values.userId = activeUserId
					setSearchUser(users.filter((user) => user.id === +values.userId)[0])
				}}
			>
				<Form>
					<div className='form-grid-layout'>
						<Dropdown
							size='md'
							name='userId'
							label='Usuarios'
							onChange={(e) => setActiveUserId(e.target.value)}
							value={activeUserId}
						>
							<option
								selected={!activeUserId}
								disabled
								value=''
								label='Seleccione Cliente'
							/>
							{users
								.sort((a, b) =>
									a.username > b.username ? 1 : b.username > a.username ? -1 : 0
								)
								.map((user) => (
									<option
										key={user.id}
										value={user.id}
										label={`${user.username} - ${user.name}`}
									/>
								))}
						</Dropdown>
					</div>
					<button
						type='submit'
						className={`mt-2 btn ${
							activeUserId
								? 'bg-blue-blue btn-border-blue'
								: 'bg-gray-cstm-15 text-gray-gray'
						}`}
						disabled={!activeUserId}
					>
						{activeUserId > 0 ? 'Editar Cliente' : 'Buscar Cliente'}
					</button>
				</Form>
			</Formik>
		</div>
	)
}

export default SearchUserForm
