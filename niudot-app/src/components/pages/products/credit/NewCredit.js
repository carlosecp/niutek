import React from 'react'
import { FieldArray, useFormikContext } from 'formik'
import { Text, Dropdown, Checkbox } from '../../utils/forms'
import ChargesTable from './ChargesTable'
import Documents from '../Documents'
import EditChargesPopup from './EditChargesPopup'

const NewCredit = ({
	options,
	loading,
	showChargesPopup,
	togglePopup,
	activeCharge,
}) => {
	const { values } = useFormikContext()
	const {
		p_moneda,
		p_cod_tipo_credito,
		p_cod_fuente_fondo,
		p_plazo,
		p_cod_frecuencia_pago,
	} = values

	const initialValues = {
		pcr_descripcion_cargo: '',
		pcr_cod_moneda: 1,
		pcr_valor: 123,
		pcr_cod_tipo: 1,
	}

	return (
		<>
			{showChargesPopup && (
				<EditChargesPopup
					togglePopup={togglePopup}
					options={options}
					activeCharge={activeCharge}
				/>
			)}
			<div className='mb-4 form-grid-layout'>
				<Dropdown
					size='md'
					name='p_cod_tipo_credito'
					label='Tipo de Crédito'
					value={p_cod_tipo_credito}
					loading={loading}
				>
					<option value='0' selected='true' disabled label='Seleccione' />
					{loading ||
						options.p_cod_tipo_credito.map((option) => (
							<option
								key={option.codigo}
								value={option.codigo}
								label={option.descripcion}
							/>
						))}
				</Dropdown>
				<Dropdown
					size='md'
					name='p_cod_fuente_fondo'
					label='Fuente de Fondos'
					value={p_cod_fuente_fondo}
					loading={loading}
				>
					<option value='0' selected='true' disabled label='Seleccione' />
					{loading ||
						options.p_cod_fuente_fondo.map((option) => (
							<option
								key={option.codigo}
								value={option.codigo}
								label={option.descripcion}
							/>
						))}
				</Dropdown>
				<Text name='p_nombres' size='lg' label='Nombre del Producto' />
				<Text
					name='p_descripcion'
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
				<Dropdown
					size='md'
					name='p_plazo'
					label='Plazo hasta:'
					value={p_plazo}
					loading={loading}
				>
					<option value='0' selected='true' disabled label='Seleccione' />
					{loading ||
						options.plazo_interes.map((option) => (
							<option
								key={option.codigo}
								value={option.codigo}
								label={option.descripcion}
							/>
						))}
				</Dropdown>
				<Dropdown
					size='md'
					name='p_cod_frecuencia_pago'
					label='Frecuencia de pago'
					value={p_cod_frecuencia_pago}
					loading={loading}
				>
					<option value='0' selected='true' disabled label='Seleccione' />
					{loading ||
						options.frecuencia_pago.map((option) => (
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
					label='% aportación'
					placeholder='Aportación'
					type='number'
				/>
				<Checkbox
					size='md'
					name='p_aplica_grupo_solidario'
					label='Aplica a grupo solidario'
					newline={true}
				/>
				<Checkbox
					size='md'
					name='p_aplica_individual'
					label='Aplica individual'
					newline={true}
					showLabel={false}
				/>
			</div>
			<Documents />
			<div className='mt-4'>
				<FieldArray
					name='cargos'
					render={(arrayHelpers) => <ChargesTable togglePopup={togglePopup} />}
				></FieldArray>
			</div>
		</>
	)
}

export default NewCredit
