import React, { useState } from 'react'
import routesContext from './routesContext'

function RoutesState(props) {
	const [currentPage, setCurrentPage] = useState('inicio')

	function changePage(pageName) {
		setCurrentPage(pageName)
	}

	return (
		<routesContext.Provider value={{ currentPage, changePage }}>
			{props.children}
		</routesContext.Provider>
	)
}

export default RoutesState
