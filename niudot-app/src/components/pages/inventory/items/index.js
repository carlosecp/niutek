// React and Router Stuff
import React, { useState, useContext, useEffect } from 'react'
// Other Components
import SearchCheckForm from '../../utils/search/SearchCheckForm'
// Context
import routesContext from '../../../../context/routes/routesContext'
import ItemsCatalogue from './ItemsCatalogue'
import { Formik } from 'formik'

const Items = () => {
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Catálogo de Artículos')
	}, [])

	return (
		<div className='section'>
			<SearchCheckForm />
			<Formik>
				<ItemsCatalogue />
			</Formik>
			<div className='my-4 flex gap-2 justify-center flex-wrap'>

				<button className='btn flex items-center bg-blue-blue btn-border-blue'>
					Guardar
				</button>
				<button className='btn flex items-center bg-blue-blue btn-border-blue'>
					Nuevo Artículo
				</button>
			</div>
		</div>
	)
}

export default Items
