import { Text, Select, TextArea } from '../../../templates/forms/Fields'

const PersonaNatural = () => {
	return (
		<section id='persona_natural'>
			<h1 className='font-semibold text-2xl'>Crear Persona Natural</h1>
			<article className='wrapper my-2 grid grid-cols-12 gap-4'>
				<Text name='p_nombres' classes='fc-lg md:fc' label='Nombres' />
				<Text
					name='p_apellidos'
					classes='fc-lg md:fc'
					label='Apellidos'
				/>
				<Select name='p_sexo' classes='fc-lg md:fc' label='Sexo'>
					<option value={1}>Primera Opcion</option>
					<option value={2}>Segunda Opcion</option>
				</Select>
				<Select
					name='p_tipo_doc'
					classes='fc-lg md:fc'
					label='Tipo de documento'
				>
					<option value={1}>Primera Opcion</option>
					<option value={2}>Segunda Opcion</option>
				</Select>
				<Text
					name='p_num_doc'
					classes='fc-lg md:fc'
					label='No. de documento'
				/>
				<Select
					name='p_cod_nac'
					classes='fc-lg md:fc'
					label='Nacionalidad'
				>
					<option value={1}>Primera Opcion</option>
					<option value={2}>Segunda Opcion</option>
				</Select>
				<Select
					name='p_cod_depto'
					classes='fc-lg md:fc'
					label='Departamento'
				>
					<option value={1}>Primera Opcion</option>
					<option value={2}>Segunda Opcion</option>
				</Select>
				<Select
					name='p_cod_muni'
					classes='fc-lg md:fc'
					label='Municipio'
				>
					<option value={1}>Primera Opcion</option>
					<option value={2}>Segunda Opcion</option>
				</Select>
				<TextArea
					name='p_direccion'
					classes='fc-lg'
					label='Dirección'
				/>
				<Text
					name='p_notas'
					classes='fc-lg md:fc'
					label='Observaciones'
				/>
				<Text
					name='p_telefono1'
					classes='fc-lg md:fc'
					label='Teléfono 1'
				/>
				<Text
					name='p_telefono2'
					classes='fc-lg md:fc'
					label='Teléfono 2'
				/>
				<Text
					name='p_lugar_nacimiento'
					classes='fc-lg md:fc'
					label='Lugar de nacimiento'
				/>
				<Text
					name='p_fecha_nacimiento'
					classes='fc-lg md:fc'
					label='Fecha de nacimiento'
				/>
				<Text
					name='p_cargo_publico'
					classes='fc-lg md:fc'
					label='Cargo Público'
				/>
				<Text
					name='p_num_hijos'
					classes='fc-lg md:fc'
					label='No. de hijos'
					type='number'
				/>
			</article>
		</section>
	)
}

export default PersonaNatural
