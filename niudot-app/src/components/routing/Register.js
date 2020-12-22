// React and Router Stuff
import React, { useEffect, useContext } from 'react'
// Extra libraries
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
// Context
import authContext from '../../context/auth/authContext'
// Other Components
import { Text } from '../pages/utils/forms'
import Navbar from './Navbar'

const Register = (props) => {
	const initialValues = {
		name: '',
		email: '',
		password: '',
		password_conf: ''
	}

	const { user, loadUser, registerUser, isAuthenticated } = useContext(
		authContext
	)

	useEffect(() => {
		if (isAuthenticated && user) {
			props.history.push('/app/inicio')
			loadUser()
		}
		// eslint-disable-next-line
	}, [isAuthenticated])

	function handleSubmit({ name, email, password }) {
		registerUser({ name, email, password })
	}

	return (
		<>
			<Navbar prompt='¿Ya tienes una cuenta?' tag='Inicia Sesión' path='/' />

			<div className='bg-white dark:bg-gray-cstm-1 m-auto h-full flex flex-col justify-center items-center sm:block sm:pt-36'>
				<div className='flex flex-col items-center justify-center'>
					<h1 className='text-black-white font-bold text-3xl select-none'>
						Registrarse
					</h1>
					<Formik
						initialValues={initialValues}
						validationSchema={Yup.object({
							name: Yup.string().required('Nombre Requerido'),
							email: Yup.string()
								.email('Correo Electrónico Invalido')
								.required('Correo Electrónico Requerido'),
							password: Yup.string().min(6).required('Contraseña Requerida'),
							password_conf: Yup.string()
								.oneOf([Yup.ref('password'), null], 'Contraseñas No Coinciden')
								.required()
						})}
						onSubmit={(values) => handleSubmit(values)}
					>
						<Form>
							<div className='mt-12 mb-6 w-80 sm:w-64'>
								<div className='mb-2'>
									<Text
										name='name'
										placeholder='Nombre'
										label='Nombre'
										boldLabel={true}
									/>
								</div>
								<div className='mb-2'>
									<Text
										name='email'
										placeholder='Correo Electrónico'
										label='Correo Electrónico'
										boldLabel={true}
									/>
								</div>
								<div className='mb-2'>
									<Text
										name='password'
										placeholder='Contraseña'
										label='Contraseña'
										boldLabel={true}
										type='password'
									/>
								</div>
								<div className='mb-2'>
									<Text
										name='password_conf'
										placeholder='Confirmar Contraseña'
										label='Confirmar Contraseña'
										boldLabel={true}
										type='password'
									/>
								</div>
							</div>
							<button className='btn w-full bg-blue-blue'>Crear Cuenta</button>
						</Form>
					</Formik>
				</div>
			</div>
		</>
	)
}

export default Register
