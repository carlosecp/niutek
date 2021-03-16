import type { TablaOptions } from '@/lib/interfaces'
import type { PersonaJuridicaValues } from '@/data/persona_juridica'
import type { RefSchema } from '@/data/persona_juridica/accionistas'
import { navLinks, NavLinks } from '@/data/persona_juridica'
import { refSchema } from '@/data/persona_juridica/accionistas'
import { FieldArray } from 'formik'
import AccionistasTable from './AccionistasTable'

const SECTION_NAME = NavLinks.Accionistas

interface Props {
	options: {
		tabla: TablaOptions
	}
}

const Accionistas = (props: Props) => {
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
						<AccionistasTable<PersonaJuridicaValues, RefSchema>
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

export default Accionistas
