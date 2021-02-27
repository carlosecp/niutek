import type { TablaOptions } from '../../../../interfaces'
import type { ProductoDeCreditoValues } from './data'
import type { RefSchema } from './data/cargos'
import { refSchema } from './data/cargos'
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
		<section id='referencias_bancarias'>
			<a href='#!' id='_referencias_bancarias' className='anchor'></a>
			<article className='flex flex-col'>
				<FieldArray name='referencias_bancarias'>
					{(arrayHelpers) => (
						<CargosTable<ProductoDeCreditoValues, RefSchema>
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
