import React, { useState, useEffect } from 'react'
import { useFormikContext } from 'formik'
import { Text, Dropdown } from '../../utils/forms'
import axios from 'axios'
import requestConfig from '../../../../utils/requestConfig'

const NewClient = ({ options, loading }) => {
	const { values } = useFormikContext()
	const { p_sexo, p_tipo_doc, p_cod_nac, p_cod_depto, p_cod_muni } = values

	const [muni, setMuni] = useState([])

	const getMuni = async (codMuni) => {
		const res = await axios.post(
			`${process.env.REACT_APP_URL}/read/dep`,
			{
				codigo: codMuni,
			},
			requestConfig
		)
		setMuni(res.data)
	}

	useEffect(() => {
		getMuni(p_cod_depto)
	}, [p_cod_depto])

	return (
		<>
			<div className='form-grid-layout'>
				<Text name='p_nombres' size='md' label='Nombres' />
				<Text name='p_apellidos' size='md' label='Apellidos' />
				<Dropdown size='md' name='p_sexo' label='Sexo' value={p_sexo}>
					<option
						value='0'
						selected={true}
						disabled
						label='Seleccione'
						loading={loading}
					/>
					{loading ||
						options.p_sexo.map((option) => (
							<option
								key={option.codigo}
								value={option.codigo}
								label={option.descripcion}
							/>
						))}
				</Dropdown>
				<Dropdown
					size='md'
					name='p_tipo_doc'
					label='Tipo Documento'
					value={p_tipo_doc}
					loading={loading}
				>
					<option
						value='0'
						selected={true}
						disabled
						label='Seleccione'
					/>
					{loading ||
						options.p_tipo_doc.map((option) => (
							<option
								key={option.codigo}
								value={option.codigo}
								label={option.descripcion}
							/>
						))}
				</Dropdown>
				<Text name='p_num_doc' size='md' label='No. Documento' />
				<Dropdown
					size='md'
					name='p_cod_nac'
					label='Nacionalidad'
					value={p_cod_nac}
					loading={loading}
				>
					<option
						value='0'
						selected='true'
						disabled
						label='Seleccione'
					/>
					{loading ||
						options.p_cod_nac.map((option) => (
							<option
								key={option.codigo}
								value={option.codigo}
								label={option.descripcion}
							/>
						))}
				</Dropdown>
				<Dropdown
					size='md'
					name='p_cod_depto'
					label='Departamento'
					value={p_cod_depto}
					loading={loading}
				>
					<option
						value='0'
						selected={true}
						disabled
						label='Seleccione'
					/>
					{loading ||
						options.dep.map((option) => (
							<option
								key={option.cod_depto}
								value={option.cod_depto}
								label={option.nom_depto}
							/>
						))}
				</Dropdown>
				<Dropdown
					size='md'
					name='p_cod_muni'
					label='Municipio'
					value={p_cod_muni}
					loading={loading}
				>
					<option
						value='0'
						selected='true'
						disabled
						label='Seleccione'
					/>
					{muni.map((option) => (
						<option
							key={option.cod_muni}
							value={option.cod_muni}
							label={option.nom_municipio}
						/>
					))}
				</Dropdown>
				<Text name='p_direccion' size='lg' label='Dirección' />
				<Text
					name='p_notas'
					size='lg'
					isTextArea={true}
					label='Observaciones'
				/>
				<Text name='p_telefono1' size='md' label='Telefono 1' />
				<Text name='p_telefono2' size='md' label='Telefono 2' />
				<Text
					name='p_lugar_nacimiento'
					size='md'
					label='Lugar de Nacimiento'
				/>
				<Text
					name='p_fecha_nacimiento'
					size='md'
					label='Fecha de Nacimiento'
				/>
				<Dropdown
					size='md'
					name='p_cargo_publico'
					label='Cargo Público'
				>
					<option
						value='0'
						selected='true'
						disabled
						label='Seleccione'
					/>
					<option value={0} label='Si' />
					<option value={1} label='No' />
				</Dropdown>
				<Text
					name='p_num_hijos'
					size='md'
					label='No. Hijos'
					type='number'
				/>
			</div>
		</>
	)
}

export default NewClient
