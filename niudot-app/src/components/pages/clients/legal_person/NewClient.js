import React, { useState, useEffect } from 'react'
import { useFormikContext } from 'formik'
import { Text, Dropdown } from '../../utils/forms'
import axios from 'axios'
import requestConfig from '../../../../utils/requestConfig'

const NewClient = ({ options, loading }) => {
	const { values } = useFormikContext()
	const { p_tipo_doc, p_cod_nac, p_cod_depto, p_cod_muni } = values

	const [muni, setMuni] = useState([])

	const getMuni = async (codMuni) => {
		if (codMuni !== 0) {
			const res = await axios.post(
				`${process.env.REACT_APP_URL}/read/dep`,
				{
					codigo: codMuni,
				},
				requestConfig
			)
			setMuni(res.data)
		}
	}

	useEffect(() => {
		getMuni(p_cod_depto)
	}, [p_cod_depto])

	return (
		<>
			<div className='form-grid-layout'>
				<Text name='p_nombre' size='md' label='Nombres' />
				<Dropdown
					size='md'
					name='p_tipo_doc'
					label='Tipo Documento'
					value={p_tipo_doc}
					loading={loading}
				>
					<option value='0' selected={true} disabled label='Seleccione' />
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
					<option value='0' selected={true} disabled label='Seleccione' />
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
					<option value='0' selected={true} disabled label='Seleccione' />
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
					<option value='0' selected={true} disabled label='Seleccione' />
					{muni.map((option) => (
						<option
							key={option.cod_muni}
							value={option.cod_muni}
							label={option.nom_municipio}
						/>
					))}
				</Dropdown>
				<Text
					name='p_num_empleados'
					size='md'
					label='No. Empleados'
					type='number'
				/>
				<Text name='p_sitio_web' size='md' label='Sitio Web' />
				<Text name='p_e_mail' size='md' label='Email' />
				<Text name='p_telefono1' size='md' label='Telefono 1' />
				<Text name='p_telefono2' size='md' label='Telefono 2' />
				<Text name='p_direccion' size='lg' label='Dirección' />
				<Text
					name='p_fecha_constitucion'
					size='md'
					label='Fecha de Constitucion'
				/>
				<Text name='p_fecha_personeria' size='md' label='Fecha de Personeria' />
				<Text
					name='p_ingreso_anual'
					size='md'
					label='Ingreso Anual'
					type='number'
				/>
				<Text
					name='p_actividad_empresa'
					size='lg'
					label='Actividad de la Empresa'
					newLine={true}
					isTextArea={true}
				/>
			</div>
		</>
	)
}

export default NewClient
