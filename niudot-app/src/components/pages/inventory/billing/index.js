import React, { useState, useContext, useEffect } from "react"

import * as Yup from "yup"
import { Formik, Form } from "formik"

import SearchCheckForm from "../../utils/search/SearchCheckForm"
import InvoiceTable from "./InvoiceTable"

import routesContext from "../../../../context/routes/routesContext"
import NewPopup from "./popups/NewPopup"
import Articles from "./popups/Articles"
import Confirm from "./popups/Confirm"

import { createValues, createValuesSchema } from "./initialValues"
const initialValues = {
	...createValues,
}

const validationSchema = Yup.object({
	...createValuesSchema,
})

const Billing = () => {
	const { changePage } = useContext(routesContext)
	const [showPopup, setShowPopup] = useState({
		articles: false,
		confirmation: false,
	})

	useEffect(() => {
		changePage("Facturación")
		// eslint-disable-next-line
	}, [])

	const [total, setTotal] = useState(0)

	const togglePopup = (popup) => {
		switch (popup) {
			case "articles":
				setShowPopup({ ...showPopup, articles: !showPopup.articles })
				break
			case "confirmation":
				setShowPopup({
					...showPopup,
					confirmation: !showPopup.confirmation,
				})
				break
		}
	}

	return (
		<>
			<div className="section">
				<SearchCheckForm />

				{showPopup.articles && (
					<Articles togglePopup={() => togglePopup("articles")} />
				)}
				{showPopup.confirmation && (
					<Confirm
						total={total}
						togglePopup={() => togglePopup("confirmation")}
					/>
				)}
				<div className="my-4 flex gap-2 justify-center flex-wrap">
					<button className="btn flex items-center bg-blue-blue btn-border-blue">
						Eliminar Anulación
					</button>
					<button className="btn flex items-center bg-blue-blue btn-border-blue">
						Imprimir Listado
					</button>
					<button className="btn flex items-center bg-blue-blue btn-border-blue">
						Imprimir Cheque
					</button>
					<button className="btn flex items-center bg-blue-blue btn-border-blue">
						Reporte de Cheques
					</button>
				</div>
			</div>
			<div className="section">
				<InvoiceTable setTotal={setTotal} />
				<div className="my-4 flex gap-2 justify-center flex-wrap">
					<button className="btn bg-blue-blue btn-border-blue flex items-center gap-2">
						Agregar
					</button>
					<button className="btn flex items-center bg-blue-blue btn-border-blue gap-2">
						Borrar
					</button>
					<button className="btn bg-blue-blue btn-border-blue flex items-center gap-2">
						Cancelar
					</button>
					<button
						className="btn bg-blue-blue btn-border-blue flex items-center gap-2"
						onClick={() => togglePopup("confirmation")}
					>
						Confirmar
					</button>
					<button
						className="btn bg-blue-blue btn-border-blue flex items-center gap-2"
						onClick={() => togglePopup("articles")}
					>
						Articulos
					</button>
				</div>
			</div>
		</>
	)
}

export default Billing
