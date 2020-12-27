// React and Router Stuff
import React, { useContext, useEffect, useState } from 'react'
// Context
import routesContext from '../../../../context/routes/routesContext'
import SearchCheckForm from '../../utils/search/SearchCheckForm'
import ReconcilePopup from './popups/ReconcilePopup'
import ReconciledChecksTable from './ReconciledChecksTable'
// Other Components


const ReconciledChecks = () => {
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Cheques Conciliados')
	}, [])

	const [showPopup, setShowPopup] = useState({
		reconcile: false,
	})

	const togglePopup = (popup) => {
		switch (popup) {
			case 'reconcile':
				setShowPopup({ ...showPopup, reconcile: !showPopup.reconcile })
				break

		}
	}
	

	return (
		<div className='section'>
			<SearchCheckForm />
			<ReconciledChecksTable />
			{showPopup.reconcile && <ReconcilePopup togglePopup={() => togglePopup('reconcile')} />}
			<div className='my-4 flex gap-2 justify-center flex-wrap'>
				<button
					className='btn flex items-center bg-blue-blue btn-border-blue'
					onClick={() => togglePopup('reconcile')}
				>
					Conciliar Cheque
				</button>
			</div>
		</div>
	)
}

export default ReconciledChecks
