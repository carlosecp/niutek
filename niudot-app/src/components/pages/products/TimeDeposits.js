import React from 'react'
import { FormTextInput, FormTextArea } from '../utils/formikComponentsEndpoint'
import RetractileForm from '../utils/RetractileForm'


export default function TimeDeposits() {
	return (
		<RetractileForm id='SavingAccounts' formTitle='Cuentas de Ahorro'>
			<div className='form-grid-layout'>
				<FormTextInput
					name='nombre_del_producto'
					size='xl'
					placeholder='Nombre del Producto'
					label='Nombre del Producto'
				/>
				<FormTextArea
					name='descripcion_de_ahorros'
					size='xl'
					newLine={true}
					placeholder='Descripción del Producto'
					label='Descripción'
				/>
			</div>
		</RetractileForm>
	)
}
