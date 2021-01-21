import React from "react"

import { Formik, Form } from "formik"
import { Dropdown, Text } from "../../../utils/forms"
import Table from "../../../utils/tables"
import Popup from "../../../utils/tables/Popup"
import DateInput from "../../../utils/forms/DateInput"

const EditPurchasePopup = ({ togglePopup }) => {
	const headers = []

	const rows = [{}]

	return (
		<Popup togglePopup={togglePopup}>
			<Formik>
				<form className="section">
					<h2 className="text-black-white text-xl font-bold">
						Editar artículo
					</h2>
					<div className="form-grid-layout mb-8">
						<Text
							name="costo"
							size="md"
							placeholder="Costo"
							label="Costo"
							type="number"
						/>
						<Text
							name="utilidad"
							size="md"
							placeholder="Utilidad"
							label="Utilidad"
							newline={true}
							type="number"
						/>
						<Text
							name="utilidad_y_Costo"
							size="md"
							placeholder="Costo + Utilidad"
							label="Costo + Utilidad"
							newline={true}
							type="number"
						/>
						<Text
							name="impuesto"
							size="md"
							placeholder="Impuesto"
							label="Impuesto"
							newline={true}
							type="number"
						/>
						<Text
							name="precio"
							size="md"
							placeholder="Precio"
							label="Precio"
							newline={true}
							type="number"
						/>
					</div>
					<div className="my-4 flex gap-2 justify-center flex-wrap">
						<button
							className="btn flex items-center bg-blue-blue btn-border-blue"
							onClick={() => togglePopup("deliver")}
						>
							Guardar
						</button>
						<button
							className="btn flex items-center bg-gray-cstm-10 btn-border-blue"
							onClick={() => togglePopup("deliver")}
						>
							Salir
						</button>
					</div>
				</form>
			</Formik>
		</Popup>
	)
}

export default EditPurchasePopup
