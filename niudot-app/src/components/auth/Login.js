import React, { useEffect, useContext } from 'react'
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
			<div className='transition w-full fixed bg-transparent'>
				<div className='h-24 flex items-center justify-between max-w-screen-xl mx-auto px-8 '>
					<h1 className='text-2xl font-bold dark:text-white'>niudot</h1>
					<p className='text-gray-600 dark:text-gray-text'>
						<span className='sm:hidden'>¿Aún no tienes una cuenta? </span>
						<span className='font-bold text-blue-500 pl-1'>Regístrate</span>
					</p>
				</div>
			</div>
			<div className='transition m-auto h-full flex flex-col items-center justify-center dark:bg-gray-1100'>
				<h1 className='text-3xl font-bold dark:text-white'>
					Bienvenido de vuelta
				</h1>
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
										className='font-bold dark:text-gray-text'
									>
										Correo Electrónico
									</label>
								</div>
								<FormTextInput
									name='username'
									placeholder=''
									label=''
									type='text'
									className='tailwind-form-field w-80 transition duration-200 '
								/>
							</div>
							<div>
								<div className='mb-1'>
									<label
										htmlFor='username'
										className='font-bold dark:text-gray-text '
									>
										Contraseña
									</label>
								</div>
								<FormTextInput
									name='password'
									placeholder=''
									label=''
									type='password'
									className='tailwind-form-field w-80 transition duration-200'
								/>
							</div>
						</div>
						<button className='w-80 cursor-pointer bg-blue-500 rounded py-2 text-white font-bold transition duration-200 hover:bg-blue-600'>
							Ingresar
						</button>
					</Form>
				</Formik>
				<div
					className='w-12 h-12 sm:w-14 sm:h-14 absolute right-12 bottom-12 sm:right-8 sm:bottom-8 rounded-full bg-blue-500 cursor-pointer flex items-center justify-center fill-current transition duration-200 text-white hover:bg-blue-600 dark:text-gray-1100'
					onClick={toggleTheme}
				>
					<FaLightbulb />
				</div>
			</div>
		</>
	)
}

export default Login
