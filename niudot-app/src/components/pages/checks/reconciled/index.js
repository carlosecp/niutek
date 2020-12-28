// React and Router Stuff
import React, { useState, useContext, useEffect } from 'react'
// Other Components
import SearchCheckForm from '../../utils/search/SearchCheckForm'
import ReconciledChecksTable from './ReconciledChecksTable'
import EditChecksPopup from './EditChecksPopup'
// Context
import routesContext from '../../../../context/routes/routesContext'
import { FaPlus, FaPrint } from 'react-icons/fa'

const ChecksToPrint = () => {
	const { changePage } = useContext(routesContext)
	const [showEditPopup, setShowEditPopup] = useState(false)

	useEffect(() => {
		changePage('Cheques Conciliados')
	}, [])

	const toggleEditPopup = () => {
		setShowEditPopup(!showEditPopup)
	}

	return (
		<div className='section'>
			<SearchCheckForm />
			<ReconciledChecksTable togglePopup={toggleEditPopup} />
			{showEditPopup && <EditChecksPopup togglePopup={toggleEditPopup} />}
			<div className='my-4 flex gap-2 justify-center flex-wrap'>
				<button className='btn bg-blue-blue btn-border-blue flex items-center gap-2'>
					Imprimir Listado
					<FaPrint />
				</button>
			</div>
		</div>
	)
}

export default ChecksToPrint
