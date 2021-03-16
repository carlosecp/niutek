import type { PersonaJuridicaValues } from '@/data/persona_juridica'
import type { TablaOptions, DeptosOption } from '@/lib/interfaces'
import { navLinks, NavLinks } from '@/data/persona_juridica'
import { useFormikContext } from 'formik'
import { Text, Select, TextArea } from '@/components/forms'
import useMunicipio from '@/lib/useMunicipio'

const SECTION_NAME = NavLinks.PersonaJuridica

interface Props {
	options: {
		tabla: TablaOptions
		deptos_municipios: DeptosOption[]
	}
}

const PersonaJuridica = (props: Props) => {
	const { values } = useFormikContext<PersonaJuridicaValues>()

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
				<Text name='p_nombre' label='Nombre' />
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
				<Text name='p_num_empleados' label='No. empleados' type='number' />
				<Text name='p_sitio_web' label='Sitio web' />
				<Text name='p_e_mail' label='Correo electrónico' />
				<Text
					name='p_telefono1'
					label='Teléfono 1'
					classes={{
						container: 'fc-lg md:fc break-line',
						input: 'w-full block form-input form-input-border'
					}}
				/>
				<Text name='p_telefono2' label='Teléfono 2' />
				<Text
					name='p_of_direccion'
					label='Dirección'
					classes={{
						container: 'fc-lg',
						input: 'w-full block form-input form-input-border'
					}}
				/>
				<Text
					name='p_fecha_constitucion'
					label='Fecha constitución'
					placeholder='YYYY-MM-DD'
				/>
				<Text
					name='p_fecha_personeria'
					label='Fecha personería'
					placeholder='YYYY-MM-DD'
				/>
				<Text name='p_ingreso_anual' label='Ingreso anual' type='number' />
				<TextArea name='p_actividad_empresa' label='Actividad empresa' />
			</article>
		</section>
	)
}

export default PersonaJuridica
