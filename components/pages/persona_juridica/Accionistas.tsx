import type { TablaOptions } from '@/lib/interfaces'
import type { PersonaJuridicaValues } from '@/data/persona_juridica'
import type { RefSchema } from '@/data/persona_juridica/proveedores'
import { refSchema } from '@/data/persona_juridica/proveedores'
import { FieldArray } from 'formik'
import AccionistasTable from './AccionistasTable'

const name = 'accionistas'

interface Props {
	options: {
		tabla: TablaOptions
	}
}

const Accionistas = (props: Props) => {
	const tableProps = {
		name,
		refSchema,
		options: props.options,
		limit: 2
	}

	return (
		<section id={name}>
			<a href='#!' id={`_${name}`} className='anchor'></a>
			<article className='flex flex-col'>
				<FieldArray name={name}>
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
