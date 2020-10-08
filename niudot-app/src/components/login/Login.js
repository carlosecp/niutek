import React, { useContext } from 'react'
import { Formik, Form } from 'formik'
// import { Link } from 'react-router-dom'
import { FormTextInput } from '../pages/utils/formikComponentsEndpoint'
import userContext from '../../context/user/userContext'

function Login() {
	const {logUser} = useContext(userContext)

	return (
		<Formik
			initialValues={{
				username: '',
				password: ''
			}}
			onSubmit={async (values) => {
				try {
					const req = await fetch('http://34.68.232.139:5000/login', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(values),
					})
					const data = await req.json()

					console.log(data)
					logUser(data['user_token'])

				} catch (err) {
					console.error(err.message)
				}
			}}
		>
			<Form>
				<div className='form'>
					<div className='form-container'>
						<FormTextInput
							name='username'
							classes='lg'
							placeholder='Enter username'
						/>
						<FormTextInput
							name='password'
							classes='lg'
							placeholder='Enter password'
							type='password'
						/>
						<button type='submit'>Submit</button>
					</div>
				</div>
			</Form>
		</Formik>
	)
}

export default Login
