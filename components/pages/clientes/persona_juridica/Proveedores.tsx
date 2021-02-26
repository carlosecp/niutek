import type { TablaOptions } from '../../../../interfaces'
import type { PersonaJuridicaValues } from './data'
import type { RefSchema } from './data/proveedores'
import { refSchema } from './data/proveedores'
import { FieldArray } from 'formik'
import ProveedoresTable from './ProveedoresTable'

interface Props {
	options: TablaOptions
}

const Proveedores = (props: Props) => {
	const tableProps = {
		name: 'proveedores',
		refSchema,
		options: props.options,
		limit: 2
	}

	return (
		<section id='proveedores'>
			<a href='#!' id='_proveedores' className='anchor'></a>
			<article className='flex flex-col'>
				<FieldArray name='proveedores'>
					{(arrayHelpers) => (
						<ProveedoresTable<PersonaJuridicaValues, RefSchema>
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
