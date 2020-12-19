import React, { useState, useContext, useEffect } from 'react'
import CreateNewClientBtn from '../../utils/CreateNewClientBtn'
import PageMenu from '../../utils/PageMenu'
import CheckCreate from './ChecksToPrintCreate'
import SearchCheckForm from '../../utils/SearchCheckForm'
import routesContext from '../../../../context/routes/routesContext'
import Alerts from '../../alerts/Alerts'



function ChecksToPrint() {
	const [showCreateFormButton, setShowCreateFormButton] = useState(false)
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Cheques Por Imprimir')
	}, [])

	return (
		<>
			<div>
			
				<Alerts />
				{showCreateFormButton ? (
					<CreateNewClientBtn />
				) : (
					<>
					<CheckCreate />
					</>
				)}
			</div>
		</>
	)
}

export default ChecksToPrint