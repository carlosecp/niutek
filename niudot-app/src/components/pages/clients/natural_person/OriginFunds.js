import React, { useEffect } from 'react'
import { useFormikContext } from 'formik'
import { Text, Checkbox } from '../../utils/forms'
import RetractileForm from '../../utils/retractile_sections'

const OriginFunds = () => {
	const { values } = useFormikContext()

	useEffect(() => {
		console.log(values.p_of_nombre_negocio)
	}, [values])

	return (
		<RetractileForm formTitle='Origen de Fondos'>
			<div className='form-grid-layout'>
				<Checkbox size='md' name='p_of_negocio_propio' label='Negocio Propio' />
				<Text
					name='p_of_nombre_negocio'
					size='md'
					label='Nombre del Negocio'
					forLabel={true}
					disabled={!values.p_of_negocio_propio}
				/>

				<Checkbox
					size='md'
					name='p_of_prof_independiente'
					label='Profesión Independiente'
				/>
				<Text
					name='p_of_prof_ejerce'
					size='md'
					label='Profesión que Ejerce'
					forLabel={true}
					disabled={!values.p_of_prof_independiente}
				/>

				<Checkbox size='md' name='p_of_herencia' label='Herencia' />
				<Text
					name='p_of_de_quien'
					size='md'
					label='De quién'
					forLabel={true}
					disabled={!values.p_of_herencia}
				/>
				<Text
					name='p_of_de_quien'
					size='md'
					label='Cantidad $US'
					type='number'
					forLabel={true}
					disabled={!values.p_of_herencia}
				/>

				<Checkbox
					size='md'
					name='p_of_inversiones'
					label='Inversiones'
					newline={true}
				/>
				<Text
					name='p_of_tipos_inversiones'
					size='md'
					label='Tipo de Inversiones'
					forLabel={true}
					disabled={!values.p_of_inversiones}
				/>

				<Checkbox
					size='md'
					name='p_of_prestamo'
					label='Préstamo'
					newline={true}
				/>
				<Text
					name='p_of_inst_financiera'
					size='md'
					label='Institución Financiera'
					forLabel={true}
					disabled={!values.p_of_prestamo}
				/>

				<Checkbox
					size='md'
					name='p_of_venta_de'
					label='Venta de'
					newline={true}
				/>
				<Text
					name='p_of_descrip_venta_de'
					size='md'
					label='Descripción de Venta'
					forLabel={true}
					disabled={!values.p_of_venta_de}
				/>

				<Checkbox
					size='md'
					name='p_of_salario'
					label='Salario'
					newline={true}
				/>

				<Checkbox size='md' name='p_of_ahorro' label='Ahorro' newline={true} />
				<Text
					name='p_of_aho_inst_financiera'
					size='md'
					label='Institución Financiera'
					forLabel={true}
					disabled={!values.p_of_ahorro}
				/>

				<Checkbox size='md' name='p_of_otros' label='Otros' newline={true} />
				<Text
					name='p_of_des_otros'
					size='md'
					label='Descripción'
					forLabel={true}
					disabled={!values.p_of_otros}
				/>
			</div>
		</RetractileForm>
	)
}

export default OriginFunds
