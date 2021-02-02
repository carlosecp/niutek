import React from "react"
import { useFormikContext } from "formik"
import { Text, Dropdown } from "../../utils/forms"

const NewAccount = ({ options, loading }) => {
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
					label="Monto mínimo apertura"
					type="number"
				/>
				<Text
					name="p_num_doc"
					size="md"
					label="Monto promedio mensual"
					type="number"
				/>
				<Text
					name="p_num_doc"
					size="md"
					label="Máximo retiros mensuales"
					type="number"
				/>
				<Text
					name="p_num_doc"
					size="md"
					label="Mosto máximo por retiro"
					type="number"
				/>
			</div>
		</>
	)
}

export default NewAccount
