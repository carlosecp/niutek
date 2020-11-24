import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { FormTextInput } from '../pages/utils/formikComponentsEndpoint'
import authContext from '../../context/auth/authContext'
import themeContext from '../../context/theme/themeContext'
import { FaLightbulb } from 'react-icons/fa'

function Register(props) {
	const initialValues = {
		name: '',
		email: '',
		password: '',
		password_conf: ''
	}

	const { registerUser, isAuthenticated } = useContext(authContext)
	const { toggleTheme } = useContext(themeContext)

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push('/inicio')
		}
	}, [isAuthenticated, props.history])

	function handleSubmit(values) {
		if (values.password !== values.password_conf) {
			console.log('Las constraseñas deben ser iguales')
		} else {
			registerUser(values)
		}
	}

	return (
		<>
			<div className='fixed w-full bg-transparent transition'>
				<div className='max-w-screen-xl h-24 px-8 flex items-center justify-between mx-auto'>
					<h1 className='tw-header text-2xl'>niudot</h1>
					<p className='tw-text-secondary'>
						<span className='sm:hidden'>¿Ya tienes una cuenta? </span>
						<Link to='/login'>
							<span className='font-bold tw-text-accent pl-1 cursor-pointer hover:underline hover:text-blue-600 dark:text-blue-700 dark:hover:text-blue-500'>
								Inicia Sesión
							</span>
						</Link>
					</p>
				</div>
			</div>
			<div className='m-auto h-full flex-col-center tw-std-bg transition'>
				<h1 className='tw-header text-3xl'>Registrarse</h1>
				<Formik
					initialValues={initialValues}
					onSubmit={(values) => handleSubmit(values)}
				>
					<Form>
						<div className='mt-12 mb-4'>
							<div className='mb-2'>
								<div className='mb-1'>
									<label
										htmlFor='name'
										className='font-bold dark:text-gray-dark-text'
									>
										Nombre
									</label>
								</div>
								<FormTextInput
									name='name'
									placeholder=''
									label=''
									type='text'
									className='tw-form-field w-80 transition'
								/>
							</div>
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
							<div className='mb-2'>
								<div className='mb-1'>
									<label
										htmlFor='password'
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
							<div>
								<div className='mb-1'>
									<label
										htmlFor='password_conf'
										className='font-bold dark:text-gray-dark-text'
									>
										Confirmar Contraseña
									</label>
								</div>
								<FormTextInput
									name='password'
									placeholder=''
									label=''
									type='password_conf'
									className='tw-form-field w-80 transition'
								/>
							</div>
						</div>
						<button className='w-80 tw-button-accent transition'>
							Crear Cuenta
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

export default Register
