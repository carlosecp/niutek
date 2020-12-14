import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { FormTextInput } from '../pages/utils/formikComponentsEndpoint'
import authContext from '../../context/auth/authContext'
import themeContext from '../../context/theme/themeContext'
import { FaMoon, FaSun } from 'react-icons/fa'

function Register(props) {
	const initialValues = {
		name: '',
		email: '',
		password: '',
		password_conf: ''
	}

	const { loadUser, registerUser, isAuthenticated } = useContext(authContext)
	const { theme, toggleTheme } = useContext(themeContext)

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push('/inicio')
			loadUser()
		}
		// eslint-disable-next-line
	}, [isAuthenticated, props.history])

	function handleSubmit({ name, email, password }) {
		registerUser({ name, email, password })
	}

	return (
		<>
			<div className='fixed w-full bg-white-gray'>
				<div className='max-w-screen-xl h-24 px-8 flex items-center justify-between mx-auto'>
					<h1 className='text-black-white text-2xl font-bold'>niudot</h1>
					<div className='text-black-white flex items-center'>
						<span className='sm:hidden'>¿Ya tienes una cuenta?</span>
						<Link to='/login'>
							<span className='ml-2 mr-6 font-bold cursor-pointer hover:underline text-blue-blue'>
								Inicia Sesión
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
			<div className='bg-white-gray m-auto h-full flex flex-col justify-center items-center'>
				<h1 className='text-black-white font-bold text-3xl select-none'>
					Registrarse
				</h1>
				<Formik
					initialValues={initialValues}
					validationSchema={Yup.object({
						name: Yup.string().required()
					})}
					onSubmit={(values) => handleSubmit(values)}
				>
					<Form>
						<div className='mt-12 mb-6 w-80 sm:w-64'>
							<div className='mb-2'>
								<FormTextInput
									name='name'
									placeholder='Nombre'
									label='Nombre'
									boldLabel={true}
								/>
							</div>
							<div className='mb-2'>
								<FormTextInput
									name='email'
									placeholder='Correo Electrónico'
									label='Correo Electrónico'
									boldLabel={true}
								/>
							</div>
							<div className='mb-2'>
								<FormTextInput
									name='password'
									label='Contraseña'
									type='password'
									className='form-field w-full'
									boldLabel={true}
								/>
							</div>
							<div className='mb-2'>
								<FormTextInput
									name='password_conf'
									label='Confirmar Contraseña'
									type='password'
									className='form-field w-full'
									boldLabel={true}
								/>
							</div>
						</div>
						<button className='btn w-full bg-blue-blue'>Crear Cuenta</button>
					</Form>
				</Formik>
			</div>
		</>
	)
}

export default Register
