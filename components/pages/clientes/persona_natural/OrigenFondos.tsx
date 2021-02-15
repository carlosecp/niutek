import { useFormikContext } from 'formik'
import { valuesPersonaNatural } from '../../../../data/clientes/persona_natural'
import { Text, Checkbox } from '../../../templates/forms/Fields'

const OrigenFondos = () => {
	const { values } = useFormikContext<valuesPersonaNatural>()

	return (
		<section id='origen_fondos'>
			<h1 className='font-semibold text-2xl'>Origen de Fondos</h1>
			<article className='wrapper my-2 grid grid-cols-12 gap-4'>
				<Checkbox
					name='p_of_negocio_propio'
					classes='fc-lg md:fc no-label'
					label='Negocio Propio'
				/>
				<Text
					name='p_nombre_empresa'
					classes='fc-lg md:fc'
					label='Nombre empresa'
					disabled={values.p_of_negocio_propio}
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

export default OrigenFondos
