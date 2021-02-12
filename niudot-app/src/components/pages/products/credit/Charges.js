import React, { Fragment } from 'react'
import { useFormikContext, FieldArray } from 'formik'
import { FaPlus, FaTimes } from 'react-icons/fa'
import { Dropdown, Text } from '../../utils/forms'
import RetractileForm from '../../utils/retractile_sections'

const Charges = ({ options, loading }) => {
	const initialValues = {
		pcr_descripcion_cargo: '',
		pcr_cod_moneda: 0,
		pcr_valor: 0,
		pcr_cod_tipo: 0,
	}

	const { values } = useFormikContext()
	const { cargos } = values

	return (
		<FieldArray
			name='cargos'
			render={(arrayHelpers) => (
				<RetractileForm formTitle='Cargos'>
					{cargos.map((_, index) => (
						<Fragment key={index}>
							<div className='flex justify-between items-center text-gray-gray'>
								<h3 className='font-bold text-lg mt-3'>
									Cargo {index + 1}
								</h3>
								<div className='mr-4'></div>
								<FaTimes
									className='cursor-pointer transform transition hover:rotate-90'
									onClick={() => arrayHelpers.remove(index)}
								/>
							</div>
							<div className='form-grid-layout grid grid-cols-12 gap-2'>
								<Text
									name={`cargos.${index}.pcr_descripcion_cargo`}
									size='md'
									label='Descripción del Cargo'
								/>
								<Dropdown
									size='md'
									name={`cargos.${index}.pcr_cod_moneda`}
									label='Moneda'
								>
									<option value=''>Seleccione</option>
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
									name={`cargos.${index}.pcr_valor`}
									size='md'
									label='Valor'
									type='number'
								/>
								<Dropdown
									size='md'
									name={`cargos.${index}.pcr_cod_tipo`}
									label='Tipo (%/Monto)'
								>
									<option value=''>Seleccione</option>
									{loading ||
										options.tipo_cargo.map((option) => (
											<option
												key={option.codigo}
												value={option.codigo}
												label={option.descripcion}
											/>
										))}
								</Dropdown>
							</div>
						</Fragment>
					))}
					{cargos.length < 10 && (
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

export default Charges
