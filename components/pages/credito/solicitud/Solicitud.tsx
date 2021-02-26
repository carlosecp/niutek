import type { SolicitudDeCreditoValues } from './data'
import type { TablaOptions, DeptosOption } from '../../../../interfaces'
import * as React from 'react'
import { useFormikContext } from 'formik'
import { Text, Select, TextArea } from '../../../templates/forms'

interface Props {
	options: {
		tabla: TablaOptions
		deptos_municipios: DeptosOption[]
	}
}

const PersonaNatural = (props: Props) => {
	const { values } = useFormikContext<SolicitudDeCreditoValues>()

	return (
		<section id='solicitud'>
			<a href='#!' id='_solicitud' className='anchor'></a>
			<h1 className='font-medium text-xl text-gray-900'>Solicitud</h1>
			<article className='form-section my-2 grid grid-cols-12 gap-4'>
				<Text name='p_nombres' label='Nombres' />
				<Text name='p_apellidos' label='Apellidos' />
				<Select name='p_sexo' label='Sexo'>
					<option value={0} disabled>
						Seleccione
					</option>
					{props.options.tabla.sexo.map((option) => (
						<option key={option.codigo} value={option.codigo}>
							{option.descripcion}
						</option>
					))}
				</Select>
				<Select name='p_tipo_doc' label='Tipo de documento'>
					<option value={0} disabled>
						Seleccione
					</option>
					{props.options.tabla.tipo_doc.map((option) => (
						<option key={option.codigo} value={option.codigo}>
							{option.descripcion}
						</option>
					))}
				</Select>
				<Text name='p_num_doc' label='No. de documento' />
				<Select name='p_cod_nac' label='Nacionalidad'>
					<option value={0} disabled>
						Seleccione
					</option>
					{props.options.tabla.nacionalidad.map((option) => (
						<option key={option.codigo} value={option.codigo}>
							{option.descripcion}
						</option>
					))}
				</Select>
				<Select name='p_cod_depto' label='Departamento'>
					<option value={0} disabled>
						Seleccione
					</option>
					{props.options.deptos_municipios.map((option) => (
						<option key={option.cod_depto} value={option.cod_depto}>
							{option.nom_depto}
						</option>
					))}
				</Select>

				<TextArea name='p_direccion' label='Dirección' />
				<Text name='p_notas' label='Observaciones' />
				<Text name='p_telefono1' label='Teléfono 1' />
				<Text name='p_telefono2' label='Teléfono 2' />
				<Text name='p_lugar_nacimiento' label='Lugar de nacimiento' />
				<Text
					name='p_fecha_nacimiento'
					label='Fecha de nacimiento'
					placeholder='YYYY-MM-DD'
				/>
				<Select name='p_cargo_publico' label='Cargo Público'>
					<option value={0} disabled>
						Seleccione
					</option>
					<option value={1}>Si</option>
					<option value={2}>No</option>
				</Select>
				<Text name='p_num_hijos' label='No. de hijos' type='number' />
			</article>
		</section>
	)
}

export default PersonaNatural
