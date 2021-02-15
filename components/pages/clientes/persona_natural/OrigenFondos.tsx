import type { valuesPersonaNatural } from '../../../../data/clientes/persona_natural/data'
import { useFormikContext } from 'formik'
import { Text, Checkbox } from '../../../templates/forms/Fields'

const OrigenFondos = () => {
	const { values } = useFormikContext<valuesPersonaNatural>()

	return (
		<section id='origen_fondos'>
			<h1 className='font-semibold text-2xl'>Origen de Fondos</h1>
			<article className='form-section my-2 grid grid-cols-12 gap-4'>
				<fieldset className='fc-lg flex grid grid-cols-12'>
					<Checkbox
						name='p_of_negocio_propio'
						label='Negocio Propio'
					/>
					<Text
						name='p_nombre_empresa'
						classes={{
							container: 'fc-lg md:fc-md',
							input:
								'form-input form-input-border disabled:disabled',
						}}
						label='Nombre empresa'
						disabled={!values.p_of_negocio_propio}
					/>
				</fieldset>
				<fieldset className='fc-lg flex grid grid-cols-12'>
					<Checkbox
						name='p_of_prof_independiente'
						classes={{
							container: 'fc-lg md:fc',
							input: 'h-input md:mt-6 flex form-input',
							checkbox:
								'mr-2 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded',
						}}
						label='Profesión Independiente'
					/>
					<Text
						name='p_of_prof_ejerce'
						classes={{
							container: 'fc-lg md:fc',
							input:
								'form-input form-input-border disabled:disabled',
						}}
						label='Profesión'
						disabled={!values.p_of_negocio_propio}
					/>
				</fieldset>
			</article>
		</section>
	)
}

export default OrigenFondos
