import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { FormTextInput } from '../pages/utils/formikComponentsEndpoint'
import authContext from '../../context/auth/authContext'
import themeContext from '../../context/theme/themeContext'
import { FaMoon, FaSun } from 'react-icons/fa'
import Alerts from '../pages/alerts/Alerts'
import alertsContext from '../../context/alerts/alerts/alertsContext'

function Login(props) {
	// Username es realmente el email
	const initialValues = {
		username: '',
		password: ''
	}

	const { loadUser, loginUser, isAuthenticated } = useContext(authContext)
	const { theme, toggleTheme } = useContext(themeContext)
	const { addAlert } = useContext(alertsContext)

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push('/app/inicio')
			loadUser()
		}
		// eslint-disable-next-line
	}, [isAuthenticated])

	async function handleSubmit(values) {
		if ((await loginUser(values)) === 0) {
			addAlert('Usuario No Registrado')
		}
	}

	return (
		<>
			<div className='fixed w-full bg-white-gray'>
				<div className='max-w-screen-xl h-24 px-8 flex items-center justify-between mx-auto'>
					<h1 className='text-black-white text-2xl font-bold'>niudot</h1>
					<div className='text-black-white flex items-center'>
						<span className='sm:hidden'>¿Aún no tienes una cuenta? </span>
						<Link to='/register'>
							<span className='ml-2 mr-6 font-bold cursor-pointer hover:underline text-blue-blue'>
								Regístrate
							</span>
						</Link>

						<div
							className='w-14 h-8 bg-gray-200 rounded-full flex-shrink-0 p-1 dark:bg-gray-cstm-2 transition'
							onClick={toggleTheme}
						>
							<div
								className={`bg-white w-6 h-6 rounded-full shadow-md transition dark:bg-blue-700 transform flex justify-center items-center ${
									theme && 'translate-x-6'
								}`}
							>
								{theme ? (
									<FaMoon className='text-white fill-current' />
								) : (
									<FaSun className='text-blue-500 fill-current' />
								)}
							</div>
						</div>
					</div>
				</div>
			</div>

			<Alerts />

			<div className='bg-white-gray m-auto h-full flex flex-col justify-center items-center sm:block sm:pt-36'>
				<div className='flex flex-col items-center justify-center'>
					<h1 className='text-black-white font-bold text-3xl select-none'>
						Bienvenido
					</h1>
					<Formik
						initialValues={initialValues}
						validationSchema={Yup.object({
							username: Yup.string()
								.email('Correo Electrónico Invalido')
								.required('Correo Electrónico Requerido'),
							password: Yup.string()
								.required('Contraseña Requerida')
								.min(6, 'Minimo 6 caracteres')
						})}
						onSubmit={(values) => handleSubmit(values)}
					>
						<Form>
							<div className='mt-12 mb-6 w-80 sm:w-64'>
								<div className='mb-2'>
									<FormTextInput
										name='username'
										placeholder='Correo Electrónico'
										label='Correo Electrónico'
										boldLabel={true}
									/>
								</div>
								<div>
									<FormTextInput
										name='password'
										placeholder='Contraseña'
										label='Contraseña'
										type='password'
										boldLabel={true}
									/>
								</div>
							</div>
							<button className='btn w-full bg-blue-blue'>Ingresar</button>
						</Form>
					</Formik>
					<p className='mt-6 font-bold text-blue-500 dark:text-blue-700 cursor-pointer hover:underline'>
						Recuperar Contraseña
					</p>
				</div>
			</div>
		</>
	)
}

export default Login
