import type { TablaOptions } from '../../../../lib/interfaces'
import type { SolicitudDeCreditoValues } from '../../../../data/solicitud_credito'
import type { RefSchema } from '../../../../data/solicitud_credito/garantias'
import { refSchema } from '../../../../data/solicitud_credito/garantias'
import { FieldArray } from 'formik'
import GarantiasTable from './GarantiasTable'

interface Props {
	options: {
		tabla: TablaOptions
	}
}

const Garantias = (props: Props) => {
	const tableProps = {
		name: 'garantias',
		refSchema,
		options: props.options,
		limit: 2
	}

	return (
		<section id='garantias'>
			<a href='#!' id='_garantias' className='anchor'></a>
			<article className='flex flex-col'>
				<FieldArray name='garantias'>
					{(arrayHelpers) => (
						<GarantiasTable<SolicitudDeCreditoValues, RefSchema>
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
