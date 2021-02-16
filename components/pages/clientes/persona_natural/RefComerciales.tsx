import type { Values } from './_crear'
import { useFormikContext, FieldArray } from 'formik'
import TableContainer from '../../../templates/tables/TableContainer'

const ReferenciasComerciales = () => {
	const { values } = useFormikContext<Values>()

	type Schema = typeof values.referencias_comerciales

	return (
		<section id='referencias_comerciales'>
			<h1 className='font-medium text-xl text-gray-900'>
				Referencias Comerciales
			</h1>
			<article className='flex flex-col'>
				<FieldArray name='referenciasComerciales'>
					{(arrayHelpers) => (
						<TableContainer<Schema>
							name='referenciasComerciales'
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

export default ReferenciasComerciales
