import type { SolicitudDeCreditoValues } from '@/data/solicitud_credito'
import type { TablaOptions, DeptosOption } from '@/lib/interfaces'
import * as React from 'react'
import { Field, useFormikContext } from 'formik'
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
				<p className='col-span-6 flex items-center gap-2'>
					Promotor{' '}
					<Field
						name='p_cod_promotor'
						className='w-full block form-input form-input-border transition form-disabled border-primary form-disabled'
						placeholder='Promotor'
						disabled
					/>
				</p>
				<p className='col-span-6 flex items-center gap-2'>
					Actividad económica{' '}
					<Field
						name='p_cod_act_economica'
						className='w-full block form-input form-input-border transition form-disabled border-primary form-disabled'
						placeholder='Actividad económica'
						disabled
					/>
				</p>
				<p className='col-span-6 flex items-center gap-2'>
					Sector económico{' '}
					<Field
						name='p_cod_sec_economico'
						className='w-full block form-input form-input-border transition form-disabled border-primary form-disabled'
						placeholder='Sector económico'
						disabled
					/>
				</p>
				<p className='col-span-6 flex items-center gap-2'>
					Destino del crédito{' '}
					<Field
						name='p_cod_destino_credito'
						className='w-full block form-input form-input-border transition form-disabled border-primary form-disabled'
						placeholder='Destino del crédito'
						disabled
					/>
				</p>
				<hr className='col-span-12 my-2' />
				<Text
					name='p_fecha_solicitud'
					label='Fecha de solicitud'
					placeholder='YYYY-MM-DD'
				/>
				<Text
					name='p_monto_solicitado'
					label='Monto solicitado'
					type='number'
				/>
				<Select name='p_cod_moneda' label='Moneda'>
					{props.options.tabla.moneda.map((option) => (
						<option key={option.codigo} value={option.codigo}>
							{option.descripcion}
						</option>
					))}
				</Select>
				<Text
					name='p_tasa_interes'
					label='Tasa de interés mensual'
					type='number'
				/>
				<div className='col-span-6'>
					<Documentos />
				</div>
				<div className='col-span-6 flex flex-col gap-4'>
					<fieldset className='fc-lg md:fc grid grid-cols-12 gap-3'>
						<Text
							name='p_plazo'
							label='Plazo Hasta'
							classes={{
								container: 'fc-lg sm:fc',
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
				</div>
			</article>
		</section>
	)
}

export default SolicitudDeCredito
