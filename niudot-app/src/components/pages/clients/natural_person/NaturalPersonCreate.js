import React from "react";
import { Formik, Form } from "formik";
import NewClient from "./NewClient";
import ProfessionalData from "./ProfessionalData";
import OriginFunds from "./OriginFunds";
import References from "../../utils/references";
import SubmitBtn from "../../utils/SubmitBtn";
import {
	persona_natural,
	datos_profesionales,
	origen_fondos,
	referencias_comerciales,
	referencias_bancarias,
	referencias_personales,
} from "./initialValues";
import useOptions from "../../../../hooks/useOptions";

const initialValues = {
	...persona_natural,
	...datos_profesionales,
	...origen_fondos,
	referencias_comerciales,
	referencias_bancarias,
	referencias_personales,
};

const NaturalPersonCreate = ({ clientData }) => {
	const { loading, options } = useOptions(
		{
			p_tipo_doc: [],
			p_moneda: [],
			p_sexo: [],
			p_cod_nac: [],
		},
		{
			endpoint: "read/table",
			body: { p_tipo: "*" },
		}
	);

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
				};
			}}
		>
			<Form>
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
		</Formik>
	);
};

export default NaturalPersonCreate;
