import React, { useState, useContext, useEffect } from 'react'
import NewFormBtn from '../../utils/NewFormBtn'
import routesContext from '../../../../context/routes/routesContext'
import alertsContext from '../../../../context/alerts/alertsContext'
import axios from 'axios'
import requestConfig from '../../../../utils/requestConfig'
import SearchCertificate from '../../utils/search/products/SearchProducts'
import CertificateCreate from './CertificateCreate'

const Certificate = () => {
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Productos de Certificados a Plazo Fijo')
		// eslint-disable-next-line
	}, [])

	const [loading, setLoading] = useState(false)
	const [fetchingCertificate, setFetchingCertificate] = useState(false)

	const [matches, setMatches] = useState([])
	const [certificate, setCertificate] = useState(null)
	const [form, setForm] = useState(false)

	const [savingCertificate, setSavingCertificate] = useState(false)

	const { addAlert } = useContext(alertsContext)

	const fetchCertificate = async (certificateId) => {
		setFetchingCertificate(true)

		const res = await axios.post(
			`${process.env.REACT_APP_URL}/read/datos_producto_certificado`,
			{
				p_cod_producto: certificateId,
				p_cod_empresa: 1,
				p_cod_sucursal: 0,
			},
			requestConfig
		)

		console.log(res.data)

		setFetchingCertificate(false)
		setCertificate({ p_cod_producto: certificateId, ...res.data })
		setMatches([])
		setLoading(false)
		setForm(true)
	}

	const writeForm = async (type, data) => {
		setSavingCertificate(true)
		try {
			const res = await axios.post(
				`${process.env.REACT_APP_URL}/${type}/producto_certificado`,
				data,
				requestConfig
			)
			console.log(res.data)
			addAlert(res.data)
		} catch (err) {
			addAlert(err, 'error')
		} finally {
			setSavingCertificate(false)
		}
	}

	return form ? (
		<CertificateCreate
			certificateData={certificate}
			writeForm={writeForm}
			savingCertificate={savingCertificate}
			goBack={() => {
				setForm(false)
				setCertificate(null)
			}}
		/>
	) : (
		<>
			<SearchCertificate
				loading={loading}
				setLoading={setLoading}
				matches={matches}
				setMatches={setMatches}
				fetchProduct={fetchCertificate}
				fetchingProduct={fetchingCertificate}
				path='certificado'
			/>
			<NewFormBtn
				text={{
					title: 'Crear Un Nuevo Producto',
					description:
						'Registra un nuevo producto de certificado a plazo fijo.',
					proceed: 'Registra Nuevo Producto',
				}}
				toggleForm={() => setForm(true)}
			/>
		</>
	)
}

export default Certificate
