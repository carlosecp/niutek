// React and Router Stuff
import React, { useState } from 'react'
// Extra libraries
import { FaSearch } from 'react-icons/fa'
import axios from 'axios'
import { Form, Formik } from 'formik'
// Images
import spinner from '../../../../../assets/images/spinner-white.png'
// Other Components
import { Dropdown } from '../../../utils/forms'

const SearchUserForm = ({ setSearchUser }) => {
	const [loading, setLoading] = useState(false)
	const [searchValue, setSearchValue] = useState('')
	const [users, setUsers] = useState([])
	const [activeUserId, setActiveUserId] = useState(null)

	const handleUserNameInput = (event) => {
		setSearchValue(event.target.value)
	}

	const handleUserNameSubmit = async (event) => {
		event.preventDefault()

		// Hacemos una request al backend para que nos busque el usuario, esto va a retornarnos o el usuario, o un error.
		// Para simular la respuesta (usuario o error), por ahora vamos a utilizar un booleano. True si el usuario ha sido encontrado, false si no.
		const config = {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Credentials': 'true',
			},
		}

		setLoading(true)
		const res = await axios.post(
			'https://backend-dot-nicascriptproject.uc.r.appspot.com/search/user',
			JSON.stringify({ searchValue: searchValue }),
			config
		)
		setLoading(false)

		// Checkeamos a ver si el usuario ha sido encontrado o no.
		if (res.data.length > 0) {
			// Hemos encontrado este usuario, por lo tanto, es el usuario que queremos editar. Se lo tenemos que mandar al formulario.
			setUsers(res.data)
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
							value={searchValue}
						/>
						<button
							className={`w-10 h-10 rounded flex justify-center items-center cursor-pointer bg-blue-blue btn-border-blue ${
								loading && 'cursor-wait'
							}`}
						>
							{loading ? (
								<img
									src={spinner}
									alt='Loading...'
									className='w-4 h-4 animate-spin'
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
							label='Clientes'
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
								.sort((a, b) => {
									const a_listname = `${a.name} ${a.last_name}`
									const b_listname = `${b.name} ${b.last_name}`
									return a_listname > b_listname
										? 1
										: b_listname > a_listname
										? -1
										: 0
								})
								.map((user) => {
									const user_name = `${user.name} ${user.last_name}`
									return (
										<option
											key={user.id}
											value={user.id}
											label={`${user.id} - ${user_name}`}
										/>
									)
								})}
						</Dropdown>
					</div>
					<button
						type='submit'
						className={`mt-2 btn transition ${
							activeUserId
								? 'bg-blue-blue btn-border-blue'
								: 'btn-disabled cursor-not-allowed'
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
