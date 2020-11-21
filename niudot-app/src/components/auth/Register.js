import React, { useContext } from 'react'
import { Formik, Form } from 'formik'
import { FormTextInput } from '../pages/utils/formikComponentsEndpoint'

function Register() {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    password_conf: ''
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
              name='name'
              classes='md'
              placeholder='Juan Matus'
              label='Nombre'
            />
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
            <FormTextInput
              name='password_conf'
              classes='md'
              placeholder=''
              label='Confirmar Contraseña'
              type='password'
            />
          </div>
          <input type='submit' value='Register Temporal' />
        </Form>
      </Formik>
    </div>
  )
}

export default Register
