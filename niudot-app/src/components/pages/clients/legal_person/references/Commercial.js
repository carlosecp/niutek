import React, { Fragment } from 'react'
import { useFormikContext, FieldArray } from 'formik'
import { FaPlus, FaTimes } from 'react-icons/fa'
import { Text } from '../../../utils/forms'
import RetractileForm from '../../../utils/retractile_sections'

const Comerciales = () => {
	const initialValues = {
		prc_nombre_entidad: '',
		prc_persona_contacto: '',
		prc_direccion: '',
		prc_annios_con_entidad: 0,
		prc_telefono: '',
	}

	const { values } = useFormikContext()

	return (
		<FieldArray
			name='referencias_comerciales'
			render={(arrayHelpers) => (
				<RetractileForm formTitle='Comerciales'>
					{values.referencias_comerciales.map((_, index) => (
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
									name={`referencias_comerciales.${index}.prc_nombre_entidad`}
									size='md'
									label='Nombre Entidad'
								/>
								<Text
									name={`referencias_comerciales.${index}.prc_persona_contacto`}
									size='md'
									label='Persona de Contacto'
								/>
								<Text
									name={`referencias_comerciales.${index}.prc_direccion`}
									size='lg'
									label='Dirección'
								/>
								<Text
									name={`referencias_comerciales.${index}.prc_annios_con_entidad`}
									size='md'
									label='Años con entidad'
									type='number'
									step='1'
								/>
								<Text
									name={`referencias_comerciales.${index}.prc_telefono`}
									size='md'
									label='Teléfono'
								/>
							</div>
						</Fragment>
					))}
					{values.referencias_comerciales.length < 2 && (
						<button
							type='button'
							onClick={() => arrayHelpers.push({ ...initialValues })}
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

export default Comerciales
