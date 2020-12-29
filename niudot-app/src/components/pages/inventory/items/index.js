// React and Router Stuff
import React, { useState, useContext, useEffect } from 'react'
// Other Components
import SearchCheckForm from '../../utils/search/SearchCheckForm'
// Context
import routesContext from '../../../../context/routes/routesContext'
import ItemsCatalogue from './ItemsCatalogue'
import { Formik } from 'formik'
import NewItemPopup from './popups/NewItemPopup'


const Items = () => {
	const { changePage } = useContext(routesContext)
	const [showAddPopup, setShowAddPopup] = useState(false)


	useEffect(() => {
		changePage('Catálogo de Artículos')
	}, [])

	const toggleAddPopup = () => {
		setShowAddPopup(!showAddPopup)
	}

	return (
		<div className='section'>
			<SearchCheckForm />
			<Formik>
				<ItemsCatalogue />
			</Formik>

			{showAddPopup && <NewItemPopup togglePopup={toggleAddPopup} />}
			<div className='my-4 flex gap-2 justify-center flex-wrap'>

				<button className='btn flex items-center bg-blue-blue btn-border-blue'>
					Guardar
				</button>
				<button
					className='btn flex items-center bg-blue-blue btn-border-blue'
					onClick={toggleAddPopup}
				>
					Nuevo Artículo
				</button>
			</div>
		</div>
	)
}

export default Items
