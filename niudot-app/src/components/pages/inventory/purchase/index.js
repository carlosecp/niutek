// React and Router Stuff
import React, { useState, useContext, useEffect } from 'react'
// Other Components
import SearchCheckForm from '../../utils/search/SearchCheckForm'
// Context
import routesContext from '../../../../context/routes/routesContext'
import PurchaseTable from './PurchaseTable'
import { Text, Dropdown } from '../../utils/forms'
import { Formik } from 'formik'
import DateInput from '../../utils/forms/DateInput'
import EditPurchasePopup from './popups/EditPurchasePopup'


const Purchase = () => {

	const [showEditPopup, setShowEditPopup] = useState(false)
    
	const { changePage } = useContext(routesContext)
	const [showPopup, setShowPopup] = useState({
		edit: false,
	})

	useEffect(() => {
		changePage('Compras')
	}, [])

	const togglePopup = (popup) => {
		switch (popup) {
			case 'edit':
				setShowPopup({ ...showPopup, edit: !showPopup.edit })
				break
        }
    }
    
    const toggleEditPopup = () => {
		setShowEditPopup(!showEditPopup)
    }


	return (
		<div className='section'>
			<SearchCheckForm />
			<Formik>
				<div className='form-grid-layout mb-8'>
					<Text
						name='numero_de_compra'
						size='lg'
						placeholder='Número de Compra'
						label='Número de Compra'
					/>
					<Text
						name='numero_de_factura'
						size='md'
						placeholder='Número de Factura'
						label='Número de Factura'
						newLine={true}
					/>
                    <DateInput size='sm' newLine={true} label='Fecha' />
                    
					
					<Text
						name='hora'
						size='sm'
						placeholder='16:32:17'
						label='Hora'
					/>

					<Dropdown
						size='md'
						name='proveedor'
						label='Proveedor'
						newLine={true}
					>
						<option value=''>Elige Proveedor</option>
						<option value='option_3'>Option 3</option>
						<option value='option_4'>Option 4</option>
					</Dropdown>
                    <Dropdown
						size='md'
						name='bodega'
						label='Bodega'
					>
						<option value=''>Elige Bodega</option>
						<option value='option_3'>Option 3</option>
						<option value='option_4'>Option 4</option>
					</Dropdown>
					<Text
						name='observaciones'
						size='md'
						placeholder='Observaciones'
						label='Observaciones'
                        isTextArea
					/>
                    <Dropdown
						size='md'
						name='tipo_de_pago'
						label='Tipo de pago'
						newLine={true}
					>
						<option value=''>Crédito</option>
						<option value='option_3'>Option 3</option>
						<option value='option_4'>Option 4</option>
					</Dropdown>
					<Text
						name='dias'
						size='sm'
						placeholder='0'
						label='Días'
						type='number'
					/>
					
				</div>
			</Formik>

			<PurchaseTable  togglePopup={toggleEditPopup} />
            {showEditPopup && <EditPurchasePopup togglePopup={toggleEditPopup} />}

		</div>
	)
}

export default Purchase
