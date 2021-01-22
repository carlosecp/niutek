import React, { useState, useEffect } from "react"
import axios from "axios"
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
import requestConfig from "../../../../utils/requestConfig"

const initialValues = {
	...persona_natural,
	...datos_profesionales,
	...origen_fondos,
	referencias_comerciales,
	referencias_bancarias,
	referencias_personales,
}

const NaturalPersonCreate = ({ client, clientId, writeClient }) => {
	const [options, setOptions] = useState({
		tipo_doc: [],
		sexo: [],
		nacionalidad: [],
		moneda: [],
		cod_banco: [],
	})

	const getOptions = async () => {
		const res = await axios.post(
			"https://backend-dot-nicascriptproject.uc.r.appspot.com/read/table",
			{ p_tipo: "*" },
			requestConfig
		)
		const [tipo_doc, moneda, sexo, nacionalidad, cod_banco] = res.data

		setOptions({
			tipo_doc,
			sexo,
			nacionalidad,
			moneda,
			cod_banco,
		})
	}

	useEffect(() => {
		getOptions()
	}, [])

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
						<NewClient options={options} />
						<ProfessionalData />
						<OriginFunds />
						<References options={options} />
						<SubmitBtn />
					</div>
				</Form>
			)}
		</Formik>
	)
}

export default NaturalPersonCreate
