import type { PersonaJuridicaValues } from '../../../../data/persona_juridica'
import { useFormikContext } from 'formik'
import { Text, Checkbox } from '../../../forms'

const OrigenFondos = () => {
	const { values } = useFormikContext<PersonaJuridicaValues>()

	return (
		<section id='origen_fondos'>
			<a href='#!' id='_origen_fondos' className='anchor'></a>
			<h1 className='font-medium text-xl text-gray-900'>Origen de Fondos</h1>
			<article className='form-section my-2 grid grid-cols-12 gap-4'>
				<fieldset className='fc-lg grid grid-cols-12'>
					<Checkbox name='p_of_donacion' label='Donación' />
					<Text
						name='p_of_nombre_donante'
						classes={{
							container: 'fc-lg md:fc-md',
							input: 'w-full block form-input form-input-border'
						}}
						label='Nombre donante'
						disabled={!values.p_of_donacion}
						reset={!values.p_of_donacion}
					/>
				</fieldset>
				<fieldset className='fc-lg grid grid-cols-12'>
					<Checkbox
						name='p_of_herencia'
						classes={{
							container: 'fc-lg md:fc-sm',
							input: 'h-input md:mt-6 flex form-input',
							checkbox:
								'mr-2 focus:ring-primary h-4 w-4 text-indigo-600 border-gray-300 rounded'
						}}
						label='Herencia'
					/>
					<Text
						name='p_of_de_quien'
						classes={{
							container: 'fc-lg md:fc-md',
							input: 'w-full block form-input form-input-border '
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
								'mr-2 focus:ring-primary h-4 w-4 text-indigo-600 border-gray-300 rounded'
						}}
						label='Inversiones'
					/>
					<Text
						name='p_of_tipos_inversiones'
						classes={{
							container: 'fc-lg md:fc-md',
							input: 'w-full block form-input form-input-border '
						}}
						label='Tipos de inversiones'
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
								'mr-2 focus:ring-primary h-4 w-4 text-indigo-600 border-gray-300 rounded'
						}}
						label='Préstamo'
					/>
					<Text
						name='p_of_inst_financiera'
						classes={{
							container: 'fc-lg md:fc-md',
							input: 'w-full block form-input form-input-border'
						}}
						label='Tipos de inversiones'
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
								'mr-2 focus:ring-primary h-4 w-4 text-indigo-600 border-gray-300 rounded'
						}}
						label='Venta de'
					/>
					<Text
						name='p_of_descrip_venta_de'
						classes={{
							container: 'fc-lg md:fc-md',
							input: 'w-full block form-input form-input-border'
						}}
						label='Descripción'
						disabled={!values.p_of_venta_de}
						reset={!values.p_of_venta_de}
					/>
				</fieldset>
				<fieldset className='fc-lg grid grid-cols-12'>
					<Checkbox
						name='p_of_ing_giro_emp'
						classes={{
							container: 'fc-lg',
							input: 'h-input md:mt-6 flex form-input',
							checkbox:
								'mr-2 focus:ring-primary h-4 w-4 text-indigo-600 border-gray-300 rounded'
						}}
						label='Ingresos por giro comercial de la empresa'
					/>
				</fieldset>
				<fieldset className='fc-lg grid grid-cols-12'>
					<Checkbox
						name='p_of_aporte_socios'
						classes={{
							container: 'fc-lg',
							input: 'h-input md:mt-6 flex form-input',
							checkbox:
								'mr-2 focus:ring-primary h-4 w-4 text-indigo-600 border-gray-300 rounded'
						}}
						label='Aporte de los socios'
					/>
				</fieldset>
				<fieldset className='fc-lg grid grid-cols-12'>
					<Checkbox
						name='p_of_otros'
						classes={{
							container: 'fc-lg md:fc-sm',
							input: 'h-input md:mt-6 flex form-input',
							checkbox:
								'mr-2 focus:ring-primary h-4 w-4 text-indigo-600 border-gray-300 rounded'
						}}
						label='Otros'
					/>
					<Text
						name='p_of_des_otros'
						classes={{
							container: 'fc-lg md:fc-md',
							input: 'w-full block form-input form-input-border'
						}}
						label='Descripción'
						disabled={!values.p_of_otros}
						reset={!values.p_of_otros}
					/>
				</fieldset>
			</article>
		</section>
	)
}

export default OrigenFondos
