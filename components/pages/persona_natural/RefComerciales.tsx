import type { PersonaNaturalValues } from '@/data/persona_natural'
import type { RefSchema } from '@/data/persona_natural/refComerciales'
import { navLinks, NavLinks } from '@/data/persona_natural'
import { refSchema } from '@/data/persona_natural/refComerciales'
import { FieldArray } from 'formik'
import ComercialesTable from './ComercialesTable'

const SECTION_NAME = NavLinks.RefComerciales

const RefComerciales = () => {
	const tableProps = {
		name: navLinks[SECTION_NAME].anchor,
		title: navLinks[SECTION_NAME].name,
		tableKeys: Object.keys(refSchema),
		refSchema,
		limit: 4
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
						<ComercialesTable<PersonaNaturalValues, RefSchema>
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

export default RefComerciales
