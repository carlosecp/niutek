
// React and Router Stuff
import React, { useState, useContext, useEffect } from 'react'
// Other Components
import SearchCheckForm from '../../utils/search/SearchCheckForm'
// Context
import routesContext from '../../../../context/routes/routesContext'
import NewPopup from './popups/NewPopup'
import ItemsCatalogue from './ItemsCatalogue'

const Items = () => {
	const { changePage } = useContext(routesContext)
	const [showPopup, setShowPopup] = useState({
		void: false,
		edit: false,
		delete: false,
		null: false,
		print: false
	})

	useEffect(() => {
		changePage('Artículos')
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
            <ItemsCatalogue />
			{showPopup.void && <NewPopup togglePopup={() => togglePopup('void')} />}
			<div className='my-4 flex gap-2 justify-center flex-wrap'>
				<button
					className='btn flex items-center bg-blue-blue btn-border-blue'
					onClick={() => togglePopup('void')}
				>
					Eliminar Anulación
				</button>
				<button className='btn flex items-center bg-blue-blue btn-border-blue'>
					Imprimir Listado
				</button>
				<button className='btn flex items-center bg-blue-blue btn-border-blue'>
					Imprimir Cheque
				</button>
				<button className='btn flex items-center bg-blue-blue btn-border-blue'>
					Reporte de Cheques
				</button>
			</div>
		</div>
	)
}

export default Items
