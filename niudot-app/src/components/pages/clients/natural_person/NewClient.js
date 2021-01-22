import React from "react"
import { useFormikContext } from "formik"
import { Text, Dropdown } from "../../utils/forms"

const NewClient = ({ options }) => {
	const {
		values,
		handleChange,
		setFieldValue,
		handleSubmit,
		isSubmitting,
		isValid,
	} = useFormikContext()

	const handleIdTypeChange = (e) => {
		const selectedId = e.target.value
		console.log("Tipo de Id Seleccionado", selectedId)
		handleChange(e)
	}

	const { p_tipo_doc } = values

	return (
		<>
			<div className="form-grid-layout">
				<Text name="p_nombres" size="md" label="Nombres" />
				<Text name="p_apellidos" size="md" label="Apellidos" />
				<Dropdown size="md" name="p_sexo" label="Sexo">
					<option
						value=""
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
					onChange={handleIdTypeChange}
				>
					<option
						value=""
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
					value={p_tipo_doc}
					onChange={handleIdTypeChange}
				>
					<option
						value=""
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
				<Dropdown size="md" name="p_cod_depto" label="Departamento">
					<option
						value=""
						selected="true"
						disabled
						label="Seleccione"
					/>
					<option value={0} label="Managua" />
					<option value={1} label="Leon" />
					<option value={2} label="Granada" />
					<option value={3} label="Chinandega" />
					<option value={4} label="Esteli" />
					<option value={5} label="Rivas" />
				</Dropdown>
				<Dropdown size="md" name="p_cod_muni" label="Municipio">
					<option
						value=""
						selected="true"
						disabled
						label="Seleccione"
					/>
					<option value={0} label="Municipio 1" />
					<option value={1} label="Municipio 2" />
					<option value={2} label="Municipio 3" />
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
				>
					<option
						value=""
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
