// React and Router Stuff
import React, { useState, useContext, useEffect } from 'react'
// Other Components
import SearchCheckForm from '../../utils/search/SearchCheckForm'
// Context
import routesContext from '../../../../context/routes/routesContext'
import ChecksToDeliverTable from './ChecksToDeliverTable'
import DeliverPopup from './popups/DeliverPopup'

const ChecksToDeliver = () => {
	const { changePage } = useContext(routesContext)
	const [showPopup, setShowPopup] = useState({
		deliver: false,
		delete: false,
		null: false,
		print: false,
		print_report: false,
		print_list: false
	})

	useEffect(() => {
		changePage('Cheques Por Entregar')
	}, [])

	const togglePopup = (popup) => {
		switch (popup) {
			case 'deliver':
				setShowPopup({ ...showPopup, deliver: !showPopup.deliver })
				break
		}
	}

	return (
		<div className='section'>
			<SearchCheckForm />
			<ChecksToDeliverTable togglePopup={() => togglePopup('deliver')} />
			{showPopup.deliver && (
				<DeliverPopup togglePopup={() => togglePopup('deliver')} />
			)}
			<div className='my-4 flex gap-2 justify-center flex-wrap'>
				<button
					className='btn flex items-center bg-blue-blue btn-border-blue'
					onClick={() => togglePopup('deliver')}
				>
					Entregar
				</button>
				<button className='btn flex items-center bg-blue-blue btn-border-blue'>
					Borrar
				</button>
				<button className='btn flex items-center bg-blue-blue btn-border-blue'>
					Anular
				</button>
				<button className='btn flex items-center bg-blue-blue btn-border-blue'>
					Imprimir
				</button>
				<button className='btn flex items-center bg-blue-blue btn-border-blue'>
					Imprimir Listado de Cheques
				</button>
				<button className='btn flex items-center bg-blue-blue btn-border-blue'>
					Imprimir Reporte de Cheques
				</button>
			</div>
		</div>
	)
}

export default ChecksToDeliver
