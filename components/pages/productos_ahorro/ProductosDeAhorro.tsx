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

const ProductosDeCredito = (props: Props) => {
	const { values } = useFormikContext<ProductoDeAhorroValues>()

	return (
		<section id='productos'>
			<a href='#!' id='_productos' className='anchor' />
			<h1 className='font-medium text-xl text-gray-900'>Producto de Ahorro</h1>
			<article className='form-section my-2 grid grid-cols-12 gap-4'>
				<Select name='p_tipo_credito' label='Tipo de crédito'>
					<option value={0} disabled>
						Seleccione
					</option>
				</Select>
			</article>
		</section>
	)
}

export default ProductosDeCredito
