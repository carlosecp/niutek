import type { Data } from '../data'
import { FieldArray } from 'formik'
import ComercialesTable from './ComercialesTable'

const RefComerciales = () => {
	const refSchema = {
		prc_nombre_entidad: '',
		prc_persona_contacto: '',
		prc_direccion: '',
		prc_annios_con_entidad: 0,
		prc_telefono: '',
	}

	type RefSchema = typeof refSchema

	const tableProps = {
		name: 'referencias_comerciales',
		refSchema,
		limit: 2,
	}

	return (
		<section id='referencias_comerciales'>
			<a href='#!' id='_referencias_comerciales' className='anchor'></a>
			<article className='flex flex-col'>
				<FieldArray name='referencias_comerciales'>
					{(arrayHelpers) => (
						<ComercialesTable<Data, RefSchema>
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
