import { Text, Select, TextArea } from '../../../templates/forms/_fields'

const PersonaNatural = ({ options }) => {
	return (
		<section id='persona_natural'>
			<h1 className='font-medium text-xl text-gray-900'>
				Crear Persona Natural
			</h1>
			<article className='form-section my-2 grid grid-cols-12 gap-4'>
				<Text name='p_nombres' label='Nombres' />
				<Text name='p_apellidos' label='Apellidos' />
				<Select name='p_sexo' label='Sexo'>
					{options.p_sexo.map((option) => (
						<option
							value={option.codigo}
							label={option.descripcion}
						>
							{option.descripcion}
						</option>
					))}
				</Select>
				<Select name='p_tipo_doc' label='Tipo de documento'>
					<option value={1}>Primera Opcion</option>
					<option value={2}>Segunda Opcion</option>
				</Select>
				<Text name='p_num_doc' label='No. de documento' />
				<Select name='p_cod_nac' label='Nacionalidad'>
					<option value={1}>Primera Opcion</option>
					<option value={2}>Segunda Opcion</option>
				</Select>
				<Select name='p_cod_depto' label='Departamento'>
					<option value={1}>Primera Opcion</option>
					<option value={2}>Segunda Opcion</option>
				</Select>
				<Select name='p_cod_muni' label='Municipio'>
					<option value={1}>Primera Opcion</option>
					<option value={2}>Segunda Opcion</option>
				</Select>
				<TextArea name='p_direccion' label='Dirección' />
				<Text name='p_notas' label='Observaciones' />
				<Text name='p_telefono1' label='Teléfono 1' />
				<Text name='p_telefono2' label='Teléfono 2' />
				<Text name='p_lugar_nacimiento' label='Lugar de nacimiento' />
				<Text
					name='p_fecha_nacimiento'
					label='Fecha de nacimiento'
					placeholder='YYYY-MM-DD'
				/>
				<Text
					name='p_cargo_publico'
					label='Cargo Público'
					type='number'
				/>
				<Text name='p_num_hijos' label='No. de hijos' type='number' />
			</article>
		</section>
	)
}

export default PersonaNatural
