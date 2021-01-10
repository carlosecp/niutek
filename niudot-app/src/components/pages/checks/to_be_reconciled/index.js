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
	const [loading, setLoading] = useState(true)
	const [activeCheck, setActiveCheck] = useState(null)

	useEffect(() => {
		changePage('Cheques Por Conciliar')
		// eslint-disable-next-line
	}, [])

	const toggleEditPopup = (checkId) => {
		setActiveCheck(checkId)
		setShowEditPopup(!showEditPopup)
	}

	return (
		<>
			<SearchCheckForm />
			<div className='section'>
				<ToBeReconciledChecksTable
					togglePopup={toggleEditPopup}
					setLoading={setLoading}
					loading={loading}
				/>
				{showEditPopup && (
					<EditChecksPopup
						togglePopup={toggleEditPopup}
						checkId={activeCheck}
					/>
				)}
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
		</>
	)
}

export default ChecksToBeReconciled
