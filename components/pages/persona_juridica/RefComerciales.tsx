import type { PersonaJuridicaValues } from '@/data/persona_juridica'
import type { RefSchema } from '@/data/persona_juridica/refComerciales'
import { refSchema } from '@/data/persona_juridica/refComerciales'
import { FieldArray } from 'formik'
import ComercialesTable from './ComercialesTable'

const RefComerciales = () => {
	const tableProps = {
		name: 'referencias_comerciales',
		refSchema,
		limit: 2
	}

	return (
		<section id='referencias_comerciales'>
			<a href='#!' id='_referencias_comerciales' className='anchor'></a>
			<article className='flex flex-col'>
				<FieldArray name='referencias_comerciales'>
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
