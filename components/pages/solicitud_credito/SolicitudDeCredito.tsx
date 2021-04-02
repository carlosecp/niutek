import type { TablaOptions, DeptosOption } from '@/lib/interfaces'
import { navLinks, NavLinks } from '@/data/solicitud_credito'
import { Field } from 'formik'
import { Text, Select, MultipleChoice } from '@/components/forms'

const SECTION_NAME = NavLinks.Solicitud

interface Props {
	options: {
		tabla: TablaOptions
		deptos_municipios: DeptosOption[]
	}
}

const documentos = [
	{ name: 'pdc_cod_documento', label: 'Fotocopia de cédula', value: 1 },
	{ name: 'pdc_cod_documento', label: 'Constancia salarial', value: 2 },
	{ name: 'pdc_cod_documento', label: 'Carta de recomendación', value: 3 }
]

const SolicitudDeCredito = (props: Props) => {
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
				<div className='col-span-12 md:col-span-6 flex items-center gap-2 text-sm font-medium text-gray-700'>
					Promotor{' '}
					<Select
						name='p_cod_promotor'
						classes={{
							container: 'w-full',
							input: 'w-full block form-input form-input-border'
						}}
						disabled
					>
						<option value={1}>Opcion 1</option>
						<option value={2}>Opcion 2</option>
					</Select>
				</div>
				<div className='col-span-12 md:col-span-6 flex items-center gap-2 text-sm font-medium text-gray-700'>
					Actividad económica{' '}
					<Select
						name='p_cod_act_economica'
						classes={{
							container: 'w-full',
							input: 'w-full block form-input form-input-border'
						}}
						disabled
					>
						<option value={1}>Opcion 1</option>
						<option value={2}>Opcion 2</option>
					</Select>
				</div>
				<div className='col-span-12 md:col-span-6 flex items-center gap-2 text-sm font-medium text-gray-700'>
					Sector económico{' '}
					<Select
						name='p_cod_sec_economico'
						classes={{
							container: 'w-full',
							input: 'w-full block form-input form-input-border'
						}}
						disabled
					>
						<option value={1}>Opcion 1</option>
						<option value={2}>Opcion 2</option>
					</Select>
				</div>
				<div className='col-span-12 md:col-span-6 flex items-center gap-2 text-sm font-medium text-gray-700'>
					Destino del crédito{' '}
					<Select
						name='p_cod_destino_credito'
						classes={{
							container: 'w-full',
							input: 'w-full block form-input form-input-border'
						}}
						disabled
					>
						<option value={1}>Opcion 1</option>
						<option value={2}>Opcion 2</option>
					</Select>
				</div>
				<div className='col-span-12 md:col-span-6 flex items-center gap-2 text-sm font-medium text-gray-700'>
					Estado de solicitud{' '}
					<Select
						name='p_cod_destino_credito'
						classes={{
							container: 'w-full',
							input: 'w-full block form-input form-input-border'
						}}
						disabled
					>
						<option value={1}>Opcion 1</option>
						<option value={2}>Opcion 2</option>
					</Select>
				</div>
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
				<MultipleChoice
					title='Documentos requeridos'
					classes={{ container: 'fc-lg sm:fc' }}
					fields={documentos}
				/>
				<div className='col-span-12 md:col-span-6 flex flex-col gap-4'>
					<fieldset className='fc-lg md:fc grid grid-cols-12 gap-3'>
						<Text
							name='p_plazo'
							label='Plazo Hasta'
							classes={{
								container: 'fc',
								input: 'w-full block form-input form-input-border'
							}}
						/>
						<Select
							name='p_cod_frec_plazo'
							label='Frecuencia'
							classes={{
								container: 'fc',
								input: 'w-full block form-input form-input-border'
							}}
						>
							<option value={1}>Opcion 1</option>
							<option value={2}>Opcion 2</option>
						</Select>
					</fieldset>
					<Select name='p_cod_frecuencia_pago' label='Frecuncia de pago'>
						<option value={1}>Opcion 1</option>
						<option value={2}>Opcion 2</option>
					</Select>
					<Text name='cuota' label='Couta' type='number' />
				</div>
			</article>
		</section>
	)
}

export default SolicitudDeCredito
