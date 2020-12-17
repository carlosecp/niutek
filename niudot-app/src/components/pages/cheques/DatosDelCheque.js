import React from 'react'
import { FormDropdownInput, FormTextInput } from '../utils/formikComponentsEndpoint'
import SubmitBtn from '../utils/SubmitBtn'


export default function DatosDelCheque({ value }) {
	return (
		<>
			<h2 className='text-black-white text-xl font-bold p-4 pl-0'>
				Cancelación Anticipada{' '}
			</h2>
			<div className='form-grid-layout'>
				<FormTextInput
					name='create_nombre_del_cliente'
					size='lg'
					placeholder='Nombre de cliente'
					label='Cliente'
				/>

				<FormTextInput
					name='create_tipo_de_credito'
					size='lg'
					placeholder='Tipo de Crédito'
					label='Tipo de Crédito'
					newLine={true}
				/>
				<FormTextInput
					name='create_nombre_del_producto'
					size='lg'
					placeholder='Nombre del Producto'
					label='Nombre del Producto'
					newLine={true}
				/>
				<FormTextInput
					name='create_numero_de_identificacion'
					size='md'
					placeholder='Número de Identificación'
					label='Número de Identificación'
					newLine={true}
				/>
				<FormDropdownInput
					size='md'
					name='create_tipo_id'
					label='Tipo Identificación'
				>
					<option value=''>Tipo Identificación</option>
					<option value='option_2'>Option 2</option>
					<option value='option_3'>Option 3</option>
					<option value='option_4'>Option 4</option>
				</FormDropdownInput>
				<FormDropdownInput size='md' name='create_moneda' label='Moneda'>
					<option value=''>Moneda</option>
					<option value='option_2'>Córdoba</option>
					<option value='option_3'>Dólares</option>
					<option value='option_4'>Colones</option>
				</FormDropdownInput>
				<FormTextInput
					name='create_fecha_de_entrega'
					size='md'
					placeholder='Fecha de Entrega'
					label='Fecha de Entrega'
					newLine={true}
				/>
				<FormDropdownInput
					size='md'
					name='create_tipo_de_entrega'
					label='Tipo de Entrega'
					newLine={true}
				>
					<option value=''>Tipo de Entrega</option>
					<option value='option_2'>Córdoba</option>
					<option value='option_3'>Dólares</option>
					<option value='option_4'>Colones</option>
				</FormDropdownInput>

				<FormTextInput
					name='create_numero_de_cheque'
					size='md'
					placeholder='Número de Cheque'
					label='Número de Cheque'
					newLine={true}
				/>

				<FormTextInput
					name='create_nombre_del_banco'
					size='md'
					placeholder='Nombre del Banco'
					label='Nombre del Banco'
				/>

				<SubmitBtn />
			</div>
		</>
	)
}
