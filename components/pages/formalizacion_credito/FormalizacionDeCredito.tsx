import type { ProductoDeCreditoValues } from '@/data/productos_credito'
import type { TablaOptions, DeptosOption } from '@/lib/interfaces'
import * as React from 'react'
import { useFormikContext } from 'formik'
import { Text, Select, TextArea } from '@/components/forms'

interface Props {
	options: {
		tabla: TablaOptions
		deptos_municipios: DeptosOption[]
	}
}

const ProductosDeCredito = (props: Props) => {
	const { values } = useFormikContext<ProductoDeCreditoValues>()

	return (
		<section id='formalizacion_de_credito'>
			<a href='#!' id='_formalizacion' className='anchor' />
			<h1 className='font-medium text-xl text-gray-900'>
				Formalización de Crédito
			</h1>
			<article className='form-section my-2 grid grid-cols-12 gap-4'>
				<Text name='_cliente' label='Cliente' />
				<Text name='_cliente' label='Producto' />
				<Select name='fuente_de_fondos' label='Promotor'>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
				<Text name='_cliente' label='Monto aprobado' type='number' />
				<Select name='p_tipo_contrato' label='Actividad económica'>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
				<Text
					name='_cliente'
					label='Total cargos formalización'
					type='number'
				/>
				<Select name='p_tipo_contrato' label='Sector económico'>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
				<Select
					name='p_tipo_contrato'
					label='Destino del crédito'
					classes={{
						container: 'fc-lg md:fc break-line',
						input: 'w-full block form-input form-input-border'
					}}
				>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
				<Text name='_cliente' label='Desembolso neto' type='number' />
				<Text name='_cliente' label='Fecha resolución' />
				<Text name='_cliente' label='Fecha desembolso' />
				<Select name='p_moneda' label='Moneda'>
					{props.options.tabla.moneda.map((option) => (
						<option key={option.codigo} value={option.codigo}>
							{option.descripcion}
						</option>
					))}
				</Select>
				<Text name='_cliente' label='Fecha primer pago' />
				<Text
					name='_tasa_interes_minima'
					label='Tasa de interés mensual'
					classes={{
						container: 'fc-lg md:fc break-line',
						input: 'w-full block form-input form-input-border'
					}}
				/>
				<Text name='_tasa_interes_maxima' label='Tipo desembolso' />
				<fieldset className='fc-lg md:fc grid grid-cols-12 gap-3'>
					<Text
						name='p_of_nombre_negocio'
						label='Plazo hasta'
						classes={{
							container: 'fc',
							input: 'w-full block form-input form-input-border'
						}}
					/>
					<Select name='p_tipo_doc' label='Período'>
						<option value={0} disabled>
							Seleccione
						</option>
					</Select>
				</fieldset>
				<Text name='_tasa_interes_maxima' label='Cuota' type='number' />
				<Select name='p_tipo_doc' label='Frecuencia de pago'>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
			</article>
		</section>
	)
}

export default ProductosDeCredito
