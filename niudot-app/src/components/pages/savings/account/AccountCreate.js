import React from "react"
import { Formik, Form } from "formik"
import NewAccount from "./NewAccount"
import SubmitBtn from "../../utils/SubmitBtn"
import {
	persona_natural,
	datos_profesionales,
	origen_fondos,
	referencias_comerciales,
	referencias_bancarias,
	referencias_personales,
} from "./initialValues"
import useOptions from "../../../../hooks/useOptions"

const initialValues = {
	...persona_natural,
	...datos_profesionales,
	...origen_fondos,
	referencias_comerciales,
	referencias_bancarias,
	referencias_personales,
}

const AccountCreate = ({ clientData, writeForm, savingClient, goBack }) => {
	const { options, loading } = useOptions(
		{
			p_moneda: [],
		},
		{
			endpoint: "read/table",
			body: { p_tipo: "2" },
		},
		true
	)

	return (
		<Formik
			initialValues={clientData || initialValues}
			handle
			onSubmit={(values) => {
				const tempValues = {
					p_cod_empresa: 1,
					p_cod_sucursal: 0,
					p_clase_persona: 1,
					...values,
				}
				const writeType = clientData ? "update" : "create"
				writeForm(writeType, tempValues)
			}}
		>
			<Form>
				<div className="mx-auto max-w-2xl pb-4">
					<button className="btn bg-blue-blue" onClick={goBack}>
						Regresar
					</button>
				</div>
				<div className="section">
					{clientData ? (
						<>
							<h2 className="text-black-white text-xl font-bold">
								Editar Cliente Existente
							</h2>
							<p className="text-gray-gray">
								<b>Editando Cliente:</b>{" "}
								{clientData.p_cod_cliente} -{" "}
								{clientData.p_nombres} {clientData.p_apellidos}
							</p>
						</>
					) : (
						<>
							<h2 className="text-black-white text-xl font-bold">
								Crear Nuevo Producto
							</h2>
							<p className="text-gray-gray">
								Registrar un nuevo producto cuentas de ahorro.
							</p>
						</>
					)}
				</div>
				<div className="mt-4 section">
					<NewAccount options={options} loading={loading} />
					<SubmitBtn loading={savingClient} />
				</div>
			</Form>
		</Formik>
	)
}

export default AccountCreate
