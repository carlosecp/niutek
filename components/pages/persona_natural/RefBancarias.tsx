import type { TablaOptions } from '@/lib/interfaces'
import type { PersonaNaturalValues } from '@/data/persona_natural'
import type { RefSchema } from '@/data/persona_natural/refBancarias'
import { navLinks, NavLinks } from '@/data/persona_natural'
import { refSchema } from '@/data/persona_natural/refBancarias'
import { FieldArray } from 'formik'
import BancariasTable from './BancariasTable'

const SECTION_NAME = NavLinks.RefBancarias

interface Props {
	options: {
		tabla: TablaOptions
	}
}

const RefBancarias = (props: Props) => {
	const tableProps = {
		name: navLinks[SECTION_NAME].anchor,
		title: navLinks[SECTION_NAME].name,
		tableKeys: Object.keys(refSchema),
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
						<BancariasTable<PersonaNaturalValues, RefSchema>
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

export default RefBancarias
