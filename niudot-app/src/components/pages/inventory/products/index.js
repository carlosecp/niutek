// React and Router Stuff
import React, { useState, useContext, useEffect } from 'react'
// Other Components
import SearchProductForm from '../../utils/search/SearchProductForm'
// Context
import routesContext from '../../../../context/routes/routesContext'
import { Formik } from 'formik'
import ProductsTable from './ProductsTable'
import { Text} from '../../utils/forms'
import EditPopup from './popups/EditPopup'
import AddItemPopup from './popups/AddItemPopup'

const InventoryProducts = () => {
	const { changePage } = useContext(routesContext)
	const [showEditPopup, setShowEditPopup] = useState(false)
	const [showAddPopup, setShowAddPopup] = useState(false)

	const [showPopup, setShowPopup] = useState({
		add: false,
		edit: false
	})

	useEffect(() => {
		changePage('Productos')
	}, [])

	const toggleEditPopup = () => {
		setShowEditPopup(!showEditPopup)
	}

	const toggleAddPopup = () => {
		setShowAddPopup(!showAddPopup)
	}



	return (
		<div className='section'>
			<SearchProductForm />
			<Formik>
				<div className='form-grid-layout pb-8'>
					<Text name='bodega' size='lg' placeholder='Bodega' label='Bodega' />
					<Text
						name='producto'
						size='md'
						placeholder='Producto'
						label='Producto'
						newLine={true}
					/>
					<Text
						name='codigo_producto'
						size='sm'
						placeholder='Código'
						label='00221'
					/>
					<Text
						name='Abreviación'
						size='sm'
						placeholder='Abreviación'
						label='Abreviación'
						newLine={true}
					/>
				</div>
			</Formik>

			<ProductsTable togglePopup={toggleEditPopup} />

			{showEditPopup && <EditPopup togglePopup={toggleEditPopup} />}
			{showAddPopup && <AddItemPopup togglePopup={toggleAddPopup} />}


			<div className='my-4 flex gap-2 justify-center flex-wrap'>
				<button
					className='btn flex items-center bg-blue-blue btn-border-blue'
					onClick={toggleAddPopup}
				>
					Agregar Artículo
				</button>
				<button className='btn flex items-center bg-blue-blue btn-border-blue'>
					Guardar
				</button>
				<button className='btn flex items-center bg-gray-cstm-10 btn-border-blue'>
					Cancelar
				</button>
			</div>
		</div>
	)
}

export default InventoryProducts
