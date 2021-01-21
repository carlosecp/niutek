import React from "react"

import { Text, Dropdown } from "../../utils/forms"
import RetractileForm from "../../utils/retractile_sections"

const OriginFunds = () => {
	return (
		<RetractileForm id="Muere Juan" formTitle="Origen Fondos">
			<div className="form-grid-layout">
				<Dropdown
					size="md"
					name="p_of_negocio_propio"
					label="Negocio Propio"
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
					name="p_of_nombre_negocio"
					size="md"
					label="Nombre del Negocio"
				/>
				<Dropdown
					size="md"
					name="p_of_prof_independiente"
					label="Profesión Independiente"
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
					name="p_of_prof_ejerce"
					size="md"
					label="Profesión que Ejerce"
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
				<Text
					name="p_of_de_quien"
					size="md"
					label="Cantidad $US"
					type="number"
				/>
				<Dropdown
					size="md"
					name="p_of_inversiones"
					label="Inversiones"
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
				<Dropdown size="md" name="p_of_venta_de" label="Venta de">
					<option
						value=""
						selected="true"
						disabled
						label="Seleccione"
					/>
					<option value={0}>Opcion 1</option>
					<option value={1}>Opcion 2</option>
				</Dropdown>
				<Text
					name="p_of_descrip_venta_de"
					size="md"
					placeholder="p_of_descrip_venta_de"
					label="p_of_descrip_venta_de"
				/>
				<Text
					name="p_of_salario"
					size="md"
					placeholder="p_of_salario"
					label="p_of_salario"
					type="number"
				/>
				<Text
					name="p_of_ahorro"
					size="md"
					placeholder="p_of_ahorro"
					label="p_of_ahorro"
					type="number"
				/>
				<Text
					name="p_of_aho_inst_financiera"
					size="md"
					placeholder="p_of_aho_inst_financiera"
					label="p_of_aho_inst_financiera"
				/>
				<Dropdown size="md" name="p_of_otros" label="p_of_otros">
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
					placeholder="p_of_des_otros"
					label="p_of_des_otros"
				/>
			</div>
		</RetractileForm>
	)
}

export default OriginFunds
