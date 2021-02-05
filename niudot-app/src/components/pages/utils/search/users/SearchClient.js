import React from 'react'
import axios from 'axios'
import { Field, Form, Formik, useFormikContext } from 'formik'
import * as Yup from 'yup'
import requestConfig from '../../../../../utils/requestConfig'
import spinner from '../../../../../assets/images/spinner.png'
import { Dropdown } from '../../forms'
import { FaSearch } from 'react-icons/fa'

const SearchClient = ({
	loading,
	setLoading,
	matches,
	setMatches,
	fetchClient,
	fetchingClient,
	path,
}) => {
	const getUsers = async (data) => {
		setLoading(true)
		try {
			const res = await axios.post(
				`${process.env.REACT_APP_URL}/search/clientes_${path}`,
				{ search: data, p_cod_empresa: 1 },
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
				initialValues={{ search: '', clientId: null }}
				validationSchema={Yup.object({
					search: Yup.mixed().required(),
				})}
				onSubmit={(values) => {
					getUsers(values.search)
					values.clientId = 0
				}}
			>
				<Form>
					<ControlledForms
						loading={loading}
						matches={matches}
						fetchClient={fetchClient}
						fetchingClient={fetchingClient}
					/>
				</Form>
			</Formik>
		</div>
	)
}

const ControlledForms = ({ loading, matches, fetchClient, fetchingClient }) => {
	const {
		values: { clientId },
	} = useFormikContext()

	const handleSubmit = () => {
		if (clientId) {
			fetchClient(clientId)
		}
	}

	return (
		<>
			<div className='mt-2'>
				<label className='text-black-white font-bold'>Nombre del Cliente</label>
				<div className='flex gap-2 w-72 sm:w-56'>
					<Field
						name='search'
						type='text'
						className='form-field flex-1'
						placeholder='Nombre del Cliente'
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
				<Dropdown label='Clientes' size='md' name='clientId'>
					<option value='0' selected={true} disabled label='Seleccione' />
					{matches.map((client) => (
						<option key={client.cod_cliente} value={client.cod_cliente}>
							{client.cod_cliente} - {client.nombres} {client.apellidos}{' '}
							{client.nombre}
						</option>
					))}
				</Dropdown>
			</div>
			<button
				type='button'
				disabled={fetchingClient || !clientId}
				className={`mt-3 btn flex items-center gap-2 ${
					fetchingClient || !clientId
						? fetchingClient
							? 'btn-disabled cursor-wait'
							: 'btn-disabled cursor-not-allowed'
						: 'bg-blue-blue btn-border-blue'
				}`}
				onClick={handleSubmit}
			>
				{fetchingClient || !clientId
					? fetchingClient
						? 'Leyendo Cliente'
						: 'Seleccione Cliente'
					: 'Editar Cliente'}
			</button>
		</>
	)
}

export default SearchClient
