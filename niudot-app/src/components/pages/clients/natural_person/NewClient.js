import React from 'react'
import { Text, Dropdown } from '../../utils/forms'

const NewClient = () => {
	return (
		<>
			<div className='form-grid-layout'>
				<Text
					name='p_cod_empresa'
					size='md'
					placeholder='p_cod_empresa'
					label='p_cod_empresa'
				/>
				<Text
					name='p_cod_sucursal'
					size='md'
					placeholder='p_cod_sucursal'
					label='p_cod_sucursal'
					newline={true}
				/>
				<Text
					name='p_nombres'
					size='md'
					placeholder='p_nombres'
					label='p_nombres'
				/>
				<Dropdown size='md' name='p_sexo' label='p_sexo' placeholder='p_sexo'>
					<option value='' selected={true} disabled label='Seleccione' />
					<option value={0} label='Masculino' />
					<option value={1} label='Femenino' />
				</Dropdown>
				<Dropdown
					size='md'
					name='p_tipo_doc'
					label='p_tipo_doc'
					placeholder='p_tipo_doc'
				>
					<option value='' selected='true' disabled label='Seleccione' />
					<option value={0} label='Masculino' />
					<option value={1} label='Femenino' />
				</Dropdown>
				<Text
					name='p_num_doc'
					size='lg'
					placeholder='p_num_doc'
					label='p_num_doc'
				/>
				<Text
					name='p_cod_nac'
					size='lg'
					placeholder='p_cod_nac'
					label='p_cod_nac'
				/>
				<Dropdown
					size='md'
					name='p_cod_depto'
					label='p_cod_depto'
					placeholder='p_cod_depto'
				>
					<option value='' selected='true' disabled label='Seleccione' />
					<option value={0} label='Managua' />
					<option value={1} label='Leon' />
					<option value={2} label='Granada' />
					<option value={3} label='Chinandega' />
					<option value={4} label='Esteli' />
					<option value={5} label='Rivas' />
				</Dropdown>
				<Dropdown
					size='md'
					name='p_cod_muni'
					label='p_cod_muni'
					placeholder='p_cod_muni'
				>
					<option value='' selected='true' disabled label='Seleccione' />
					<option value={0} label='Managua 1' />
					<option value={1} label='Managua 2' />
					<option value={2} label='Managua 3' />
				</Dropdown>
				<Text
					name='p_direccion'
					size='md'
					placeholder='p_direccion'
					label='p_direccion'
				/>
				<Text name='p_notas' size='md' placeholder='p_notas' label='p_notas' />
				<Text
					name='p_telefono1'
					size='md'
					placeholder='p_telefono1'
					label='p_telefono1'
				/>
				<Text
					name='p_telefono2'
					size='md'
					placeholder='p_telefono2'
					label='p_telefono2'
				/>
				<Text
					name='p_lugar_nacimiento'
					size='md'
					placeholder='p_lugar_nacimiento'
					label='p_lugar_nacimiento'
				/>
				<Text
					name='p_fecha_nacimiento'
					size='md'
					placeholder='p_fecha_nacimiento'
					label='p_fecha_nacimiento'
				/>
				<Dropdown
					size='md'
					name='p_cargo_publico'
					label='p_cargo_publico'
					placeholder='p_cargo_publico'
				>
					<option value='' selected='true' disabled label='Seleccione' />
					<option value={0} label='Si' />
					<option value={1} label='No' />
				</Dropdown>
				<Text
					name='p_num_hijos'
					size='md'
					placeholder='p_num_hijos'
					label='p_num_hijos'
					type='number'
				/>
			</div>
		</>
	)
}

export default NewClient
