import type { ProductoDeAhorroValues } from '@/data/productos_ahorro'
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

const ProductosDeAhorro = (props: Props) => {
	const { values } = useFormikContext<ProductoDeAhorroValues>()

	return (
		<section id='productos'>
			<a href='#!' id='_productos' className='anchor' />
			<h1 className='font-medium text-xl text-gray-900'>Producto de Ahorro</h1>
			<article className='form-section my-2 grid grid-cols-12 gap-4'>
				<Text name='p_nombre' label='Nombre del producto' />
				<TextArea name='p_descripcion' label='Descripcion' />
				<Select name='p_cod_moneda' label='Moneda'>
					{props.options.tabla.moneda.map((option) => (
						<option key={option.codigo} value={option.codigo}>
							{option.descripcion}
						</option>
					))}
				</Select>
				<Text
					name='p_tasa_interes'
					label='Tasa de interes mensual'
					type='number'
				/>
				<Text
					name='p_monto_minimo_apertura'
					label='Monto minimo apertura'
					type='number'
				/>
				<Text
					name='p_monto_promedio_mensual'
					label='Monto promedio mensual'
					type='number'
				/>
				<Text
					name='p_max_retiros_mes'
					label='Maximos retiros mensuales'
					type='number'
				/>
				<Text
					name='p_monto_max_por_retiro'
					label='Monto maximo por retiro'
					type='number'
				/>

				<Select name='' label='Tipo de crédito'>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
			</article>
		</section>
	)
}

export default ProductosDeAhorro
