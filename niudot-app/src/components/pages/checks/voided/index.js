// React and Router Stuff
import React, { useState, useContext, useEffect } from 'react'
// Other Components
import SearchCheckForm from '../../utils/search/SearchCheckForm'
// Context
import routesContext from '../../../../context/routes/routesContext'
import VoidedChecksTable from './VoidedChecksTable'
import EditChecksPopup from './EditChecksPopup'
import { FaChartLine, FaPrint } from 'react-icons/fa'

const VoidedChecks = () => {
	const { changePage } = useContext(routesContext)
	const [showPopup, setShowPopup] = useState({
		void: false,
		edit: false,
		delete: false,
		null: false,
		print: false
	})

	useEffect(() => {
		changePage('Cheques Anulados')
	}, [])

	const togglePopup = (popup) => {
		switch (popup) {
			case 'void':
				setShowPopup({ ...showPopup, void: !showPopup.void })
				break
		}
	}

	return (
		<div className='section'>
			<SearchCheckForm />
			<VoidedChecksTable togglePopup={() => togglePopup('void')} />
			{showPopup.void && (
				<EditChecksPopup togglePopup={() => togglePopup('void')} />
			)}
			<div className='my-4 flex gap-2 justify-center flex-wrap'>
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
