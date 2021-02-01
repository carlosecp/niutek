import React from "react"
import { Text, Dropdown } from "../../utils/forms"
import RetractileForm from "../../utils/retractile_sections"

const OriginFunds = () => {
	return (
		<RetractileForm id="Muere Juan" formTitle="Origen Fondos">
			<div className="form-grid-layout">
				<Dropdown size="md" name="p_of_donacion" label="Donacion">
					<option
						value=""
						selected="true"
						disabled
						label="Seleccione"
					/>
					<option value={0}>Si</option>
					<option value={1}>No</option>
				</Dropdown>
				<Text
					name="p_of_nombre_donante"
					size="md"
					label="Nombre del Donante"
				/>
				<Dropdown size="md" name="p_of_herencia" label="Herencia">
					<option
						value=""
						selected="true"
						disabled
						label="Seleccione"
					/>
					<option value={0}>Si</option>
					<option value={1}>No</option>
				</Dropdown>
				<Text name="p_of_de_quien" size="md" label="De quién" />
				<Dropdown size="md" name="p_of_inversiones" label="Inversiones">
					<option
						value=""
						selected="true"
						disabled
						label="Seleccione"
					/>
					<option value={0}>Si</option>
					<option value={1}>No</option>
				</Dropdown>
				<Text
					name="p_of_tipos_inversiones"
					size="md"
					label="Tipo de Inversiones"
				/>
				<Dropdown size="md" name="p_of_prestamo" label="Préstamo">
					<option
						value=""
						selected="true"
						disabled
						label="Seleccione"
					/>
					<option value={0}>Si</option>
					<option value={1}>No</option>
				</Dropdown>
				<Text
					name="p_of_inst_financiera"
					size="md"
					label="Institución Financiera"
				/>
				<Dropdown size="md" name="p_of_venta_de" label="Venta">
					<option
						value=""
						selected="true"
						disabled
						label="Seleccione"
					/>
					<option value={0}>Si</option>
					<option value={1}>No</option>
				</Dropdown>
				<Text
					name="p_of_descrip_venta_de"
					size="md"
					label="Descripcion Venta"
				/>
				<Dropdown
					size="md"
					newline={true}
					name="p_of_ing_gir_emp"
					label="Ingresos por giro comercial de la empresa"
				>
					<option
						value=""
						selected="true"
						disabled
						label="Seleccione"
					/>
					<option value={0}>Si</option>
					<option value={1}>No</option>
				</Dropdown>
				<Dropdown
					size="md"
					newline={true}
					name="p_of_aport_socios"
					label="Aporte de Socios"
				>
					<option
						value=""
						selected="true"
						disabled
						label="Seleccione"
					/>
					<option value={0}>Si</option>
					<option value={1}>No</option>
				</Dropdown>
				<Dropdown
					size="md"
					name="p_of_otros"
					label="Otros"
					newline={true}
				>
					<option
						value=""
						selected="true"
						disabled
						label="Seleccione"
					/>
					<option value={0}>Si</option>
					<option value={1}>No</option>
				</Dropdown>
				<Text
					name="p_of_des_otros"
					size="md"
					label="Descripcion Otros"
				/>
			</div>
		</RetractileForm>
	)
}

export default OriginFunds
