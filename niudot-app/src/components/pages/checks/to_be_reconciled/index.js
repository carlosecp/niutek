// React and Router Stuff
import React, { useState, useContext, useEffect } from 'react'
// Other Components
import SearchCheckForm from '../../utils/search/SearchCheckForm'
import ToBeReconciledChecksTable from './ToBeReconciledChecksTable'
import EditChecksPopup from './EditChecksPopup'
// Context
import routesContext from '../../../../context/routes/routesContext'
import { FaChartLine, FaPrint } from 'react-icons/fa'

const ChecksToBeReconciled = () => {
	const { changePage } = useContext(routesContext)
	const [showEditPopup, setShowEditPopup] = useState(false)

	useEffect(() => {
		changePage('Cheques Por Conciliar')
	}, [])

	const toggleEditPopup = () => {
		setShowEditPopup(!showEditPopup)
	}

	return (
		<div className='section'>
			<SearchCheckForm />
			<ToBeReconciledChecksTable togglePopup={toggleEditPopup} />
			{showEditPopup && <EditChecksPopup togglePopup={toggleEditPopup} />}
			<div className='mt-4 flex gap-2 justify-center flex-wrap'>
				<button className='btn bg-blue-blue btn-border-blue flex items-center gap-2'>
					Imprimir Listado
					<FaPrint />
				</button>
				<button className='btn flex items-center bg-blue-blue btn-border-blue gap-2'>
					Reporte de Cheques
					<FaChartLine />
				</button>
			</div>
		</div>
	)
}

export default ChecksToBeReconciled
