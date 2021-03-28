import type { TablaOptions, DeptosOption } from '@/lib/interfaces'
import { Text, Select } from '@/components/forms'
import { navLinks, NavLinks } from '@/data/resolucion_credito'

const SECTION_NAME = NavLinks.Resolucion

interface Props {
	options: {
		tabla: TablaOptions
		deptos_municipios: DeptosOption[]
	}
}

const ResolucionDeCredito = (props: Props) => {
	return (
		<section id={navLinks[SECTION_NAME].anchor}>
			<a
				href='#!'
				id={`_${navLinks[SECTION_NAME].anchor}`}
				className='anchor'
			></a>
			<h1 className='font-medium text-xl text-gray-900'>
				{navLinks[SECTION_NAME].name}
			</h1>
			<article className='form-section my-2 grid grid-cols-12 gap-4'>
				<Text name='_promotor' label='Promotor' disabled />
				<Select name='p_act_economica' label='Actividad económica' disabled>
					<option value={1}>Consumo</option>
				</Select>
				<Select name='p_sector_economico' label='Sector económico'>
					<option value={1}>Comercio</option>
				</Select>
				<Select name='p_destino_credito' label='Destino del crédito'>
					<option value={1}>Consumo</option>
				</Select>
				<Select name='p_estado_solicitud' label='Estado de solicitud'>
					<option value={1}>Aprobada</option>
				</Select>
				<Text
					name='p_fecha_solicitud'
					label='Fecha de solicitud'
					classes={{
						container: 'fc-lg md:fc break-line',
						input: 'w-full block form-input form-input-border'
					}}
				/>
				<Text name='p_fecha_resolucion' label='Fecha de resolución' />

				<Text name='p_monto_solicitud' label='Monto de solicitud' />
				<Text name='p_monto_aprobado' label='Monto aprobado' />

				<Select name='p_cod_moneda' label='Moneda'>
					{props.options.tabla.moneda.map((option) => (
						<option key={option.codigo} value={option.codigo}>
							{option.descripcion}
						</option>
					))}
				</Select>
				<Select name='p_cod_moneda' label='Moneda'>
					{props.options.tabla.moneda.map((option) => (
						<option key={option.codigo} value={option.codigo}>
							{option.descripcion}
						</option>
					))}
				</Select>

				<Text name='p_tasa_interes' label='Tasa de interes mensual' />
				<Text name='p_tasa_interes' label='Tasa de interes mensual' />
				{/* Falta el componente que modifica el plazo a meses, semanas, etc*/}
				<Text name='p_plazo' label='Plazo en meses' />
				<Text name='p_plazo' label='Plazo en meses' />

				<Select name='p_cod_frecuencia' label='Frecuencia de pago'>
					<option value={1}>Mensual</option>
				</Select>
				<Select name='p_cod_frecuencia' label='Frecuencia de pago'>
					<option value={1}>Mensual</option>
				</Select>
				<Text name='p_cuota' label='Cuota' />
				<Text name='p_cuota' label='Cuota' />
			</article>
		</section>
	)
}

export default ResolucionDeCredito
