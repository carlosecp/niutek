import React, { useState, useContext, useEffect } from 'react'
import { PageContext } from '../../../context/sections/SectionsContext'
import CreateNewClientBtn from '../utils/CreateNewClientBtn'
import PageMenu from '../utils/PageMenu'
import ProductsCreate from './ProductsCreate'
import Alerts from '../alerts/Alerts'
import routesContext from '../../../context/routes/routesContext'

function Products() {
	const [showCreateFormButton, setShowCreateFormButton] = useState(false)

	const { sections, changeCurrentSection, setSections } = useContext(
		PageContext
	)

	/* Custom Hook para las secciones. Su deber es expandir la seccion padre si se desea ver
	 * al hijo, pero no expandir el hijo a causa del padre, ni retraer los hijos a cuasa del
	 * padre TODO moverlo a un archivo diferente e implementar
	 * una forma automatica de crear las secciones */
	const useSection = (parent) => {
		//		Por alguna razon el context no permite al hook afectar su propio estado
		//		por lo que la funcionalidad no esta terminada
		const [state, setState] = useState(true)
		if (parent && sections[parent]) {
			const setChildState = (retracted) => {
				const [Pstate, setParentState] = sections[parent]
				if (!retracted) {
					setParentState(retracted)
				}
				setChildState(retracted)
			}
			return [state, setChildState]
		}
		return [state, setState]
	}

	const Mainsections = {
		'datos-profesionales-y-economicos': useState(true),
		referencias: useSection(false)
	}
	const refchilds = {
		comerciales: useSection('referencias'),
		bancarias: useSection('referencias'),
		personales: useSection('referencias')
	}

	const PNsections = {
		...Mainsections,
		...refchilds,
		current: 'datos-profesionales-y-economicos'
	}
	/* Hook a correr  con la creacion del componente. Para inicializar
	 * las secciones en el contexto de la pagina*/

	const { changePage } = useContext(routesContext)
	useEffect(() => {
		setSections(PNsections)
		changeCurrentSection('datos-profesionales-y-economicos')

		// Esto es para el context de los titulos
		changePage('Productos')

		// eslint-disable-next-line
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
