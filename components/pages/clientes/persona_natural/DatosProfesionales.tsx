import { Text } from '../../../templates/forms/Fields'

const DatosProfesionales = () => {
	return (
		<section id='datos_profesionales'>
			<h1 className='font-semibold text-2xl'>Datos Profesionales</h1>
			<article className='wrapper my-2 grid grid-cols-12 gap-4'>
				<Text
					name='p_profesion_oficio'
					classes='fc-lg md:fc'
					label='Profesión'
				/>
				<Text
					name='p_nombre_empresa'
					classes='fc-lg md:fc'
					label='Nombre empresa'
				/>
				<Text
					name='p_actividad_empresa'
					classes='fc-lg md:fc'
					label='Puesto'
				/>
				<Text
					name='p_tel_empresa'
					classes='fc-lg md:fc'
					label='Teléfono de la empresa'
				/>
				<Text
					name='p_email_empresa'
					classes='fc-lg md:fc'
					label='Email de la empresa'
				/>
				<Text
					name='p_ingreso_anual'
					classes='fc-lg md:fc'
					label='Ingreso anual'
					type='number'
				/>
			</article>
		</section>
	)
}

export default DatosProfesionales
