import type { TablaOptions } from '@/lib/interfaces'
import type { PersonaJuridicaValues } from '@/data/persona_juridica'
import type { RefSchema } from '@/data/persona_juridica/refBancarias'
import { refSchema } from '@/data/persona_juridica/refBancarias'
import { FieldArray } from 'formik'
import BancariasTable from './BancariasTable'

interface Props {
	options: {
		tabla: TablaOptions
	}
}

const RefBancarias = (props: Props) => {
	const tableProps = {
		name: 'referencias_bancarias',
		refSchema,
		options: props.options,
		limit: 2
	}

	return (
		<section id='referencias_bancarias'>
			<a href='#!' id='_referencias_bancarias' className='anchor'></a>
			<article className='flex flex-col'>
				<FieldArray name='referencias_bancarias'>
					{(arrayHelpers) => (
						<BancariasTable<PersonaJuridicaValues, RefSchema>
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