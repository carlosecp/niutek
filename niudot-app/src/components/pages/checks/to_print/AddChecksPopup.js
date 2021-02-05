import React, { useMemo, useRef, useState, useCallback } from "react"

import { Formik, Form } from "formik"
import { Dropdown, Text } from "../../utils/forms"
import { FaCheck } from "react-icons/fa"

import Table from "../../utils/tables"
import Popup from "../../utils/tables/Popup"

const AddChecksPopup = ({ togglePopup }) => {
	const columns = useMemo(() => [], [])

	const serverData = []

	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)
	const [pageCount, setPageCount] = useState(0)
	const fetchIdRef = useRef(0)

	const fetchData = useCallback(({ pageSize, pageIndex }) => {
		// Esta funcion se va correr cada vez que cambiemos de pagina, para que asi no tengamos que traer la informacion de todas las paginas de un solo.

		const fetchId = ++fetchIdRef.current
		setLoading(true)

		setTimeout(() => {
			if (fetchId === fetchIdRef.current) {
				const startRow = pageSize * pageIndex
				const endRow = startRow + pageSize
				// Decimos que la cantidad de datos que queremos mostrar pues es solamente la cantidad de final que queremos tener (desde start hasta end)
				setData(serverData.slice(startRow, endRow))

				setPageCount(Math.ceil(serverData.length / pageSize))
				setLoading(false)
			}
		}, 1000)
		// eslint-disable-next-line
	}, [])

	return (
		<Popup togglePopup={togglePopup}>
			<Formik
				//initialValues={initialValues}
				//validationSchema={validationSchema}
				onSubmit={(values) => {
					alert(JSON.stringify(values, null, 2))
				}}
			>
				<Form>
					<div className="section">
						<h2 className="text-black-white text-xl font-bold">
							Datos del Cheque
						</h2>
						<div className="form-grid-layout">
							<Text
								name="numero_cheque"
								size="md"
								placeholder="No. Cheque"
								label="No. Cheque"
							/>
							<Text
								name="moneda"
								size="md"
								placeholder="Moneda"
								label="Moneda"
							/>
							<Text
								name="paguese"
								size="lg"
								placeholder="Paguese a la orden de"
								label="A orden de"
								newline={true}
							/>
							<Text
								name="cantidad"
								size="md"
								placeholder="Monto"
								label="Monto"
								type="number"
							/>
							<Text
								name="cantidad"
								size="md"
								placeholder="Monto"
								label="Descripción del Monto"
							/>
							<Dropdown
								name="account"
								size="md"
								label="Cuenta Bancaria"
							>
								<option value="">Defualt Value</option>
								<option value="Juan">Juan estuvo aqui</option>
								<option value="Juan">Juan estuvo aqui</option>
							</Dropdown>
						</div>
						{columns.length > 0 && data.length > 0 && (
							<div className="my-4">
								<Table
									columns={columns}
									data={data}
									fetchData={fetchData}
									loading={loading}
									pageCount={pageCount}
								/>
							</div>
						)}
						<div className="form-grid-layout">
							<Text
								name="cantidad"
								size="md"
								label="Total Débito"
								value={312434}
								disabled
							/>
							<Text
								name="cantidad"
								size="md"
								label="Total Crédito"
								value={23423}
								disabled
							/>
						</div>
					</div>
				</Form>
			</Formik>
			<div className="mx-4 mb-6 flex gap-2 justify-center flex-wrap">
				<button className="btn bg-blue-blue btn-border-blue flex justify-center items-center gap-2">
					Grabar
					<FaCheck />
				</button>
			</div>
		</Popup>
	)
}

export default AddChecksPopup
