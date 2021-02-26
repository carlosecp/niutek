import type { TablaOptions } from '../../../../interfaces'
import type { ProductoDeCreditoValues } from './data'
import type { RefSchema } from './data/refCargos'
import { refSchema } from './data/refCargos'
import { FieldArray } from 'formik'
import CargosTable from './CargosTable'
interface Props {
	options: TablaOptions
}

const RefCargos = (props: Props) => {
	const tableProps = {
		name: 'referencias_bancarias',
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
						<CargosTable<PersonaNaturalValues, RefSchema>
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
