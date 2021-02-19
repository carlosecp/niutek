import type { Data } from '../data'
import { FieldArray } from 'formik'
import BancariasTable from './BancariasTable'

interface Props {
	options: { [x: string]: any }[]
}

const RefBancarias = (props: Props) => {
	const refSchema = {
		prc_nombre_entidad: '',
		prc_persona_contacto: '',
		prc_direccion: '',
		prc_annios_con_entidad: 0,
		prc_telefono: '',
	}

	type RefSchema = typeof refSchema

	const tableProps = {
		name: 'referencias_bancarias',
		refSchema,
		options: props.options,
		limit: 2,
	}

	return (
		<section id='referencias_bancarias'>
			<article className='flex flex-col'>
				<FieldArray name='referencias_bancarias'>
					{(arrayHelpers) => (
						<BancariasTable<Data, RefSchema>
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
