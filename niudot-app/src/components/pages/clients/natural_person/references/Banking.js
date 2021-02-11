import React, { Fragment } from 'react'
import { useFormikContext, FieldArray } from 'formik'
import { FaPlus, FaTimes } from 'react-icons/fa'
import { Dropdown, Text } from '../../../utils/forms'
import RetractileForm from '../../../utils/retractile_sections'

const Banking = ({ options }) => {
	const initialValues = {
		prb_nombre_entidad: '',
		prb_tipo_servicio_recibido: '',
		prb_fecha_inicio_relacion: '',
		prb_annios_con_entidad: 0,
		prb_telefono: '',
		pct_num_cuenta: '',
		pct_cod_moneda: 0,
		pct_cod_banco: 0,
	}

	const { values } = useFormikContext()

	const { referencias_bancarias } = values

	return (
		<FieldArray
			name='referencias_bancarias'
			render={(arrayHelpers) => (
				<RetractileForm formTitle='Bancarias'>
					{referencias_bancarias.map((_, index) => (
						<Fragment key={index}>
							<div className='flex justify-between items-center text-gray-gray'>
								<h3 className='font-bold text-lg mt-3'>
									Rerefencia {index + 1}
								</h3>
								<div className='mr-4'></div>
								<FaTimes
									className='cursor-pointer transform transition hover:rotate-90'
									onClick={() => arrayHelpers.remove(index)}
								/>
							</div>
							<div className='form-grid-layout'>
								<Text
									name={`referencias_bancarias.${index}.prb_nombre_entidad`}
									size='md'
									label='Nombre Entidad'
								/>
								<Text
									name={`referencias_bancarias.${index}.prb_tipo_servicio_recibido`}
									size='md'
									label='Servicio Recibido'
								/>
								<Text
									name={`referencias_bancarias.${index}.prb_fecha_inicio_relacion`}
									size='md'
									label='Fecha Inicio Relación'
								/>
								<Text
									name={`referencias_bancarias.${index}.prb_annios_con_entidad`}
									size='md'
									label='Años con Entidad'
									type='number'
								/>
								<Text
									name={`referencias_bancarias.${index}.prb_telefono`}
									size='md'
									label='Teléfono'
								/>
								<Text
									name={`referencias_bancarias.${index}.pct_num_cuenta`}
									size='md'
									label='No. Cuenta'
								/>
								<Dropdown
									size='md'
									name={`referencias_bancarias.${index}.pct_cod_moneda`}
									label='Moneda'
								>
									<option
										value=''
										selected={true}
										disabled
										label='Seleccione'
									/>
									{options.p_moneda.map((option) => (
										<option
											key={option.codigo}
											value={option.descripcion}
											label={option.descripcion}
										/>
									))}
								</Dropdown>
								<Dropdown
									size='md'
									name={`referencias_bancarias.${index}.pct_cod_banco`}
									label='Banco'
								>
									<option
										value='0'
										selected={true}
										disabled
										label='Seleccione'
									/>
									{options.pct_cod_banco.map((option) => (
										<option
											key={option.codigo}
											value={option.descripcion}
											label={option.descripcion}
										/>
									))}
								</Dropdown>
							</div>
						</Fragment>
					))}
					{referencias_bancarias.length < 2 && (
						<button
							type='button'
							onClick={() =>
								arrayHelpers.push({ ...initialValues })
							}
							className='mt-3 btn bg-blue-blue btn-border-blue flex gap-2 items-center'
						>
							Agregar <FaPlus />
						</button>
					)}
				</RetractileForm>
			)}
		/>
	)
}

export default Banking
