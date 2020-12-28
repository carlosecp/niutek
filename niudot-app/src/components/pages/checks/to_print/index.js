// React and Router Stuff
import React, { useState, useContext, useEffect } from 'react'
// Other Components
import SearchCheckForm from '../../utils/search/SearchCheckForm'
import PrintChecksTable from './PrintChecksTable'
import EditChecksPopup from './EditChecksPopup'
import AddChecksPopup from './AddChecksPopup'
// Context
import routesContext from '../../../../context/routes/routesContext'
import { FaPlus, FaPrint } from 'react-icons/fa'

const ChecksToPrint = () => {
	const { changePage } = useContext(routesContext)
	const [showEditPopup, setShowEditPopup] = useState(false)
	const [showAddPopup, setShowAddPopup] = useState(false)

	useEffect(() => {
		changePage('Cheques Por Imprimir')
	}, [])

	const toggleEditPopup = () => {
		setShowEditPopup(!showEditPopup)
	}

	const toggleAddPopup = () => {
		setShowAddPopup(!showAddPopup)
	}

	return (
		<div className='section'>
			<SearchCheckForm />
			<PrintChecksTable togglePopup={toggleEditPopup} />
			{showEditPopup && <EditChecksPopup togglePopup={toggleEditPopup} />}
			{showAddPopup && <AddChecksPopup togglePopup={toggleAddPopup} />}
			<div className='my-4 flex gap-2 justify-center flex-wrap'>
				<button
					className='btn bg-blue-blue btn-border-blue flex items-center gap-2'
					onClick={toggleAddPopup}
				>
					Agregar
					<FaPlus />
				</button>
				<button className='btn bg-blue-blue btn-border-blue flex items-center gap-2'>
					Imprimir Listado
					<FaPrint />
				</button>
			</div>
		</div>
	)
}

export default ChecksToPrint
