// React and Router Stuff
import React, { useState, useContext, useEffect } from 'react'
// Extra libraries
import { FaChartLine, FaPrint } from 'react-icons/fa'
// Other Components
import SearchCheckForm from '../../utils/search/SearchCheckForm'
import EditChecksPopup from './EditChecksPopup'
// Context
import routesContext from '../../../../context/routes/routesContext'
import VoidedChecksTable from './VoidedChecksTable'

const VoidedChecks = () => {
	const { changePage } = useContext(routesContext)
	const [showPopup, setShowPopup] = useState(false)

	useEffect(() => {
		changePage('Cheques Anulados')
		// eslint-disable-next-line
	}, [])

	const togglePopup = () => {
		setShowPopup(!showPopup)
	}

	return (
		<div className='section'>
			{showPopup && <EditChecksPopup togglePopup={togglePopup} />}
			<SearchCheckForm />
			<VoidedChecksTable togglePopup={togglePopup} />
			<div className='mt-4 flex gap-2 justify-center flex-wrap'>
				<button className='btn flex items-center bg-blue-blue btn-border-blue gap-2'>
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

export default VoidedChecks
