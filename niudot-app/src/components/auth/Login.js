import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { FormTextInput } from '../pages/utils/formikComponentsEndpoint'
import authContext from '../../context/auth/authContext'
import { FaLightbulb } from 'react-icons/fa'
import themeContext from '../../context/theme/themeContext'

function Login(props) {
	const initialValues = {
		username: '',
		password: ''
	}

	const { loadUser, loginUser, isAuthenticated } = useContext(authContext)
	const { toggleTheme } = useContext(themeContext)

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push('/inicio')
			loadUser()
		}
	}, [isAuthenticated, props.history])

	function handleSubmit(values) {
		loginUser(values)
	}

	return (
		<>
			<div className='fixed w-full bg-transparent transition'>
				<div className='max-w-screen-xl h-24 px-8 flex items-center justify-between mx-auto'>
					<h1 className='tw-header text-2xl'>niudot</h1>
					<p className='tw-text-secondary'>
						<span className='sm:hidden'>¿Aún no tienes una cuenta? </span>
						<Link to='/register'>
							<span className='font-bold tw-text-accent pl-1 cursor-pointer hover:underline hover:text-blue-600 dark:text-blue-700 dark:hover:text-blue-500'>
								Regístrate
							</span>
						</Link>
					</p>
				</div>
			</div>
			<div className='m-auto h-full flex-col-center tw-std-bg transition'>
				<h1 className='tw-header text-3xl'>Bienvenido de vuelta</h1>
				<Formik
					initialValues={initialValues}
					onSubmit={(values) => handleSubmit(values)}
				>
					<Form>
						<div className='mt-12 mb-4'>
							<div className='mb-2'>
								<div className='mb-1'>
									<label
										htmlFor='username'
										className='font-bold dark:text-gray-dark-text'
									>
										Correo Electrónico
									</label>
								</div>
								<FormTextInput
									name='username'
									placeholder=''
									label=''
									type='text'
									className='tw-form-field w-80 transition'
								/>
							</div>
							<div>
								<div className='mb-1'>
									<label
										htmlFor='username'
										className='font-bold dark:text-gray-dark-text'
									>
										Contraseña
									</label>
								</div>
								<FormTextInput
									name='password'
									placeholder=''
									label=''
									type='password'
									className='tw-form-field w-80 transition'
								/>
							</div>
						</div>
						<button className='w-80 tw-button-accent transition'>
							Ingresar
						</button>
					</Form>
				</Formik>
				<div
					className='absolute right-12 bottom-12 sm:right-8 sm:bottom-8 w-12 h-12 sm:w-14 sm:h-14 tw-rnd-button-accent transition'
					onClick={toggleTheme}
				>
					<FaLightbulb />
				</div>
			</div>
		</>
	)
}

export default Login
