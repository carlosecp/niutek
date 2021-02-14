import React, { Fragment } from 'react'
import { useFormikContext, FieldArray } from 'formik'
import { FaPlus, FaTimes } from 'react-icons/fa'
import { Dropdown, Text } from '../../utils/forms'
import RetractileForm from '../../utils/retractile_sections'

const Accionists = ({ options, loading }) => {
	const initialValues = {
		pac_nombre_accionista: '',
		pac_tipo_doc: 0,
		pac_num_doc: '',
		pac_porcentaje: 0,
	}

	const { values } = useFormikContext()
	const { accionistas } = values

	return (
		<FieldArray
			name='accionistas'
			render={(arrayHelpers) => (
				<RetractileForm formTitle='Accionistas'>
					{accionistas.map((_, index) => (
						<Fragment key={index}>
							<div className='flex justify-between items-center text-gray-gray'>
								<h3 className='font-bold text-lg mt-3'>
									Accionista {index + 1}
								</h3>
								<div className='mr-4'></div>
								<FaTimes
									className='cursor-pointer transform transition hover:rotate-90'
									onClick={() => arrayHelpers.remove(index)}
								/>
							</div>
							<div className='form-grid-layout'>
								<Text
									name={`accionistas.${index}.pac_nombre_accionista`}
									size='md'
									label='Nombre Accionista'
								/>
								<Dropdown
									size='md'
									name={`accionistas.${index}.pac_tipo_doc`}
									label='Tipo Documento'
									loading={loading}
								>
									<option
										value='0'
										selected='true'
										disabled
										label='Seleccione'
									/>
									{loading ||
										options.p_tipo_doc.map((option) => (
											<option
												key={option.codigo}
												value={option.codigo}
												label={option.descripcion}
											/>
										))}
								</Dropdown>
								<Text
									name={`accionistas.${index}.pac_num_doc`}
									size='md'
									label='No. Identificación'
								/>
								<Text
									name={`accionistas.${index}.pac_porcentaje`}
									size='md'
									label='Porcentaje'
									type='number'
									step='0.5'
								/>
							</div>
						</Fragment>
					))}
					{accionistas.length < 2 && (
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

export default Accionists
