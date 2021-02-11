import React from 'react'
import { useFormikContext } from 'formik'
import { Text, Dropdown } from '../../utils/forms'
import Documents from '../Documents'

const NewProduct = ({ options, loading }) => {
	const { values } = useFormikContext()
	const { p_cod_moneda } = values

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
					value={p_cod_moneda}
					loading={loading}
				>
					<option
						value={0}
						selected={true}
						disabled
						label='Seleccione'
					/>
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
					name='p_monto_minimo_apertura'
					size='md'
					label='Monto mínimo apertura'
					type='number'
				/>
				<Text
					name='p_monto_promedio_mensual'
					size='md'
					label='Monto promedio mensual'
					type='number'
				/>
				<Text
					name='p_max_retiros_mes'
					size='md'
					label='Máximo retiros mensuales'
					type='number'
				/>
				<Text
					name='p_monto_max_por_retiro'
					size='md'
					label='Mosto máximo por retiro'
					type='number'
				/>
			</div>
			<Documents />
		</>
	)
}

export default NewProduct
