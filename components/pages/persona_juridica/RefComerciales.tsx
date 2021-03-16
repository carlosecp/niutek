import type { PersonaJuridicaValues } from '@/data/persona_juridica'
import type { RefSchema } from '@/data/persona_juridica/refComerciales'
import { navLinks, NavLinks } from '@/data/persona_juridica'
import { refSchema } from '@/data/persona_juridica/refComerciales'
import { FieldArray } from 'formik'
import ComercialesTable from './ComercialesTable'

const SECTION_NAME = NavLinks.RefComerciales

const RefComerciales = () => {
	const tableProps = {
		name: navLinks[SECTION_NAME].anchor,
		title: navLinks[SECTION_NAME].name,
		tableKeys: Object.keys(refSchema),
		refSchema,
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
						<ComercialesTable<PersonaJuridicaValues, RefSchema>
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
