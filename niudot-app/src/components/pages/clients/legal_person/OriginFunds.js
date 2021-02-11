import React from 'react'
import { useFormikContext } from 'formik'
import { Text, Checkbox } from '../../utils/forms'
import RetractileForm from '../../utils/retractile_sections'

const OriginFunds = () => {
	const { values } = useFormikContext()

	return (
		<RetractileForm id='Muere Juan' formTitle='Origen de Fondos'>
			<div className='form-grid-layout'>
				<Checkbox size='md' name='p_of_donacion' label='Donación' />
				<Text
					name='p_of_nombre_donante'
					size='md'
					label='Nombre del Donante'
					forLabel={true}
					disabled={!values.p_of_donacion}
				/>

				<Checkbox size='md' name='p_of_herencia' label='Herencia' />
				<Text
					name='p_of_de_quien'
					size='md'
					label='De quién'
					forLabel={true}
					disabled={!values.p_of_herencia}
				/>

				<Checkbox
					size='md'
					name='p_of_inversiones'
					label='Inversiones'
				/>
				<Text
					name='p_of_tipos_inversiones'
					size='md'
					label='Tipo de Inversiones'
					forLabel={true}
					disabled={!values.p_of_inversiones}
				/>

				<Checkbox size='md' name='p_of_prestamo' label='Préstamo' />
				<Text
					name='p_of_inst_financiera'
					size='md'
					label='Institución Financiera'
					forLabel={true}
					disabled={!values.p_of_prestamo}
				/>

				<Checkbox size='md' name='p_of_venta_de' label='Venta de' />
				<Text
					name='p_of_descrip_venta_de'
					size='md'
					label='Descripcion Venta'
					forLabel={true}
					disabled={!values.p_of_venta_de}
				/>

				<Checkbox
					size='md'
					name='p_of_ing_gir_emp'
					label='Ingresos por giro comercial de la empresa'
				/>

				<Checkbox
					size='md'
					name='p_of_aport_socios'
					label='Aporte de Socios'
					newline={true}
				/>

				<Checkbox
					size='md'
					name='p_of_otros'
					label='Otros'
					newline={true}
				/>
				<Text
					name='p_of_des_otros'
					size='md'
					label='Descripción Otros'
					forLabel={true}
					disabled={!values.p_of_otros}
				/>
			</div>
		</RetractileForm>
	)
}

export default OriginFunds
