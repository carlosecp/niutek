import React, { useContext } from 'react'
import { Formik, Form } from 'formik'
import { FormTextInput } from '../pages/utils/formikComponentsEndpoint'

function Login() {
  const initialValues = {
    email: '',
    password: ''
  }

  function handleSubmit(values) {
    console.log(values)
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
              name='email'
              classes='md'
              placeholder='juan@example.com'
              label='Correo Electronico'
              type='email'
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
