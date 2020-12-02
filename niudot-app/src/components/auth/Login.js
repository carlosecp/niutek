import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { FormTextInput } from '../pages/utils/formikComponentsEndpoint'
import authContext from '../../context/auth/authContext'
import themeContext from '../../context/theme/themeContext'
import { FaMoon, FaSun } from 'react-icons/fa'

function Login(props) {
	const initialValues = {
		username: '',
		password: ''
	}

	const { loadUser, loginUser, isAuthenticated } = useContext(authContext)
	const { theme, toggleTheme } = useContext(themeContext)

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
			<div className='fixed w-full bg-white dark:bg-gray-dark-bg transition z-10'>
				<div className='max-w-screen-xl h-24 px-8 flex items-center justify-between mx-auto'>
					<h1 className='tw-header text-2xl dark:text-white'>niudot</h1>
					<div className='tw-text-secondary flex items-center'>
						<span className='sm:hidden'>¿Aún no tienes una cuenta? </span>
						<Link to='/register'>
							<span className='font-bold tw-text-accent pl-1 cursor-pointer hover:underline hover:text-blue-600 dark:text-blue-700 dark:hover:text-blue-500'>
								Regístrate
							</span>
						</Link>
					</div>
				</div>
			</div>
			<div className='m-auto h-full flex-col-center tw-page-bg transition'>
				<h1 className='tw-header text-3xl dark:text-white'>Bienvenido</h1>
				<Formik
					initialValues={initialValues}
					onSubmit={(values) => handleSubmit(values)}
				>
					<Form>
						<div className='mt-12 mb-6 w-80 sm:w-64'>
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
									className='tw-form-field w-full transition'
								/>
							</div>

							<div
								className='w-14 h-8 bg-gray-200 rounded-full flex-shrink-0 p-1 dark:bg-gray-700 transition'
								onClick={toggleTheme}
							>
								<div
									className={`bg-white w-6 h-6 rounded-full shadow-md transition dark:bg-blue-500 transform flex justify-center items-center ${
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

							<div className=''>
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
									className='tw-form-field w-full transition'
								/>
							</div>
						</div>
						<button className='w-full tw-button-accent transition select-none'>
							Ingresar
						</button>
					</Form>
				</Formik>
			</div>
		</>
	)
}

export default Login
