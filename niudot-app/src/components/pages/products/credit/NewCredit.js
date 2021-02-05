import React from 'react'
import { useFormikContext } from 'formik'
import { Text, Dropdown } from '../../utils/forms'
import CreditTable from './CreditTable'

const NewCredit = ({ options, loading }) => {
	const { values } = useFormikContext()
	const { p_moneda } = values

	return (
		<>
			<div className='mb-4 form-grid-layout'>
				<Text name='p_nombres' size='lg' label='Tipo de Crédito' />
				<Dropdown
					size='md'
					name='p_tipo_doc'
					label='Fuente de Fondos'
					value={p_moneda}
					loading={loading}
				>
					<option value='0' selected='true' disabled label='Seleccione' />
					{loading ||
						options.p_moneda.map((option) => (
							<option
								key={option.codigo}
								value={option.codigo}
								label={option.descripcion}
							/>
						))}
				</Dropdown>
				<Text name='p_nombres' size='lg' label='Nombre del Producto' />
				<Text
					name='p_descripción'
					size='lg'
					isTextArea={true}
					label='Descripción'
				/>
				<Dropdown
					size='md'
					name='p_tipo_doc'
					label='Moneda'
					value={p_moneda}
					loading={loading}
				>
					<option value='0' selected='true' disabled label='Seleccione' />
					{loading ||
						options.p_moneda.map((option) => (
							<option
								key={option.codigo}
								value={option.codigo}
								label={option.descripcion}
							/>
						))}
				</Dropdown>

				<Text
					name='p_num_doc'
					size='md'
					label='Tasa de interés mensual'
					type='number'
				/>
				<Text name='p_num_doc' size='md' label='Monto mínimo' type='number' />
				<Text name='p_num_doc' size='md' label='Monto máximo' type='number' />
				<Text
					name='p_num_doc'
					size='md'
					label='Plazo hasta:'
					placeholder='Meses'
					type='number'
				/>
				<Text
					name='p_num_doc'
					size='md'
					label='Frecuencia de pago'
					placeholder='Frecuencia de Pago'
					type='number'
				/>
				<Text
					name='p_num_doc'
					size='md'
					label='% aportación'
					placeholder='Aportación'
					type='number'
				/>
			</div>
			<CreditTable />
		</>
	)
}

export default NewCredit
