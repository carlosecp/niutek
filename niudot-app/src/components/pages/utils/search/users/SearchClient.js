import React, { useState } from 'react'
import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import requestConfig from '../../../../../utils/requestConfig'
import spinner from '../../../../../assets/images/spinner.png'
import { Dropdown } from '../../forms'
import { FaSearch } from 'react-icons/fa'

const SearchUser = ({ loading, setLoading }) => {
	const [matches, setMatches] = useState([])

	const getClients = async (data) => {
		setLoading(true)
		try {
			const res = await axios.post(
				`${process.env.REACT_APP_URL}/search/user`,
				data,
				requestConfig
			)
			console.log(res.data)
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
			>
				<Form>
					<div className='mt-2'>
						<label className='text-black-white font-bold'>
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
									<img
										src={spinner}
										alt='Loading...'
										className='w-6 h-6 animate-spin'
									/>
								) : (
									<FaSearch />
								)}
							</button>
						</div>
					</div>
					<div className='mt-2 form-grid-layout'>
						<Dropdown label='Clientes' size='md'>
							<option value='0' selected={true} disabled label='Seleccione' />
							{matches.map((client) => (
								<option key={client.cod_cliente} value={client.cod_cliente}>
									{client.cod_cliente} - {client.nombres} {client.apellido}
								</option>
							))}
						</Dropdown>
					</div>
				</Form>
			</Formik>
		</div>
	)
}

export default SearchUser
