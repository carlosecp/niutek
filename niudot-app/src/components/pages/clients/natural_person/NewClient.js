import React, { useState, useEffect } from "react"
import axios from "axios"
import { useFormikContext } from "formik"
import { Text, Dropdown } from "../../utils/forms"
import requestConfig from "../../../../utils/requestConfig"

const NewClient = ({ options, loading }) => {
	const { values } = useFormikContext()

	const { p_cod_nac, p_tipo_doc, p_cod_depto } = values

	const [depto, setDetpo] = useState([])
	const [muni, setMuni] = useState([])
	const [loadingMuni, setLoadingMuni] = useState(true)

	const getDepto = async () => {
		const res = await axios.post(
			`${process.env.REACT_APP_URL}/read/dep`,
			{
				codigo: 0,
			},
			requestConfig
		)
		setDetpo(res.data)
	}

	const getMuni = async (cod_depto) => {
		const res = await axios.post(
			`${process.env.REACT_APP_URL}/read/dep`,
			{
				codigo: cod_depto,
			},
			requestConfig
		)
		setMuni(res.data)
		setLoadingMuni(false)
	}

	useEffect(() => {
		getDepto()
	}, [])

	useEffect(() => {
		if (depto.length > 0) {
			getMuni(p_cod_depto)
		} else {
			setMuni([])
		}
	}, [p_cod_depto])

	return (
		<>
			<div className="form-grid-layout">
				<Text name="p_nombres" size="md" label="Nombres" />
				<Text name="p_apellidos" size="md" label="Apellidos" />
				<Dropdown
					size="md"
					name="p_sexo"
					label="Sexo"
					loading={loading}
				>
					<option
						value="0"
						selected={true}
						disabled
						label="Seleccione"
					/>
					{options.sexo.map((option) => (
						<option
							key={option.codigo}
							value={option.descripcion}
							label={option.descripcion}
						/>
					))}
				</Dropdown>
				<Dropdown
					size="md"
					name="p_tipo_doc"
					label="Tipo Documento"
					value={p_tipo_doc}
					loading={loading}
				>
					<option
						value="0"
						selected="true"
						disabled
						label="Seleccione"
					/>
					{options.tipo_doc.map((option) => (
						<option
							key={option.codigo}
							value={option.descripcion}
							label={option.descripcion}
						/>
					))}
				</Dropdown>
				<Text name="p_num_doc" size="md" label="No. Documento" />
				<Dropdown
					size="md"
					name="p_cod_nac"
					label="Nacionalidad"
					value={p_cod_nac}
					loading={loading}
				>
					<option
						value="0"
						selected="true"
						disabled
						label="Seleccione"
					/>
					{options.nacionalidad.map((option) => (
						<option
							key={option.codigo}
							value={option.descripcion}
							label={option.descripcion}
						/>
					))}
				</Dropdown>
				<Dropdown
					size="md"
					name="p_cod_depto"
					label="Departamento"
					loading={loading}
				>
					<option
						value="0"
						selected="true"
						disabled
						label="Seleccione"
					/>
					{depto.map((option) => (
						<option
							key={option.cod_depto}
							value={option.cod_depto}
							label={option.nom_depto}
						/>
					))}
				</Dropdown>
				<Dropdown
					size="md"
					name="p_cod_muni"
					label="Municipio"
					disabled={muni.length === 0 || loadingMuni}
				>
					<option
						value="0"
						selected="true"
						disabled
						label="Seleccione"
					/>
					{muni.map((option) => (
						<option
							key={option.cod_muni}
							value={option.cod_muni}
							label={option.nom_municipio}
						/>
					))}
				</Dropdown>
				<Text name="p_direccion" size="lg" label="Dirección" />
				<Text
					name="p_notas"
					size="lg"
					isTextArea={true}
					label="Observaciones"
				/>
				<Text name="p_telefono1" size="md" label="Telefono 1" />
				<Text name="p_telefono2" size="md" label="Telefono 2" />
				<Text
					name="p_lugar_nacimiento"
					size="md"
					label="Lugar de Nacimiento"
				/>
				<Text
					name="p_fecha_nacimiento"
					size="md"
					label="Fecha de Nacimiento"
				/>
				<Dropdown
					size="md"
					name="p_cargo_publico"
					label="Cargo Público"
					loading={loading}
				>
					<option
						value="0"
						selected="true"
						disabled
						label="Seleccione"
					/>
					<option value={0} label="Si" />
					<option value={1} label="No" />
				</Dropdown>
				<Text
					name="p_num_hijos"
					size="md"
					label="No. Hijos"
					type="number"
				/>
			</div>
		</>
	)
}

export default NewClient
