// React and Router Stuff
import React, { useState, useContext, useEffect } from 'react'
// Other Components
import SearchCheckForm from '../../utils/search/SearchCheckForm'
import PrintChecksTable from './PrintChecksTable'
import EditPopup from './popups/EditPopup'
import AddPopup from './popups/AddPopup'
// Context
import routesContext from '../../../../context/routes/routesContext'

const ChecksToPrint = () => {
	const { changePage } = useContext(routesContext)
	const [showPopup, setShowPopup] = useState({
		add: false,
		edit: false,
		delete: false,
		null: false,
		print: false
	})

	useEffect(() => {
		changePage('Cheques Por Imprimir')
	}, [])

	const togglePopup = (popup) => {
		switch (popup) {
			case 'edit':
				setShowPopup({ ...showPopup, edit: !showPopup.edit })
				break
			case 'add':
				setShowPopup({ ...showPopup, add: !showPopup.add })
				break
		}
	}

	return (
		<div className='section'>
			<SearchCheckForm />
			<PrintChecksTable togglePopup={() => togglePopup('edit')} />
			{showPopup.edit && <EditPopup togglePopup={() => togglePopup('edit')} />}
			{showPopup.add && <AddPopup togglePopup={() => togglePopup('add')} />}
			<div className='my-4 flex gap-2 justify-center flex-wrap'>
				<button
					className='btn flex items-center bg-blue-blue btn-border-blue'
					onClick={() => togglePopup('add')}
				>
					Agregar
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
			</div>
		</div>
	)
}

export default ChecksToPrint
