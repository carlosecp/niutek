import React, { useEffect, useContext } from 'react'
import { Formik, Form } from 'formik'
import { FormTextInput } from '../pages/utils/formikComponentsEndpoint'
import authContext from '../../context/auth/authContext'

function Login(props) {
  const initialValues = {
    username: '',
    password: ''
  }

  const { loadUser, loginUser, isAuthenticated } = useContext(authContext)

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
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form>
          <div className='form-container'>
            <FormTextInput
              name='username'
              classes='md'
              placeholder=''
              label='Nombre de usuario'
              type='text'
            />
            <FormTextInput
              name='password'
              classes='md'
              placeholder=''
              label='Constraseña'
              type='password'
            />
          </div>
          <input type='submit' value='Login Temporal' />
        </Form>
      </Formik>
    </div>
  )
}

export default Login
