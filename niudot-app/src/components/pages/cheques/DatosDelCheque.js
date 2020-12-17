import React from 'react'
import ReactDatePicker from 'react-datepicker'
import {
	FormDropdownInput,
    FormTextArea,
	FormTextInput
} from '../utils/formikComponentsEndpoint'
import SubmitBtn from '../utils/SubmitBtn'
import DatosDelChequeTable from './DatosDelChequeTable'

export default function DatosDelCheque({ value }) {
	return (
		<>
			<h2 className='text-black-white text-xl font-bold p-4 pl-0'>
				Datos del Cheque{' '}
			</h2>

			<div className='form-grid-layout'>
				<FormTextInput
					name='create_fecha_de_entrega'
					size='md'
					placeholder='Fecha de Entrega'
					label='Fecha de Entrega'
				/>
				<FormTextInput
					name='create_numero_de_cheque'
					size='md'
                    placeholder='Número de Cheque'
                    newLine={true}
					label='Número de Cheque'
				/>
                <FormDropdownInput size='md' name='create_moneda' label='Moneda'>
					<option value=''>Moneda</option>
					<option value='option_2'>Córdoba</option>
					<option value='option_3'>Dólares</option>
					<option value='option_4'>Colones</option>
				</FormDropdownInput>

				<FormTextInput
					name='create_paguese_orden'
					size='lg'
					placeholder='Paguese a la orden de'
					label='Paguese a la orden de'
					newLine={true}
				/>
				<FormTextInput
					name='create_cantidad_de'
					size='sm'
					placeholder='Cantidad'
					label='La cantidad de'
                    newLine={true}
                    type='number'
					min='0'
				/>
				<FormTextInput
					name='create_cantidad_en_letras'
					size='lg'
					placeholder='CINCO MIL SETECIENTOS TRES CORDOBAS CON 47 CENTAVOS'
                    label='Cantidad'
                    newLine={true}
                    
				/>
				<FormTextArea
					name='create_por_concepto_de'
					size='lg'
					newLine={true}
					placeholder='Concepto de...'
					label='Por concepto de:'
				/>
			
				<FormDropdownInput
					size='md'
					name='create_cuenta_bancaria'
					label='Cuenta Bancaria'
					newLine={true}
				>
					<option value=''>Cuenta Bancaria</option>
					<option value='option_2'>Córdoba</option>
					<option value='option_3'>Dólares</option>
					<option value='option_4'>Colones</option>
				</FormDropdownInput>

                
			</div>
            <DatosDelChequeTable />
				<SubmitBtn />
		</>
	)
}
