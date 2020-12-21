import React, { useContext, useEffect } from 'react'
import PageMenu from '../utils/PageMenu'
import routesContext from '../../../context/routes/routesContext'

function Products() {
	/* Hook a correr  con la creacion del componente. Para inicializar
	 * las secciones en el contexto de la pagina*/

	const { changePage } = useContext(routesContext)
	useEffect(() => {
		// Esto es para el context de los titulos
		changePage('Productos')
	}, [])

	return <PageMenu />
}

export default Products
