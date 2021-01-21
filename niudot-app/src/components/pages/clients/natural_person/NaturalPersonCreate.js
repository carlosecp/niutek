import React, { useEffect } from "react"
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

const initialValues = {
	...persona_natural,
	...datos_profesionales,
	...origen_fondos,
	referencias_comerciales,
	referencias_bancarias,
	referencias_personales,
}

const NaturalPersonCreate = ({ client, clientId }) => {
	useEffect(() => {
		console.log(client)
	}, [])

	return (
		<Formik
			initialValues={client || initialValues}
			onSubmit={(values) => {
				const tempValues = {
					...values,
					prc_reg: values.referencias_bancarias.length,
					prb_reg: values.referencias_bancarias.length,
					pct_reg: values.referencias_bancarias.length,
					prp_reg: values.referencias_personales.length,
				}
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
						<NewClient />
						<ProfessionalData />
						<OriginFunds />
						<References values={values} />
						<SubmitBtn />
					</div>
				</Form>
			)}
		</Formik>
	)
}

export default NaturalPersonCreate
