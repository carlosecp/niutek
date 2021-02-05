import React from 'react'
import { useFormikContext } from 'formik'
import { Text, Dropdown } from '../../utils/forms'
import Documents from '../Documents'

const NewDeposit = ({ options, loading }) => {
	const { values } = useFormikContext()
	const { p_moneda } = values

	return (
		<>
			<div className='form-grid-layout'>
				<Text name='p_nombre' size='lg' label='Nombre del producto' />
				<Text
					name='p_descripcion'
					size='lg'
					isTextArea={true}
					label='Descripción'
				/>
				<Dropdown
					size='md'
					name='p_cod_moneda'
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
					name='p_tasa_interes'
					size='md'
					label='Tasa de interés mensual'
					type='number'
				/>
				<Text
					name='p_monto_minimo'
					size='md'
					label='Monto mínimo'
					type='number'
				/>
				<Text
					name='p_monto_maximo'
					size='md'
					label='Monto promedio'
					type='number'
				/>
				<Text
					name='p_plazo_meses'
					size='md'
					label='Plazo hasta:'
					placeholder='Meses'
					type='number'
				/>
				<Text
					name='p_capitaliza_meses'
					size='md'
					label='Capitaliza cada:'
					placeholder='Meses'
					type='number'
				/>
			</div>
			<Documents />
		</>
	)
}

export default NewDeposit
