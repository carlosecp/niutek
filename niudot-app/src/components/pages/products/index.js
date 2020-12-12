import React, { useState, useContext, useEffect } from 'react'
import { PageContext } from '../../../context/sections/SectionsContext'
import alertsContext from '../../../context/alerts/alerts/alertsContext'
import CreateNewClientBtn from '../utils/CreateNewClientBtn'
import PageMenu from '../utils/PageMenu'
import SearchUserForm from '../../../components/pages/utils/SearchUserForm'
import ProductsCreate from './ProductsCreate'



// * Comentarios para Juan
{
	/* Esta es la pantalla principal de Persona Natural, aca no hay muchas cosas interesantes la verdad. Acuerdense de que 	ustedes van a cambiar algo aca porque tenemos el menu de la derecha... Pero de eso ya no se yo... Asi que ahora podes avanzar a PersonaNaturalCreate...
	 */
}

function Products() {
	const [showCreateFormButton, setShowCreateFormButton] = useState(false)

	const { sections, changeCurrentSection, setSections } = useContext(
		PageContext
	)
	const { alerts } = useContext(alertsContext)

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
	useEffect(() => {
		setSections(PNsections)
		changeCurrentSection('datos-profesionales-y-economicos')
	}, [])

	return (
		<>
			<div>
				{alerts && (
					<div className='alerts-container'>
						{alerts.map((alert) => (
							<div className='alert'>{alert.msg}</div>
						))}
					</div>
				)}
				{showCreateFormButton ? (
					<CreateNewClientBtn />
				) : (
					<>
					<ProductsCreate />
					</>
				)}
			</div>
			<PageMenu/>
		</>
	)
}

export default Products
