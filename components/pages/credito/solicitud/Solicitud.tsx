import type { SolicitudDeCreditoValues } from './data'
import type { TablaOptions, DeptosOption } from '../../../../interfaces'
import * as React from 'react'
import { useFormikContext } from 'formik'
import { Text, Select } from '../../../templates/forms'
import Documentos from './Documentos'

interface Props {
	options: {
		tabla: TablaOptions
		deptos_municipios: DeptosOption[]
	}
}

const Solicitud = (props: Props) => {
	const { values } = useFormikContext<SolicitudDeCreditoValues>()

	return (
		<section id='solicitud'>
			<a href='#!' id='_solicitud' className='anchor'></a>
			<h1 className='font-medium text-xl text-gray-900'>Solicitud</h1>
			<article className='form-section my-2 grid grid-cols-12 gap-4'>
				<Select name='p_sexo' label='Promotor'>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
				<Select name='p_sexo' label='Actividad Económica'>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
				<Select name='p_sexo' label='Sector Económico'>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
				<Select name='p_tipo_doc' label='Destino Crédito'>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
				<Documentos />
				<Text
					name='p_fecha_nacimiento'
					label='Fecha de nacimiento'
					placeholder='YYYY-MM-DD'
				/>
				<Text
					name='p_fecha_nacimiento'
					label='Monto Solicitado'
					type='number'
				/>
				<Select name='p_tipo_doc' label='Moneda'>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
				<Text
					name='p_fecha_nacimiento'
					label='Tasa Interés Mensual'
					type='number'
				/>
				<fieldset className='fc-lg md:fc grid grid-cols-12 gap-3'>
					<Text
						name='p_of_nombre_negocio'
						classes={{
							container: 'fc',
							input: 'w-full block form-input form-input-border'
						}}
						label='Plazo Hasta'
					/>
					<Select name='p_tipo_doc' label='Período'>
						<option value={0} disabled>
							Seleccione
						</option>
					</Select>
				</fieldset>
				<Select name='p_tipo_doc' label='Frecuencia Pago'>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
				<Text name='p_fecha_nacimiento' label='Couta' type='number' />
			</article>
		</section>
	)
}

export default Solicitud
