import React from "react"

import * as Yup from "yup"
import { Formik, Form } from "formik"

import { Dropdown, Text } from "../../utils/forms"
import SubmitBtn from "../../utils/SubmitBtn"
// Data
import { createValues, createValuesSchema } from "./initialValues"

const initialValues = {
	...createValues,
}

const validationSchema = Yup.object({
	...createValuesSchema,
})

const CreditFormalizationCreate = () => {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				alert(JSON.stringify(values, null, 2))
			}}
		>
			<>
				<Form>
					<div className="section">
						<h2 className="text-black-white text-xl font-bold">
							Formalizacion {/*Agregar acento */} de Crédito{" "}
						</h2>
						<div className="form-grid-layout">
							<Text
								name="create_nombre_del_producto"
								size="lg"
								placeholder="Nombre del Producto"
								label="Nombre del Producto"
							/>
							<Text
								name="create_fecha_de_resolucion"
								size="md"
								placeholder="dd/mm/yyyy"
								label="Fecha de Resolucion"
							/>
							<Text
								name="create_monto"
								size="md"
								placeholder="0"
								label="Monto"
								type="number"
								min="0"
								newline={true}
							/>
							<Dropdown
								size="md"
								name="create_moneda"
								label="Moneda"
								placeholder="Moneda"
							>
								<option value="option_2">Córdobas</option>
								<option value="option_3">Dólares</option>
								<option value="option_3">Colones</option>
							</Dropdown>

							<Text
								name="create_frecuencia_de_pago"
								size="md"
								placeholder="Frecuencia de Pago"
								label="Frecuencia de Pago"
								type="number"
								min="0"
							/>
							<Text
								name="create_tasa_de_interes_mensual"
								size="md"
								placeholder="Tasa de Interés Mensual"
								label="Tasa de Interés Mensual"
								type="number"
								min="0"
								newline={true}
							/>
							<Text
								name="create_desembolso_neto"
								size="md"
								placeholder="Desembolso Neto"
								label="Desembolso Neto"
								type="number"
								min="0"
							/>
							<Text
								name="create_fecha_de_desembolso"
								size="md"
								placeholder="dd/mm/yyyy"
								label="Fecha de Desembolso"
							/>
							<Text
								name="create_fecha_de_primer_pago"
								size="md"
								placeholder="dd/mm/yyyy"
								label="Fecha de Primer Pago"
							/>
							<Text
								name="create_plazo_en_meses"
								size="md"
								placeholder="Plazo en Meses"
								label="Plazo en Meses"
								type="number"
								min="1"
							/>

							<Text
								name="create_porcentaje_aportación"
								size="md"
								placeholder="Porcentaje de Aportación"
								label="Porcentaje de Aportación"
								type="number"
								min="0"
							/>
							<Text
								name="create_calculo_de_interes"
								size="md"
								placeholder=""
								label="Calculo de interes"
							/>
							<Text
								name="tipo_de_desembolso"
								size="md"
								placeholder=""
								label="Tipo de Desembolso"
							/>
							<Dropdown
								size="md"
								name="create_tipos_desembolso"
								label="Desembolsos"
								placeholder="ahorro"
							>
								<option value="option_2">
									Cuenta de ahorro
								</option>
								<option value="option_3">Efectivo</option>
								<option value="option_3">Cheque</option>
							</Dropdown>
							<Text
								name="create_observaciones"
								size="lg"
								newline={true}
								placeholder="Observaciones"
								label="Observaciones"
								isTextArea={true}
							/>
							<Text
								name="create_promotor"
								size="md"
								placeholder="Promotor"
								label="Promotor"
							/>
						</div>
						<SubmitBtn />
					</div>
				</Form>
				<Form>
					<div className="section">
						<h2 className="text-black-white text-xl font-bold">
							Cargos{/*Agregar acento */}{" "}
						</h2>
						<Text
							name="create_tipo_de_credito"
							size="lg"
							label="Tipo de Credito"
						/>
						<Text name="create_cliente" size="lg" label="Cliente" />
						<Text
							name="create_nombre_del_producto"
							size="lg"
							placeholder="Nombre del Producto"
							label="Nombre del Producto"
						/>
						<SubmitBtn />
					</div>
				</Form>
				<Form>
					<div className="section">
						<h2 className="text-black-white text-xl font-bold">
							Plan de pago{/*Agregar acento */}{" "}
						</h2>
						<Text
							name="create_tipo_de_credito"
							size="lg"
							label="Tipo de Credito"
						/>
						<Text name="create_cliente" size="lg" label="Cliente" />
						<Text
							name="create_nombre_del_producto"
							size="lg"
							placeholder="Nombre del Producto"
							label="Nombre del Producto"
						/>
						<SubmitBtn />
					</div>
				</Form>
			</>
		</Formik>
	)
}

export default CreditFormalizationCreate
