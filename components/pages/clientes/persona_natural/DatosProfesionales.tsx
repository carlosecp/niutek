import { Text } from '../../../templates/forms/_fields'

const DatosProfesionales = () => {
	return (
		<section id='datos_profesionales'>
			<h1 className='font-medium text-xl text-gray-900'>
				Datos Profesionales
			</h1>
			<article className='form-section my-2 grid grid-cols-12 gap-4'>
				<Text name='p_profesion_oficio' label='Profesión' />
				<Text name='p_nombre_empresa' label='Nombre empresa' />
				<Text name='p_actividad_empresa' label='Puesto' />
				<Text name='p_tel_empresa' label='Teléfono de la empresa' />
				<Text name='p_email_empresa' label='Email de la empresa' />
				<Text
					name='p_ingreso_anual'
					label='Ingreso anual'
					type='number'
				/>
			</article>
		</section>
	)
}

export default DatosProfesionales
