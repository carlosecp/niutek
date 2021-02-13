import React, { useState, useContext, useEffect } from 'react'
import NewFormBtn from '../../utils/NewFormBtn'
import routesContext from '../../../../context/routes/routesContext'
import axios from 'axios'
import requestConfig from '../../../../utils/requestConfig'
import SearchProduct from '../../utils/search/products/SearchProducts'
import ProductCreate from './ProductCreate'
import alertsContext from '../../../../context/alerts/alertsContext'

const Savings = () => {
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Productos de Ahorro')
		// eslint-disable-next-line
	}, [])

	const [loading, setLoading] = useState(false)
	const [fetchingProduct, setFetchingProduct] = useState(false)

	const [matches, setMatches] = useState([])
	const [product, setProduct] = useState(null)
	const [form, setForm] = useState(false)

	const [savingProduct, setSavingProduct] = useState(false)

	const { addAlert } = useContext(alertsContext)

	const fetchProduct = async (productId) => {
		setFetchingProduct(true)

		const res = await axios.post(
			`${process.env.REACT_APP_URL}/read/datos_producto_ahorro`,
			{ p_cod_producto: productId, p_cod_sucursal: 0, p_cod_empresa: 1 },
			requestConfig
		)

		setFetchingProduct(false)
		setProduct({ p_cod_producto: productId, ...res.data })
		setMatches([])
		setLoading(false)
		setForm(true)
	}

	const writeForm = async (type, data) => {
		setSavingProduct(true)
		console.log(
			'Esto es lo que estoy enviando (writeForm, savings/index.js): ',
			data
		)
		try {
			const res = await axios.post(
				`${process.env.REACT_APP_URL}/${type}/producto_ahorro`,
				data,
				requestConfig
			)
			addAlert(res.data)
		} catch (err) {
			console.error('savings/index.js', err)
			addAlert(err, 'error')
		} finally {
			setSavingProduct(false)
		}
	}

	return form ? (
		<ProductCreate
			productData={product}
			writeForm={writeForm}
			savingProduct={savingProduct}
			goBack={() => {
				setForm(false)
				setProduct(null)
			}}
		/>
	) : (
		<>
			<SearchProduct
				loading={loading}
				setLoading={setLoading}
				matches={matches}
				setMatches={setMatches}
				fetchProduct={fetchProduct}
				fetchingProduct={fetchingProduct}
				path='ahorro'
			/>
			<NewFormBtn
				text={{
					title: 'Crear Un Nuevo Producto',
					description: 'Registra un nuevo producto de ahorro.',
					proceed: 'Registra Nuevo Producto',
				}}
				toggleForm={() => setForm(true)}
			/>
		</>
	)
}

export default Savings
