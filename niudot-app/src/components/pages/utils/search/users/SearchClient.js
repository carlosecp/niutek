import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { Dropdown } from '../../../utils/forms'
import { FaSearch } from 'react-icons/fa'
import requestConfig from '../../../../../utils/requestConfig'
import spinner from '../../../../../assets/images/spinner-white.png'

const SearchUser = ({ selected, setSelected, allowed, toggleForm }) => {
	const [matches, setMatches] = useState([])
	const [loading, setLoading] = useState(false)

	const getClients = async (data) => {
		setLoading(true)

		try {
			const res = await axios.post(
				'https://backend-dot-nicascriptproject.uc.r.appspot.com/search/user',
				data,
				requestConfig
			)

			setMatches(res.data)
		} catch (err) {
			console.error(err)
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className='section mb-4'>
			<h2 className='text-black-white font-bold text-xl'>
				Buscar Cliente Existente
			</h2>
			<p className='text-gray-gray'>Buscar entre los clientes registrados.</p>
			<Formik
				initialValues={{ search: '' }}
				validationSchema={Yup.object({
					search: Yup.mixed().required(),
				})}
				onSubmit={(values) => getClients(values)}
			>
				<Form className='mt-2 flex flex-col'>
					<label className='text-black-white' htmlFor='search'>
						Nombre o ID del Cliente
					</label>
					<div className='flex gap-2 w-72'>
						<Field
							name='search'
							type='text'
							className='form-field flex-1'
							placeholder='Nombre o ID del Cliente'
						/>
						<button
							type='submit'
							className={`w-std h-std rounded flex justify-center items-center cursor-pointer ${
								loading
									? 'btn-disabled btn-border-disabled cursor-wait'
									: 'bg-blue-blue btn-border-blue'
							}`}
						>
							{loading ? (
								<img src={spinner} alt='' className='w-6 h-6 animate-spin' />
							) : (
								<FaSearch />
							)}
						</button>
					</div>
				</Form>
			</Formik>
			<Formik initialValues={{ selectedId: '' }} onSubmit={() => toggleForm()}>
				<Form>
					<div className='form-grid-layout'>
						<Dropdown
							size='md'
							name='selectedId'
							label='Clientes'
							onChange={(e) => setSelected(e.target.value)}
							value={selected || ''}
						>
							<option value='' selected='true' disabled label='Seleccione' />
							{matches
								.sort((a, b) =>
									a.nombres > b.nombres ? 1 : b.nombres > a.nombres ? -1 : 0
								)
								.map((match) => (
									<option
										key={match.cod_cliente}
										value={match.cod_cliente}
										label={`${match.cod_cliente} - ${match.nombres} ${match.apellidos}`}
									/>
								))}
						</Dropdown>
					</div>
					<button
						type='submit'
						className={`mt-2 btn ${
							selected && allowed
								? 'bg-blue-blue btn-border-blue'
								: 'btn-disabled cursor-not-allowed'
						}`}
						disabled={!selected || !allowed}
					>
						{selected ? 'Editar Cliente' : 'Buscar Cliente'}
					</button>
				</Form>
			</Formik>
		</div>
	)
}

export default SearchUser
