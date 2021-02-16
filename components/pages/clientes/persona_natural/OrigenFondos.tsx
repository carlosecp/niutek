import type { valuesPersonaNatural } from '../../../../data/clientes/persona_natural/data'
import { useFormikContext } from 'formik'
import { Text, Checkbox } from '../../../templates/forms/Fields'

const OrigenFondos = () => {
	const { values } = useFormikContext<valuesPersonaNatural>()

	return (
		<section id='origen_fondos'>
			<h1 className='font-medium text-xl text-gray-900'>
				Origen de Fondos
			</h1>
			<article className='form-section my-2 grid grid-cols-12 gap-4'>
				<fieldset className='fc-lg grid grid-cols-12'>
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
						reset={!values.p_of_negocio_propio}
					/>
				</fieldset>
				<fieldset className='fc-lg grid grid-cols-12'>
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
						disabled={!values.p_of_prof_independiente}
						reset={!values.p_of_prof_independiente}
					/>
				</fieldset>
				<fieldset className='fc-lg grid grid-cols-12'>
					<Checkbox
						name='p_of_herencia'
						classes={{
							container: 'fc-lg md:fc-sm',
							input: 'h-input md:mt-6 flex form-input',
							checkbox:
								'mr-2 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded',
						}}
						label='Herencia'
					/>
					<Text
						name='p_of_de_quien'
						classes={{
							container: 'fc-lg md:fc-md',
							input:
								'form-input form-input-border disabled:disabled',
						}}
						label='Origen'
						disabled={!values.p_of_herencia}
						reset={!values.p_of_herencia}
					/>
				</fieldset>
				<fieldset className='fc-lg grid grid-cols-12'>
					<Checkbox
						name='p_of_inversiones'
						classes={{
							container: 'fc-lg md:fc-sm',
							input: 'h-input md:mt-6 flex form-input',
							checkbox:
								'mr-2 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded',
						}}
						label='Inversiones'
					/>
					<Text
						name='p_of_tipos_inversiones'
						classes={{
							container: 'fc-lg md:fc-md',
							input:
								'form-input form-input-border disabled:disabled',
						}}
						label='Tipos de Inversiones'
						disabled={!values.p_of_inversiones}
						reset={!values.p_of_inversiones}
					/>
				</fieldset>
				<fieldset className='fc-lg grid grid-cols-12'>
					<Checkbox
						name='p_of_prestamo'
						classes={{
							container: 'fc-lg md:fc-sm',
							input: 'h-input md:mt-6 flex form-input',
							checkbox:
								'mr-2 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded',
						}}
						label='Préstamo'
					/>
					<Text
						name='p_of_inst_financiera'
						classes={{
							container: 'fc-lg md:fc-md',
							input:
								'form-input form-input-border disabled:disabled',
						}}
						label='Tipos de Inversiones'
						disabled={!values.p_of_prestamo}
						reset={!values.p_of_prestamo}
					/>
				</fieldset>
				<fieldset className='fc-lg grid grid-cols-12'>
					<Checkbox
						name='p_of_venta_de'
						classes={{
							container: 'fc-lg md:fc-sm',
							input: 'h-input md:mt-6 flex form-input',
							checkbox:
								'mr-2 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded',
						}}
						label='Venta de'
					/>
					<Text
						name='p_of_descrip_venta_de'
						classes={{
							container: 'fc-lg md:fc-md',
							input:
								'form-input form-input-border disabled:disabled',
						}}
						label='Descripción'
						disabled={!values.p_of_venta_de}
						restart={!values.p_of_venta_de}
						reset={!values.p_of_venta_de}
					/>
				</fieldset>
				<fieldset className='fc-lg grid grid-cols-12'>
					<Checkbox
						name='p_ofsalario'
						classes={{
							container: 'fc-lg',
							input: 'h-input md:mt-6 flex form-input',
							checkbox:
								'mr-2 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded',
						}}
						label='Salario'
					/>
				</fieldset>
				<fieldset className='fc-lg grid grid-cols-12'>
					<Checkbox
						name='p_of_ahorro'
						classes={{
							container: 'fc-lg md:fc-sm',
							input: 'h-input md:mt-6 flex form-input',
							checkbox:
								'mr-2 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded',
						}}
						label='Ahorro'
					/>
					<Text
						name='p_of_aho_inst_financiera'
						classes={{
							container: 'fc-lg md:fc-md',
							input:
								'form-input form-input-border disabled:disabled',
						}}
						label='Institución Financiera'
						disabled={!values.p_of_ahorro}
						restart={!values.p_of_ahorro}
						reset={!values.p_of_ahorro}
					/>
				</fieldset>
				<fieldset className='fc-lg grid grid-cols-12'>
					<Checkbox
						name='p_of_otros'
						classes={{
							container: 'fc-lg md:fc-sm',
							input: 'h-input md:mt-6 flex form-input',
							checkbox:
								'mr-2 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded',
						}}
						label='Otros'
					/>
					<Text
						name='p_of_des_otros'
						classes={{
							container: 'fc-lg md:fc-md',
							input:
								'form-input form-input-border disabled:disabled',
						}}
						label='Descripción'
						disabled={!values.p_of_otros}
						restart={!values.p_of_otros}
						reset={!values.p_of_otros}
					/>
				</fieldset>
			</article>
		</section>
	)
}

export default OrigenFondos
