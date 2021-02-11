import React, { Fragment } from 'react'
import { useFormikContext, FieldArray } from 'formik'
import { FaPlus, FaTimes } from 'react-icons/fa'
import { Dropdown, Text } from '../../../utils/forms'
import RetractileForm from '../../../utils/retractile_sections'

const Personal = ({ options, loading }) => {
	const initialValues = {
		prp_nombre: '',
		prp_tipo_doc: 0,
		prp_num_doc: '',
		prp_telefono1: '',
		prp_telefono2: '',
		prp_direccion: '',
		prp_lugar_trabajo: '',
		prp_telefono_trabajo: '',
		prp_tiempo_conocer: 0,
		prp_e_mail: '',
	}

	const { values } = useFormikContext()
	const { referencias_personales } = values

	return (
		<FieldArray
			name='referencias_personales'
			render={(arrayHelpers) => (
				<RetractileForm formTitle='Personales'>
					{referencias_personales.map((_, index) => (
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
							<div className='form-grid-layout grid grid-cols-12 gap-2'>
								<Text
									name={`referencias_personales.${index}.prp_nombre`}
									size='md'
									label='Nombre'
								/>
								<Dropdown
									size='md'
									name={`referencias_personales.${index}.prp_tipo_doc`}
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
									name={`referencias_personales.${index}.prp_num_doc`}
									size='md'
									label='No. Documento'
								/>
								<Text
									name={`referencias_personales.${index}.prp_telefono1`}
									size='md'
									label='Teléfono 1'
								/>
								<Text
									name={`referencias_personales.${index}.prp_telefono2`}
									size='md'
									label='Teléfono 2'
								/>
								<Text
									name={`referencias_personales.${index}.prp_direccion`}
									size='md'
									label='Dirección'
								/>
								<Text
									name={`referencias_personales.${index}.prp_lugar_trabajo`}
									size='md'
									label='Lugar de Trabajo'
								/>
								<Text
									name={`referencias_personales.${index}.prp_telefono_trabajo`}
									size='md'
									label='Teléfono Trabajo'
								/>
								<Text
									name={`referencias_personales.${index}.prp_tiempo_conocer`}
									size='md'
									label='Tiempo de Conocer'
									type='number'
								/>
								<Text
									name={`referencias_personales.${index}.prp_e_mail`}
									size='md'
									label='E-mail'
								/>
							</div>
						</Fragment>
					))}
					{referencias_personales.length < 2 && (
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

export default Personal
