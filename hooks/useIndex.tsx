import type { RootState } from '../store/store'
import type { Data as GlobalData } from '../interfaces/forms'
import * as React from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

interface Args<Data> {
	url: string
	key: string // key to make the request to fetch client/product/check...
	initialValues: Data // Formik initialValues que esperamos recibir.
}

const useIndex = <SearchResult, Data extends GlobalData>(props: Args<Data>) => {
	const [showNavigation, setShowNavigation] = React.useState(false)
	const [searchResults, setSearchResults] = React.useState<SearchResult[]>([])

	const [data, setData] = React.useState<Data>(props.initialValues)
	const [loading, setLoading] = React.useState(false)

	const auth = useSelector((state: RootState) => state.auth)

	const getData = async (accessor: string | number) => {
		const req = {
			path: `${process.env.backend}/read/${props.url}`,
			body: {
				[props.key]: accessor,
				p_cod_empresa: auth.user.p_cod_empresa,
				p_cod_sucursal: auth.user.p_cod_sucursal
			},
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Credentials': 'true'
			}
		}

		setLoading(true)

		try {
			const res = await axios.post(req.path, req.body, {
				headers: req.headers
			})
			setData(res.data)
		} catch (err) {
			console.error('useIndex: ', err)
		}
	}

	return {
		data,
		setData,
		getData,
		showNavigation,
		setShowNavigation,
		searchResults,
		setSearchResults,
		loading,
		setLoading
	}
}

export default useIndex
