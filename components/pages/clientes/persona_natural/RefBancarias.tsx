import type { Values } from './Index'
import { FieldArray } from 'formik'
import BancariasTable from './BancariasTable'

const RefBancarias = ({ options }) => {
	const schema = {
		prc_nombre_entidad: '',
		prc_persona_contacto: '',
		prc_direccion: '',
		prc_annios_con_entidad: 0,
		prc_telefono: '',
	}

	type Schema = typeof schema

	return (
		<section id='referencias_bancarias'>
			<article className='flex flex-col'>
				<FieldArray name='referencias_bancarias'>
					{(arrayHelpers) => (
						<BancariasTable<Values, Schema>
							name='referencias_bancarias'
							schema={schema}
							options={options}
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

export default RefBancarias
