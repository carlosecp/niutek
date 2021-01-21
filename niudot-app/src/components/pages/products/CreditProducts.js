import React from "react"

import { Text, Dropdown } from "../utils/forms"
import RetractileForm from "../utils/retractile_sections"

const CreditProducts = () => {
	return (
		<RetractileForm id="CreditProducts" formTitle="Productos de Crédito">
			<div className="form-grid-layout">
				<Text
					name="tipo_de_credito"
					size="md"
					placeholder="Tipo de Crédito"
					label="Tipo de Crédito"
				/>
				<Text
					name="fuente_de_fondos"
					size="md"
					placeholder="Fuente de Fondos"
					label="Fuente de Fondos"
					newline={true}
				/>
				<Text
					name="nombre_del_producto_creditproducts"
					size="lg"
					placeholder="Nombre del Producto"
					label="Nombre del Producto"
				/>
				<Text
					name="descripcion_de_producto_creditproducts"
					size="lg"
					newline={true}
					placeholder="Descripción del Producto"
					label="Descripción"
					isTextArea={true}
				/>
				<Text
					name="documentos_requeridos_creditproducts"
					size="md"
					placeholder="Documentos Requeridos"
					label="Documentos Requeridos"
				/>
				<Dropdown
					size="sm"
					name="moneda_creditproducts"
					label="Moneda"
					newline={true}
				>
					<option value="">Moneda</option>
					<option value="option_2">Córdoba</option>
					<option value="option_3">Dolar</option>
					<option value="option_4">Colón</option>
				</Dropdown>

				<Text
					name="tasa_de_interes_creditproducts"
					size="sm"
					placeholder="Tasa de Interés"
					label="Tasa de Interés"
				/>
				<Dropdown size="sm" name="plazo_creditproducts" label="Plazo">
					<option value="">Mensual</option>
					<option value="option_2">Anual</option>
				</Dropdown>

				<Text
					name="monto_minimo_apertura_creditproducts"
					size="md"
					placeholder="Monto Mínimo Apertura"
					label="Monto Mínimo Apertura"
				/>

				<Text
					name="frecuencia_de_pago_creditproducts"
					size="md"
					placeholder="Frecuencia de Pago"
					label="Frecuencia de Pago"
				/>
				<Text
					name="monto_maximo_retiros_creditproducts"
					size="md"
					placeholder="Monto Maximo Retiros"
					label="Monto Maximo Retiros"
				/>
			</div>
		</RetractileForm>
	)
}

export default CreditProducts
