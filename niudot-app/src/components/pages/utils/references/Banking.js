// React and Router Stuff
import React, { Fragment } from 'react'
// Extra libraries
import { FieldArray } from 'formik'
import { FaPlus, FaTimes } from 'react-icons/fa'
// Other Components
import { Dropdown, Text } from '../forms'
import RetractileForm from '../retractile_sections'

const Banking = ({ values }) => {
	const initialValues = {
		prb_nombre_entidad: 'BDF',
		prb_tipo_servicio_recibido: 'Cuenta de Ahorro',
		prb_fecha_inicio_relacion: '2017-07-28',
		prb_annios_con_entidad: 3,
		prb_telefono: '45789612',
		pct_num_cuenta: '9875567',
		pct_cod_moneda: 1,
		pct_cod_banco: 3,
	}

	return (
		<FieldArray
			name='referencias_bancarias'
			render={(arrayHelpers) => (
				<RetractileForm formTitle='Banking'>
					{values.referencias_bancarias.map((_, index) => (
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
									<option value=''>Seleccione</option>
									<option value={0}>Cordobas</option>
									<option value={1}>Dolares</option>
								</Dropdown>
								<Dropdown
									size='md'
									name={`referencias_bancarias.${index}.pct_cod_banco`}
									label='Código del Banco'
								>
									<option value=''>Seleccione</option>
									<option value={0}>Cordobas</option>
									<option value={1}>Dolares</option>
								</Dropdown>
							</div>
						</Fragment>
					))}
					{values.referencias_bancarias.length < 2 && (
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

export default Banking
