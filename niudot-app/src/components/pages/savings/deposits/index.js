import React, { useState, useContext, useEffect } from "react"
import NewFormBtn from "../../utils/NewFormBtn"
import routesContext from "../../../../context/routes/routesContext"
import axios from "axios"
import requestConfig from "../../../../utils/requestConfig"
import SearchDeposit from "../../utils/search/products/SearchProducts"
import DepositCreate from "./DepositCreate"

const Deposit = () => {
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage("Depósitos a Plazo Fijo")
		// eslint-disable-next-line
	}, [])

	const [loading, setLoading] = useState(false)
	const [fetchingDeposit, setFetchingDeposit] = useState(false)

	const [matches, setMatches] = useState([])
	const [deposit, setDeposit] = useState(null)
	const [form, setForm] = useState(false)

	const fetchDeposit = async (depositId) => {
		setFetchingDeposit(true)

		const res = await axios.post(
			`${process.env.REACT_APP_URL}/read/deposit`,
			{ p_cod_deposite: depositId },
			requestConfig
		)

		console.log(res.data)

		setFetchingDeposit(false)
		setDeposit({ p_cod_deposite: depositId, ...res.data })
		setMatches([])
		setLoading(false)
		setForm(true)
	}

	const writeForm = async (type, data) => {
		console.log("Esto es lo que estoy enviando: ", data)
		try {
			const res = await axios.post(
				`${process.env.REACT_APP_URL}/${type}/`,
				data,
				requestConfig
			)
			console.log("Esto es lo que estoy recibiendo: ", res)
		} catch (err) {
			console.error(err)
		}
	}

	return form ? (
		<DepositCreate
			depositData={deposit}
			writeForm={writeForm}
			goBack={() => {
				setForm(false)
				setDeposit(null)
			}}
		/>
	) : (
		<>
			<SearchDeposit
				loading={loading}
				setLoading={setLoading}
				matches={matches}
				setMatches={setMatches}
				fetchDeposit={fetchDeposit}
				fetchingDeposit={fetchingDeposit}
			/>
			<NewFormBtn
				text={{
					title: "Crear Un Nuevo Deposito",
					description:
						"Registra un nuevo deposito depósito a plazo fijo.",
					proceed: "Registra Nuevo Deposito",
				}}
				toggleForm={() => setForm(true)}
			/>
		</>
	)
}

export default Deposit
