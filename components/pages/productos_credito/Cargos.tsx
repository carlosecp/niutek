import type { TablaOptions } from '@/lib/interfaces'
import type { Values } from '@/data/productos_credito'
import type { RefSchema } from '@/data/productos_credito/cargos'
import { navLinks, NavLinks } from '@/data/productos_credito'
import { refSchema } from '@/data/productos_credito/cargos'
import { FieldArray } from 'formik'
import CargosTable from './CargosTable'

const SECTION_NAME = NavLinks.Cargos

interface Props {
	options: {
		tabla: TablaOptions
	}
}

const RefCargos = (props: Props) => {
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
						<CargosTable<Values, RefSchema>
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
