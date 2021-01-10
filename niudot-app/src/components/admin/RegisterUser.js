import React, { useContext, useEffect } from 'react'
import routesContext from '../../context/routes/routesContext'

const RegisterUser = () => {
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Registrar Usuario')
		// eslint-disable-next-line
	}, [])

	return <div className='w-52 h-52 bg-yellow-500'></div>
}

export default RegisterUser
