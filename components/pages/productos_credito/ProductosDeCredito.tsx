import type { TablaOptions, DeptosOption } from '@/lib/interfaces'
import { navLinks, NavLinks } from '@/data/productos_credito'
import { Text, Select, TextArea } from '@/components/forms'
import Garantias from './Garantias'
import Documentos from './Documentos'

const SECTION_NAME = NavLinks.Productos

interface Props {
	options: {
		tabla: TablaOptions
		deptos_municipios: DeptosOption[]
	}
}

const ProductosDeCredito = (props: Props) => {
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
				<Select name='p_cod_tipo_credito' label='Tipo de crédito'>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
				<Select name='p_cod_fuente_de_fondos' label='Fondos propios'>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
				<Select name='p_cod_tipo_contrato' label='Tipo de contrato'>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
				<Text
					name='p_nombre'
					label='Nombre del producto'
					classes={{
						container: 'fc-lg',
						input: 'w-full block form-input form-input-border'
					}}
				/>
				<TextArea name='p_descripcion' label='Descripción' />
				<Documentos />
				<Garantias />
				<Select name='p_cod_moneda' label='Moneda'>
					{props.options.tabla.moneda.map((option) => (
						<option key={option.codigo} value={option.codigo}>
							{option.descripcion}
						</option>
					))}
				</Select>
				<Text
					name='p_tasa_interes_minima'
					label='Tasa de interes mínima'
					classes={{
						container: 'fc-lg md:fc break-line',
						input: 'w-full block form-input form-input-border'
					}}
				/>
				<Text name='p_tasa_interes_maxima' label='Tasa de interes máxima' />
				<Text name='p_monto_minimo' label='Monto mínimo' type='number' />
				<Text name='p_monto_maximo' label='Monto máximo' type='number' />
				<fieldset className='fc-lg md:fc grid grid-cols-12 gap-3'>
					<Text
						name='p_plazo_minimo'
						label='Plazo mínimo'
						classes={{
							container: 'fc',
							input: 'w-full block form-input form-input-border'
						}}
					/>
					<Select name='p_cod_frec_plazo_minimo' label='Período'>
						<option value={0} disabled>
							Seleccione
						</option>
					</Select>
				</fieldset>
				<fieldset className='fc-lg md:fc grid grid-cols-12 gap-3'>
					<Text
						name='p_cod_fre_plazo_maximo'
						classes={{
							container: 'fc',
							input: 'w-full block form-input form-input-border'
						}}
						label='Plazo máximo'
					/>
					<Select name='p_tipo_doc' label='Período'>
						<option value={0} disabled>
							Seleccione
						</option>
					</Select>
				</fieldset>
				<Select name='p_cod_frecuencia_pago' label='Frecuencia de pago'>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
				<Select name='p_cod_tipo_cuota' label='Tipo de cuota'>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
				<Text
					name='p_porc_aportacion'
					label='Porcentaje de aportación'
					type='number'
				/>
				<Select name='p_cod_aplica_grupo' label='Grupo'>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
			</article>
		</section>
	)
}

export default ProductosDeCredito
