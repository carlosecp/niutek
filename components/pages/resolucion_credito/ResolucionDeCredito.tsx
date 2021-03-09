import type { PersonaNaturalValues } from '@/data/persona_natural'
import type { TablaOptions, DeptosOption } from '@/lib/interfaces'
import * as React from 'react'
import { useFormikContext } from 'formik'
import { Text, Select, TextArea } from '@/components/forms'
import useMunicipio from '@/lib/useMunicipio'

interface Props {
	options: {
		tabla: TablaOptions
		deptos_municipios: DeptosOption[]
	}
}

const ResolucionDeCredito = (props: Props) => {
	const { values } = useFormikContext<PersonaNaturalValues>()

	const municipios = useMunicipio(values.p_cod_depto)

	return (
		<section id='resolucion_de_credito'>
			<a href='#!' id='_resolucion_de_credito' className='anchor'></a>
			<h1 className='font-medium text-xl text-gray-900'>
				Resolucion de Credito
			</h1>
			<article className='form-section my-2 grid grid-cols-12 gap-4'>
				<Select name='_promotor' label='Promotor'>
					<option value={0} disabled>
						Seleccione
					</option>
					<option value={1}>Fulano de tal</option>
				</Select>
				<Select name='p_act_economica' label='Actividad economica'>
					<option value={0} disabled>
						Seleccione
					</option>
					<option value={1}>Consumo</option>
				</Select>
				<Select name='p_sector_economico' label='Sector economico'>
					<option value={0} disabled>
						Seleccione
					</option>
					<option value={1}>Comercio</option>
				</Select>
				<Select name='p_destino_credito' label='Destino del Credito'>
					<option value={0} disabled>
						Seleccione
					</option>
					<option value={1}>Consumo</option>
				</Select>
				<Select name='p_estado_solicitud' label='Estado de solicitud'>
					<option value={0} disabled>
						Seleccione
					</option>
					<option value={1}>Aprobada</option>
				</Select>
				<Text name='p_fecha_solicitud' label='Fecha de Solicitud' />
				<Text name='p_fecha_resolucion' label='Fecha de Resolucion' />

				<Text name='p_monto_solicitud' label='Monto de Solicitud' />
				<Text name='p_monto_aprobado' label='Monto Aprobado' />

				<Select name='p_cod_moneda' label='Moneda'>
					<option value={0} disabled>
						Seleccione
					</option>
					{props.options.tabla.moneda.map((option) => (
						<option key={option.codigo} value={option.codigo}>
							{option.descripcion}
						</option>
					))}
				</Select>
				<Select name='p_cod_moneda' label='Moneda'>
					<option value={0} disabled>
						Seleccione
					</option>
					{props.options.tabla.moneda.map((option) => (
						<option key={option.codigo} value={option.codigo}>
							{option.descripcion}
						</option>
					))}
				</Select>

				<Text name='p_tasa_interes' label='Tasa de interes mensual' />
				<Text name='p_tasa_interes' label='Tasa de interes mensual' />
				{/* Falta el componente que modifica el plazo a meses, semanas, etc*/}
				<Text name='p_plazo' label='Plazo en Meses' />
				<Text name='p_plazo' label='Plazo en Meses' />

				<Select name='p_cod_frecuencia' label='Frecuencia de Pago'>
					<option value={0} disabled>
						Seleccione
					</option>
					<option value={1}>Mensual</option>
				</Select>
				<Select name='p_cod_frecuencia' label='Frecuencia de Pago'>
					<option value={0} disabled>
						Seleccione
					</option>
					<option value={1}>Mensual</option>
				</Select>
				<Text name='p_cuota' label='Cuota' />
				<Text name='p_cuota' label='Cuota' />
			</article>
		</section>
	)
}

export default ResolucionDeCredito
