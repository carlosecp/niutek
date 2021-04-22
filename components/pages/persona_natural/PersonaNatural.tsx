import type { Values } from '@/data/persona_natural'
import type { TablaOptions, DeptosOption } from '@/lib/interfaces'
import { navLinks, NavLinks } from '@/data/persona_natural'
import { useFormikContext } from 'formik'
import { Text, Select, TextArea } from '@/components/forms'
import useMunicipio from '@/lib/hooks/useMunicipio'

const SECTION_NAME = NavLinks.PersonaNatural

interface Props {
	options: {
		tabla: TablaOptions
		deptos_municipios: DeptosOption[]
	}
}

const PersonaNatural = (props: Props) => {
	const { values } = useFormikContext<Values>()

	const municipios = useMunicipio(values.p_cod_depto)

	return (
		<section id={navLinks[SECTION_NAME].anchor}>
			<a
				href='#!'
				id={`_${navLinks[SECTION_NAME].anchor}`}
				className='anchor'
			></a>
			<h1 className='font-medium text-xl text-gray-900'>
				{navLinks[SECTION_NAME].name}
			</h1>
			<article className='form-section my-2 grid grid-cols-12 gap-4'>
				<Text name='p_nombres' label='Nombres' />

				<Text name='p_apellidos' label='Apellidos' />
				<Select name='p_sexo' label='Sexo'>
					{props.options.tabla.sexo.map((option) => (
						<option key={option.codigo} value={option.codigo}>
							{option.descripcion}
						</option>
					))}
				</Select>
				<Select name='p_tipo_doc' label='Tipo de documento'>
					{props.options.tabla.tipo_doc.map((option) => (
						<option key={option.codigo} value={option.codigo}>
							{option.descripcion}
						</option>
					))}
				</Select>
				<Text name='p_num_doc' label='No. de documento' />
				<Select name='p_cod_nac' label='Nacionalidad'>
					{props.options.tabla.nacionalidad.map((option) => (
						<option key={option.codigo} value={option.codigo}>
							{option.descripcion}
						</option>
					))}
				</Select>
				<Select name='p_cod_depto' label='Departamento'>
					{props.options.deptos_municipios.map((option) => (
						<option key={option.cod_depto} value={option.cod_depto}>
							{option.nom_depto}
						</option>
					))}
				</Select>
				<Select
					name='p_cod_muni'
					label='Municipio'
					disabled={municipios.loading}
				>
					{municipios.values.map((option) => (
						<option key={option.cod_muni} value={option.cod_muni}>
							{option.nom_municipio}
						</option>
					))}
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
				<Select name='p_cargo_publico' label='Cargo Público'>
					<option value={1}>Si</option>
					<option value={2}>No</option>
				</Select>
				<Text name='p_num_hijos' label='No. de hijos' type='number' />
			</article>
		</section>
	)
}

export default PersonaNatural
