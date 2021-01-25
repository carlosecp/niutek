import React from "react"
import { Formik, Form } from "formik"
import NewClient from "./NewClient"
import ProfessionalData from "./ProfessionalData"
import OriginFunds from "./OriginFunds"
import References from "../../utils/references"
import SubmitBtn from "../../utils/SubmitBtn"
import {
	persona_natural,
	datos_profesionales,
	origen_fondos,
	referencias_comerciales,
	referencias_bancarias,
	referencias_personales,
} from "./initialValues"
import useDropdownOptions from "../../../../hooks/useOptions"

const initialValues = {
	...persona_natural,
	...datos_profesionales,
	...origen_fondos,
	referencias_comerciales,
	referencias_bancarias,
	referencias_personales,
}

const NaturalPersonCreate = ({ client, clientId, writeClient }) => {
	const dropdownFields = {
		tipo_doc: [],
		moneda: [],
		sexo: [],
		nacionalidad: [],
		cod_banco: [],
	}

	const dropdownRequest = {
		endpoint: "read/table",
		body: {
			p_tipo: "*",
		},
	}

	const { options, loading } = useDropdownOptions(
		dropdownFields,
		dropdownRequest
	)

	return (
		<Formik
			initialValues={client || initialValues}
			handle
			onSubmit={(values) => {
				const tempValues = {
					p_cod_empresa: 1,
					p_cod_sucursal: 0,
					p_clase_persona: 1,
					...values,
				}
				writeClient("create", tempValues)
			}}
		>
			{({ values }) => (
				<Form>
					<div className="section">
						{client ? (
							<>
								<h2 className="text-black-white text-xl font-bold">
									Editar Cliente Existente
								</h2>
								<p className="text-gray-gray">
									<b>Editando Cliente: </b>
									{clientId} - {client.p_nombres}{" "}
									{client.p_apellidos}
								</p>
							</>
						) : (
							<>
								<h2 className="text-black-white text-xl font-bold">
									Crear Nuevo Cliente
								</h2>
								<p className="text-gray-gray">
									Registrar un nuevo cliente.
								</p>
							</>
						)}
					</div>
					<div className="mt-4 section">
						<NewClient options={options} loading={loading} />
						<ProfessionalData />
						<OriginFunds />
						<References options={options} loading={loading} />
						<SubmitBtn />
					</div>
				</Form>
			)}
		</Formik>
	)
}

export default NaturalPersonCreate
