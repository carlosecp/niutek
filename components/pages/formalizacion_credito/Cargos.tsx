import type { TablaOptions } from '@/lib/interfaces'
import type { ProductosDeCreditoValues } from '@/data/productos_credito'
import type { RefSchema } from '@/data/productos_credito/cargos'
import { refSchema } from '@/data/productos_credito/cargos'
import { FieldArray } from 'formik'
import CargosTable from './CargosTable'

interface Props {
	options: {
		tabla: TablaOptions
	}
}

const RefCargos = (props: Props) => {
	const tableProps = {
		name: 'cargos',
		refSchema,
		options: props.options,
		limit: 2
	}

	return (
		<section id='cargos'>
			<a href='#!' id='_cargos' className='anchor'></a>
			<article className='flex flex-col'>
				<FieldArray name='cargos'>
					{(arrayHelpers) => (
						<CargosTable<ProductosDeCreditoValues, RefSchema>
							{...tableProps}
							handleAdd={arrayHelpers.push}
							handleRemove={arrayHelpers.remove}
						/>
					)}
				</FieldArray>
			</article>
		</section>
	)
}

export default RefCargos
