import React from "react"

import RetractileForm from "../../utils/retractile_sections"
import { Text } from "../../utils/forms"

const EconomicData = () => {
	return (
		<RetractileForm formTitle="Datos Económicos">
			<div className="form-grid-layout">
				<Text
					name="create_ingresos_anuales_aproximados"
					size="lg"
					placeholder="Ingresos Anuales Aproximados"
					label="Ingresos Anuales Aproximados"
					type="number"
					min="0"
				/>

				<Text
					name="create_detalles_actividades"
					size="lg"
					placeholder="Detalles de las actividades a las que se dedica"
					label="Detalles de las actividades a las que se dedica"
					newline={true}
				/>
			</div>
		</RetractileForm>
	)
}

export default EconomicData
