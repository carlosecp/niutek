import type { Values } from './_crear'
import { useFormikContext, FieldArray } from 'formik'
import TableContainer from '../../../templates/tables/TableContainer'

const RefComerciales = () => {
	const schema = {
		prc_nombre_entidad: '',
		prc_persona_contacto: '',
		prc_direccion: '',
		prc_annios_con_entidad: 0,
		prc_telefono: '',
	}

	const { values } = useFormikContext<Values>()
	type Schema = typeof schema

	return (
		<section id='referencias_comerciales'>
			<h1 className='font-medium text-xl text-gray-900'>
				Referencias Comerciales
			</h1>
			<article className='flex flex-col'>
				<FieldArray name='referencias_comerciales'>
					{(arrayHelpers) => (
						<TableContainer<Values, Schema>
							name='referencias_comerciales'
							schema={schema}
							handleAdd={arrayHelpers.push}
							handleRemove={arrayHelpers.remove}
							limit={2}
						/>
					)}
				</FieldArray>
			</article>
		</section>
	)
}

export default RefComerciales
