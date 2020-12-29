// React and Router Stuff
import React, { useState, useContext, useEffect } from 'react'
// Other Components
import SearchCheckForm from '../../utils/search/SearchCheckForm'
// Context
import routesContext from '../../../../context/routes/routesContext'
import { Formik } from 'formik'
import ProductsTable from './ProductsTable'
import { Text, Dropdown, Checkbox } from '../../utils/forms'
import DateInput from '../../utils/forms/DateInput'
import SearchProductForm from '../../utils/search/SearchProductForm'

const InventoryProducts = () => {
	const { changePage } = useContext(routesContext)
	const [showPopup, setShowPopup] = useState({
		add: false,
		edit: false,
		delete: false,
		null: false,
		print: false
	})

	useEffect(() => {
		changePage('Productos')
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
			<SearchProductForm/>
			<Formik>
			<div className='form-grid-layout pb-8'>
				<Text
					name='bodega'
					size='lg'
					placeholder='Bodega'
					label='Bodega'
				/>
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

			<ProductsTable />
			
			{/*{showPopup.void && <NewPopup togglePopup={() => togglePopup('void')} />} */}

			<div className='my-4 flex gap-2 justify-center flex-wrap'>
				<button
					className='btn flex items-center bg-blue-blue btn-border-blue'
					onClick={() => togglePopup('add')}
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
