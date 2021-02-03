import React from "react"
import { useFormikContext } from "formik"
import { Text, Dropdown } from "../../utils/forms"

const NewDeposit = ({ options, loading }) => {
	const { values } = useFormikContext()
	const { p_moneda } = values

	return (
		<>
			<div className="form-grid-layout">
				<Text name="p_nombres" size="lg" label="Nombre del producto" />
				<Text
					name="p_apellidos"
					size="lg"
					isTextArea={true}
					label="Descripción"
				/>
				<Dropdown
					size="md"
					name="p_tipo_doc"
					label="Moneda"
					value={p_moneda}
					loading={loading}
				>
					<option
						value="0"
						selected="true"
						disabled
						label="Seleccione"
					/>
					{loading ||
						options.p_moneda.map((option) => (
							<option
								key={option.codigo}
								value={option.codigo}
								label={option.descripcion}
							/>
						))}
				</Dropdown>
				<Text
					name="p_num_doc"
					size="md"
					label="Tasa de interés mensual"
					type="number"
				/>
				<Text
					name="p_num_doc"
					size="md"
					label="Monto mínimo"
					type="number"
				/>
				<Text
					name="p_num_doc"
					size="md"
					label="Monto promedio"
					type="number"
				/>
				<Text
					name="p_num_doc"
					size="md"
					label="Plazo hasta:"
					placeholder="Meses"
					type="number"
				/>
				<Text
					name="p_num_doc"
					size="md"
					label="Capitaliza cada:"
					placeholder="Meses"
					type="number"
				/>
			</div>
		</>
	)
}

export default NewDeposit
