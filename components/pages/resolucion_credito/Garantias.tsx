import type { TablaOptions } from '@/lib/interfaces'
import type { ResolucionDeCreditoValues } from '@/data/resolucion_credito'
import type { RefSchema } from '@/data/resolucion_credito/garantias'
import { navLinks, NavLinks } from '@/data/resolucion_credito'
import { refSchema } from '@/data/resolucion_credito/garantias'
import { FieldArray } from 'formik'
import GarantiasTable from './GarantiasTable'

const SECTION_NAME = NavLinks.Garantias

interface Props {
	options: {
		tabla: TablaOptions
	}
}

const Garantias = (props: Props) => {
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
						<GarantiasTable<ResolucionDeCreditoValues, RefSchema>
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

export default Garantias
