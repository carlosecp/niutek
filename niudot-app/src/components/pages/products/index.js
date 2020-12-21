import React, { useState, useContext, useEffect } from 'react'
import CreateNewClientBtn from '../utils/CreateNewClientBtn'
import PageMenu from '../utils/PageMenu'
import ProductsCreate from './ProductsCreate'
import Alerts from '../alerts/Alerts'
import routesContext from '../../../context/routes/routesContext'

function Products() {
	const [showCreateFormButton, setShowCreateFormButton] = useState(false)

	/* Hook a correr  con la creacion del componente. Para inicializar
	 * las secciones en el contexto de la pagina*/

	const { changePage } = useContext(routesContext)
	useEffect(() => {

		// Esto es para el context de los titulos
		changePage('Productos')

	}, [])

	return (
		<>
			<div>
				<Alerts />
				{showCreateFormButton ? <CreateNewClientBtn /> : <ProductsCreate />}
			</div>
			<PageMenu />
		</>
	)
}

export default Products
