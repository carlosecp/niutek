// React and Router Stuff
import React from 'react'
// Other Components
import { Text, Dropdown } from '../../utils/forms'
import RetractileForm from '../../utils/retractile_sections'

const OriginFunds = () => {
	return (
		<RetractileForm id='Muere Juan' formTitle='Origen Fondos'>
			<div className='form-grid-layout'>
				<Text
					name='p_of_negocio_propio'
					size='lg'
					placeholder='p_of_negocio_propio'
					label='p_of_negocio_propio'
				/>
				<Dropdown
					size='md'
					name='p_of_prof_independiente'
					label='p_of_prof_independiente'
				>
					<option value=''>Seleccione</option>
					<option value={0}>Si</option>
					<option value={1}>No</option>
				</Dropdown>
				<Text
					name='p_of_prof_ejerce'
					size='lg'
					placeholder='p_of_prof_ejerce'
					label='p_of_prof_ejerce'
				/>
				<Dropdown size='md' name='p_of_herencia' label='p_of_herencia'>
					<option value=''>Seleccione</option>
					<option value={0}>Si</option>
					<option value={1}>No</option>
				</Dropdown>
				<Text
					name='p_of_de_quien'
					size='lg'
					placeholder='p_of_de_quien'
					label='p_of_de_quien'
				/>
				<Dropdown size='md' name='p_of_inversiones' label='p_of_inversiones'>
					<option value=''>Seleccione</option>
					<option value={0}>Si</option>
					<option value={1}>No</option>
				</Dropdown>
				<Text
					name='p_of_tipos_inversiones'
					size='md'
					placeholder='p_of_tipos_inversiones'
					label='p_of_tipos_inversiones'
				/>
				<Dropdown size='md' name='p_of_prestamo' label='p_of_prestamo'>
					<option value=''>Seleccione</option>
					<option value={0}>Si</option>
					<option value={1}>No</option>
				</Dropdown>
				<Text
					name='p_of_inst_financiera'
					size='md'
					placeholder='p_of_inst_financiera'
					label='p_of_inst_financiera'
				/>
				<Dropdown size='md' name='p_of_venta_de' label='p_of_venta_de'>
					<option value=''>Seleccione</option>
					<option value={0}>Opcion 1</option>
					<option value={1}>Opcion 2</option>
				</Dropdown>
				<Text
					name='p_of_descrip_venta_de'
					size='md'
					placeholder='p_of_descrip_venta_de'
					label='p_of_descrip_venta_de'
				/>
				<Text
					name='p_of_salario'
					size='md'
					placeholder='p_of_salario'
					label='p_of_salario'
					type='number'
				/>
				<Text
					name='p_of_ahorro'
					size='md'
					placeholder='p_of_ahorro'
					label='p_of_ahorro'
					type='number'
				/>
				<Text
					name='p_of_aho_inst_financiera'
					size='md'
					placeholder='p_of_aho_inst_financiera'
					label='p_of_aho_inst_financiera'
				/>
				<Dropdown size='md' name='p_of_otros' label='p_of_otros'>
					<option value=''>Seleccione</option>
					<option value={0}>Si</option>
					<option value={1}>No</option>
				</Dropdown>
				<Text
					name='p_of_des_otros'
					size='md'
					placeholder='p_of_des_otros'
					label='p_of_des_otros'
				/>
			</div>
		</RetractileForm>
	)
}

export default OriginFunds
