// React and Router Stuff
import React, { useState, useContext, useEffect } from 'react'
// Other Components
import SearchCheckForm from '../../utils/search/SearchCheckForm'
// Context
import routesContext from '../../../../context/routes/routesContext'
import PurchaseTable from './PurchaseTable'
import NewPurchasePopup from './popups/NewPurchasePopup'
import { Text, Dropdown, Checkbox } from '../../utils/forms'
import { Formik } from 'formik'
import DateInput from '../../utils/forms/DateInput'


const Purchase = () => {
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

			<PurchaseTable  togglePopup={() => togglePopup('deliver')} />
			{showPopup.deliver && (
				<NewPurchasePopup togglePopup={() => togglePopup('deliver')} />
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

export default Purchase
