import type { TablaOptions } from '@/lib/interfaces'
import type { PersonaNaturalValues } from '@/data/persona_natural'
import type { RefSchema } from '@/data/persona_natural/refPersonales'
import { navLinks, NavLinks } from '@/data/persona_natural'
import { refSchema } from '@/data/persona_natural/refPersonales'
import { FieldArray } from 'formik'
import PersonalesTable from './PersonalesTable'

const SECTION_NAME = NavLinks.RefPersonales

interface Props {
	options: {
		tabla: TablaOptions
	}
}

const RefPersonales = (props: Props) => {
	const tableProps = {
		name: navLinks[SECTION_NAME].anchor,
		refSchema,
		options: props.options,
		limit: 2
	}

	return (
		<section id={navLinks[SECTION_NAME].anchor}>
			<a
				href='#!'
				id={`_${navLinks[SECTION_NAME].anchor}`}
				className='anchor'
			></a>
			<article className='flex flex-col'>
				<FieldArray name={navLinks[SECTION_NAME].anchor}>
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
