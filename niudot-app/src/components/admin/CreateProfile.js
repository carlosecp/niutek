import React, { useContext, useEffect } from 'react'
import routesContext from '../../context/routes/routesContext'

const RegisterUser = () => {
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Crear Nuevo Perfil')
	}, [])

	return <div className='w-52 h-52 bg-blue-500'></div>
}

export default RegisterUser
