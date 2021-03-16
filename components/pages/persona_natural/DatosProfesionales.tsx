import { navLinks, NavLinks } from '@/data/persona_natural'
import { Text, TextArea } from '@/components/forms'

const SECTION_NAME = NavLinks.DatosProfesionales

const DatosProfesionales = () => {
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
				<Text name='p_profesion_oficio' label='Profesión' />
				<Text name='p_ocupacion_puesto' label='Ocupación' />
				<Text name='p_nombre_empresa' label='Nombre empresa' />
				<TextArea name='p_actividad_empresa' label='Actividad empresa' />
				<Text name='p_tel_empresa' label='Teléfono de la empresa' />
				<Text name='p_email_empresa' label='Email de la empresa' />
				<Text name='p_ingreso_anual' label='Ingreso anual' type='number' />
			</article>
		</section>
	)
}

export default DatosProfesionales
