// React and Router Stuff
import React, { useContext, useEffect } from 'react'
// Context
import routesContext from '../../../context/routes/routesContext'
// Other Components
import ProductsCreate from './ProductsCreate'

const Products = () => {
	/* Hook a correr  con la creacion del componente. Para inicializar
	 * las secciones en el contexto de la pagina*/

	const { changePage } = useContext(routesContext)
	useEffect(() => {
		// Esto es para el context de los titulos
		changePage('Productos')
		// eslint-disable-next-line
	}, [])

	return <ProductsCreate />
}

export default Products
