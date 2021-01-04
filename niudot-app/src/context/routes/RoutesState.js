import React, { useState } from 'react'
import routesContext from './routesContext'

const RoutesState = (props) => {
	const [currentPage, setCurrentPage] = useState('inicio')

	const changePage = (pageName) => {
		setCurrentPage(pageName)
	}

	return (
		<routesContext.Provider value={{ currentPage, changePage }}>
			{props.children}
		</routesContext.Provider>
	)
}

export default RoutesState
