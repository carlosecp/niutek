import type { ProductoDeCreditoValues } from './data'
import type { TablaOptions, DeptosOption } from '../../../../interfaces'
import * as React from 'react'
import { useFormikContext } from 'formik'
import { Text, Select, TextArea } from '../../../templates/forms'

interface Props {
	options: {
		tabla: TablaOptions
		deptos_municipios: DeptosOption[]
	}
}

const ProductosDeCredito = (props: Props) => {
	const { values } = useFormikContext<ProductoDeCreditoValues>()

	return (
		<section id='producto_de_credito'>
			<a href='#!' id='_producto_de_credito' className='anchor' />
			<h1 className='font-medium text-xl text-gray-900'>Producto de Crédito</h1>
			<article className='form-section my-2 grid grid-cols-12 gap-4'>
				<Select name='p_tipo_credito' label='Tipo de crédito'>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
				<Select name='fuente_de_fondos' label='Fondos propios'>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
				<Select name='p_tipo_contrato' label='Tipo de contrato'>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
				<Text
					name='nombre_del_producto'
					label='Nombre del producto'
					classes={{
						container: 'fc-lg',
						input: 'w-full block form-input form-input-border'
					}}
				/>
				<TextArea name='_descripcion' label='Descripción' />
				<Select name='p_moneda' label='Moneda'>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
				<Text
					name='_tasa_interes_minima'
					label='Tasa de interes mínima'
					classes={{
						container: 'fc-lg md:fc break-line',
						input: 'w-full block form-input form-input-border'
					}}
				/>
				<Text name='_tasa_interes_maxima' label='Tasa de interes máxima' />
				<Text name='_monto_minimo' label='Monto mínimo' type='number' />
				<Text name='_monto_maximo' label='Monto máximo' type='number' />
				<fieldset className='fc-lg md:fc grid grid-cols-12 gap-3'>
					<Text
						name='p_of_nombre_negocio'
						label='Plazo mínimo'
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
				<fieldset className='fc-lg md:fc grid grid-cols-12 gap-3'>
					<Text
						name='p_of_nombre_negocio'
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
				<Select name='p_tipo_doc' label='Frecuencia de pago'>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
				<Select name='p_tipo_doc' label='Tipo de cuota'>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
			</article>
		</section>
	)
}

export default ProductosDeCredito
