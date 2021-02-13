import React, { useState, useContext, useEffect } from 'react'
import NewFormBtn from '../../utils/NewFormBtn'
import routesContext from '../../../../context/routes/routesContext'
import alertsContext from '../../../../context/alerts/alertsContext'
import axios from 'axios'
import requestConfig from '../../../../utils/requestConfig'
import SearchProducts from '../../utils/search/products/SearchProducts'
import CreditCreate from './CreditCreate'

const Credit = () => {
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Productos de Crédito')
		// eslint-disable-next-line
	}, [])

	const [loading, setLoading] = useState(false)
	const [fetchingCredit, setFetchingCredit] = useState(false)

	const [matches, setMatches] = useState([])
	const [credit, setCredit] = useState(null)
	const [form, setForm] = useState(false)

	const { addAlert } = useContext(alertsContext)

	const fetchCredit = async (creditId) => {
		setFetchingCredit(true)

		try {
			const res = await axios.post(
				`${process.env.REACT_APP_URL}/read/datos_producto_credito`,
				{
					p_cod_empresa: 1,
					p_cod_sucursal: 0,
					p_cod_producto: creditId,
				},
				requestConfig
			)
			console.log(res.data)
			setCredit({ p_cod_producto: creditId, ...res.data })
			addAlert(res.data)
			setForm(true)
		} catch (err) {
			console.log(err)
			addAlert(err, 'error')
		} finally {
			setFetchingCredit(false)
			setMatches([])
			setLoading(false)
		}
	}

	const writeForm = async (type, data) => {
		console.log('Esto es lo que estoy enviando: ', data)
		try {
			const res = await axios.post(
				`${process.env.REACT_APP_URL}/${type}/producto_credito`,
				data,
				requestConfig
			)
			console.log('Esto es lo que estoy recibiendo: ', res)
			addAlert(res.data)
		} catch (err) {
			console.error(err)
			addAlert(err, 'error')
		}
	}

	return form ? (
		<CreditCreate
			creditData={credit}
			writeForm={writeForm}
			goBack={() => {
				setForm(false)
				setCredit(null)
			}}
		/>
	) : (
		<>
			<SearchProducts
				loading={loading}
				setLoading={setLoading}
				matches={matches}
				setMatches={setMatches}
				fetchProduct={fetchCredit}
				fetchingProduct={fetchingCredit}
				path='credito'
			/>
			<NewFormBtn
				text={{
					title: 'Crear Un Nuevo Producto',
					description: 'Registra un nuevo producto de crédito.',
					proceed: 'Registra Nuevo Producto',
				}}
				toggleForm={() => setForm(true)}
			/>
		</>
	)
}

export default Credit
