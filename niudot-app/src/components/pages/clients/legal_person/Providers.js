import React, { Fragment } from "react"
import { useFormikContext, FieldArray } from "formik"
import { FaPlus, FaTimes } from "react-icons/fa"
import { Text } from "../../utils/forms"
import RetractileForm from "../../utils/retractile_sections"

const Providers = ({ options }) => {
	const initialValues = {
		ppv_nombre_proveedor: "BDF",
		ppv_nombre_contacto: "Cuenta de Ahorro",
		pvv_telefono: "45789612",
	}

	const { values } = useFormikContext()

	const { proveedores } = values

	return (
		<FieldArray
			name="proveedores"
			render={(arrayHelpers) => (
				<RetractileForm formTitle="Proveedores">
					{proveedores.map((_, index) => (
						<Fragment key={index}>
							<div className="flex justify-between items-center text-gray-gray">
								<h3 className="font-bold text-lg mt-3">
									Proveedor {index + 1}
								</h3>
								<div className="mr-4"></div>
								<FaTimes
									className="cursor-pointer transform transition hover:rotate-90"
									onClick={() => arrayHelpers.remove(index)}
								/>
							</div>
							<div className="form-grid-layout">
								<Text
									name={`proveedores.${index}.ppv_nombre_proveedor`}
									size="md"
									label="Nombre Proveedor"
								/>
								<Text
									name={`proveedores.${index}.ppv_nombre_contacto`}
									size="md"
									label="Nombre Contacto"
								/>
								<Text
									name={`proveedores.${index}.ppv_telefono`}
									size="md"
									label="Teléfono"
								/>
							</div>
						</Fragment>
					))}
					{proveedores.length < 2 && (
						<button
							type="button"
							onClick={() =>
								arrayHelpers.push({ ...initialValues })
							}
							className="mt-3 btn bg-blue-blue btn-border-blue flex gap-2 items-center"
						>
							Agregar <FaPlus />
						</button>
					)}
				</RetractileForm>
			)}
		/>
	)
}

export default Providers
