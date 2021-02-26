import type { TablaOptions } from '../../../../interfaces'
import type { SolicitudDeCreditoValues } from './data'
import type { RefSchema } from './data/garantias'
import { refSchema } from './data/garantias'
import { FieldArray } from 'formik'
import GarantiasTable from './GarantiasTable'

interface Props {
	options: TablaOptions
}

const RefBancarias = (props: Props) => {
	const tableProps = {
		name: 'referencias_bancarias',
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

export default RefBancarias
