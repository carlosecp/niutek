import type { Data } from '../data'
import type { RefSchema } from '../data/refPersonales'
import { refSchema } from '../data/refPersonales'
import { FieldArray } from 'formik'
import PersonalesTable from './PersonalesTable'

interface Props {
	options: { [x: string]: any }[]
}

const RefPersonales = (props: Props) => {
	const tableProps = {
		name: 'referencias_personales',
		refSchema,
		options: props.options,
		limit: 2
	}

	return (
		<section id='referencias_personales'>
			<a href='#!' id='_referencias_personales' className='anchor'></a>
			<article className='flex flex-col'>
				<FieldArray name='referencias_personales'>
					{(arrayHelpers) => (
						<PersonalesTable<Data, RefSchema>
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

export default RefPersonales
