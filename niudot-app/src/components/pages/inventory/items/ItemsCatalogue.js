import React from 'react'
import { Formik } from 'formik'
import { Text, Dropdown, Checkbox } from '../../utils/forms'
import DateInput from '../../utils/forms/DateInput'

const ItemsCatalogue = () => {
	return (
		<Formik>
			<div className='form-grid-layout'>
				<Text
					name='create_nombre'
					size='lg'
					placeholder='Nombre del Artículo'
					label='Nombre'
				/>
				<Text
					name='create_nombre_abreviado'
					size='md'
					placeholder='Nombre Abreviado'
					label='Nombre Abreviado'
					newline={true}
				/>
				<Text
					name='create_costo'
					size='sm'
					placeholder='0.00'
					label='Costo'
					type='number'
				/>
				<Text
					name='create_utilidad'
					size='sm'
					placeholder='0.00'
					label='Utilidad'
					type='number'
				/>

				<Dropdown
					size='md'
					name='create_proveedor'
					label='Proveedor'
					newline={true}
				>
					<option value=''>Elige Proveedor</option>
					<option value='option_3'>Option 3</option>
					<option value='option_4'>Option 4</option>
				</Dropdown>
				<Text
					name='create_costo_mas_utilidad'
					size='sm'
					placeholder='0.00'
					label='Costo + Utilidad'
					type='number'
				/>
				<Text
					name='create_impuesto'
					size='sm'
					placeholder='0.00'
					label='Impuesto'
					type='number'
				/>

				<Dropdown size='md' name='create_grupo' label='Grupo' newline={true}>
					<option value=''>Elige Grupo</option>
					<option value='option_3'>Option 3</option>
					<option value='option_4'>Option 4</option>
				</Dropdown>

				<Text
					name='create_precio'
					size='sm'
					placeholder='0.00'
					label='Precio'
					type='number'
				/>

				<Dropdown
					size='md'
					name='create_presentacion'
					label='Presentación'
					newline={true}
				>
					<option value=''>Elige Presentación</option>
					<option value='option_3'>Option 3</option>
					<option value='option_4'>Option 4</option>
				</Dropdown>

				<Checkbox description='No mostrar en Toma Física' size='md' label='' />
				<Dropdown size='md' name='create_marca' label='Marca' newline={true}>
					<option value=''>Elige Marca</option>
					<option value='option_3'>Option 3</option>
					<option value='option_4'>Option 4</option>
				</Dropdown>
				<Text
					name='create_cantidad_minima'
					size='sm'
					placeholder='0'
					label='Cantidad Mínima'
					type='number'
					newline={true}
				/>
				<Text
					name='create_cantidad_maxima'
					size='sm'
					placeholder='0'
					label='Cantidad Máxima'
					type='number'
				/>

				<DateInput size='sm' newline={true} label='Última compra' />
				<DateInput size='sm' newline={true} label='Última venta' />
				<DateInput size='sm' newline={true} label='Último Inventario' />
			</div>
		</Formik>
	)
}

export default ItemsCatalogue
