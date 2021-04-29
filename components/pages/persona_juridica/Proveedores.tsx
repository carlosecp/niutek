import type { Values } from '@/data/persona_juridica'
import type { RefSchema } from '@/data/persona_juridica/proveedores'
import { navLinks, NavLinks } from '@/data/persona_juridica'
import { refSchema } from '@/data/persona_juridica/proveedores'
import { FieldArray } from 'formik'
import ProveedoresTable from './ProveedoresTable'

const SECTION_NAME = NavLinks.Proveedores

const Proveedores = () => {
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
						<ProveedoresTable<Values, RefSchema>
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

export default Proveedores
