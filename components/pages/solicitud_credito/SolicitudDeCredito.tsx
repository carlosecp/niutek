import type { SolicitudDeCreditoValues } from '@/data/solicitud_credito'
import type { TablaOptions, DeptosOption } from '@/lib/interfaces'
import * as React from 'react'
import { useFormikContext } from 'formik'
import { Text, Select } from '@/components/forms'
import Documentos from './Documentos'

interface Props {
	options: {
		tabla: TablaOptions
		deptos_municipios: DeptosOption[]
	}
}

const SolicitudDeCredito = (props: Props) => {
	const { values } = useFormikContext<SolicitudDeCreditoValues>()

	return (
		<section id='solicitud'>
			<a href='#!' id='_solicitud' className='anchor'></a>
			<h1 className='font-medium text-xl text-gray-900'>Solicitud</h1>
			<article className='form-section my-2 grid grid-cols-12 gap-4'>
				<Select name='p_cod_promotor' label='Promotor'>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
				<Text
					name='p_fecha_solicitud'
					label='Fecha de solicitud'
					placeholder='YYYY-MM-DD'
				/>
				<Select name='p_cod_act_economica' label='Actividad económica'>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
				<Text
					name='p_monto_solicitado'
					label='Monto solicitado'
					type='number'
				/>
				<Select name='p_cod_sec_economico' label='Sector económico'>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
				<Select name='p_cod_moneda' label='Moneda'>
					{props.options.tabla.moneda.map((option) => (
						<option key={option.codigo} value={option.codigo}>
							{option.descripcion}
						</option>
					))}
				</Select>
				<Select name='p_cod_destino_credito' label='Destino de crédito'>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
				<Text
					name='p_tasa_interes'
					label='Tasa de interés mensual'
					type='number'
				/>
				<Documentos />
				<fieldset className='fc-lg md:fc grid grid-cols-12 gap-3'>
					<Text
						name='p_plazo'
						label='Plazo Hasta'
						classes={{
							container: 'fc',
							input: 'w-full block form-input form-input-border'
						}}
					/>
					<Select name='p_cod_frec_plazo' label='Frecuencia'>
						<option value={0} disabled>
							Seleccione
						</option>
					</Select>
				</fieldset>
				<Select name='p_cod_frecuencia_pago' label='Frecuncia de pago'>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
				<Text name='cuota' label='Couta' type='number' />
			</article>
		</section>
	)
}

export default SolicitudDeCredito
