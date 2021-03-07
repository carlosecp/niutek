import type { TablaOptions } from '@/lib/interfaces'
import type { PersonaNaturalValues } from '@/data/persona_natural'
import type { RefSchema } from '@/data/persona_natural/refPersonales'
import { refSchema } from '@/data/persona_natural/refPersonales'
import { FieldArray } from 'formik'
import PersonalesTable from './PersonalesTable'

interface Props {
	options: {
		tabla: TablaOptions
	}
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
						<PersonalesTable<PersonaNaturalValues, RefSchema>
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
