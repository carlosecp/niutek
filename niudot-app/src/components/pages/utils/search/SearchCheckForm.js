import React, { useState } from "react"

import { FaSearch } from "react-icons/fa"
import axios from "axios"
import { Form, Formik } from "formik"
// Images
import spinner from "../../../../assets/images/spinner.png"

const SearchClient = ({ setSearchUser }) => {
	const [loading, setLoading] = useState(false)
	const [username, setUserName] = useState("")

	const handleUserNameInput = (event) => {
		setUserName(event.target.value)
	}

	const handleUserNameSubmit = async (event) => {
		event.preventDefault()

		// Hacemos una request al backend para que nos busque el usuario, esto va a retornarnos o el usuario, o un error.
		// Para simular la respuesta (usuario o error), por ahora vamos a utilizar un booleano. True si el usuario ha sido encontrado, false si no.
		const config = {
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Credentials": "true",
			},
		}

		setLoading(true)
		const res = await axios.post(
			`${process.env.REACT_APP_URL}/search/user`,
			JSON.stringify({ name: username }),
			config
		)
		setLoading(false)

		// Checkeamos a ver si el usuario ha sido encontrado o no.
		if (res.data.length > 0) {
			// Hemos encontrado este usuario, por lo tanto, es el usuario que queremos editar. Se lo tenemos que mandar al formulario.
			//setUsers(res.data)
			//setUserName('')
		} else {
			//setUsers([])
			//setActiveUserId(null)
		}
	}

	return (
		<div className="section mb-4">
			<h2 className="text-black-white font-bold text-xl">
				Buscar Cheque Existente
			</h2>
			<p className="text-gray-gray">
				Buscar entre los cheques registrados.
			</p>
			<form className="mt-2 mb-1" onSubmit={handleUserNameSubmit}>
				<div className="form-grid-layout">
					<div className="form-container-md flex gap-2">
						<input
							type="text"
							className="form-field block flex-1"
							placeholder="Datos del Cheque"
							onChange={handleUserNameInput}
							value={username}
						/>
						<button
							className={`w-10 h-10 rounded flex justify-center items-center cursor-pointer ${
								loading
									? "btn-disabled btn-border-disabled cursor-wait"
									: "bg-blue-blue btn-border-blue"
							}`}
						>
							{loading ? (
								<img
									src={spinner}
									alt="Loading..."
									className="w-6 h-6 animate-spin"
								/>
							) : (
								<FaSearch size={16} />
							)}
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default SearchClient
