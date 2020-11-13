import React, { useContext } from 'react'
import { Formik, Form } from 'formik'
// import { Link } from 'react-router-dom'
import { FormTextInput } from '../pages/utils/formikComponentsEndpoint'
import authContext from '../../context/auth/authContext'

function Login() {
	const {logUser} = useContext(authContext)

	const initialValues = {
		username: '',
		password: ''
	}

	const onSubmit = async (values) => {
		try {
			const req = await fetch('https://nicascriptproject.uc.r.appspot.com/auth', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Credentials': 'true'
				},
				mode:'cors',
				body: JSON.stringify(values),
			})
			const data = await req.text()
			console.log(data)

		} catch (err) {
			console.error(err.message)
		}
	}

	return (
		<div className='login-container'>
			<div style={{display:'flex', justifyContent: 'center'}}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<Form>
						<div className='form'>
							<div className='form-container vlogin-container'>
								<FormTextInput
									name='username'
									classes='lg'
									placeholder='Enter username'
									label='Username'
								/>
								<FormTextInput
									name='password'
									label='Password'
									classes='lg'
									placeholder='Enter password'
									type='password'
								/>
								<button type='submit' style={{height:"30px"}}>Submit</button>
							</div>
						</div>
					</Form>
				</Formik>
			</div>
		</div>
	)
}

export default Login
