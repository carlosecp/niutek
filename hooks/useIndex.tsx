import type { RootState } from '../store/store'
import type { Data as GlobalData } from '../interfaces/forms'
import * as React from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { initialValues } from '../components/app/pages/clientes/persona_natural/data'

interface Args<Data> {
	url: {
		fetch: string
		write: string
	}
	key: string // key to make the request to fetch client/product/check...
	initialValues: Data // Formik initialValues que esperamos recibir.
}

const useIndex = <SearchResult, Data extends GlobalData>(props: Args<Data>) => {
	const [showNavigation, setShowNavigation] = React.useState(false)
	const [searchResults, setSearchResults] = React.useState<SearchResult[]>([])

	const [data, setData] = React.useState<Data>(props.initialValues)
	const [loading, setLoading] = React.useState(false)
	const [editingExisting, setEditingExisting] = React.useState(false)

	const auth = useSelector((state: RootState) => state.auth)

	const getData = async (accessor: string | number) => {
		const req = {
			path: `${process.env.backend}/lee/${props.url.fetch}`,
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

		console.group('useIndex')
		console.log('request config: ', req)
		setLoading(true)

		try {
			const res = await axios.post(req.path, req.body, {
				headers: req.headers
			})

			setData(res.data)
			setEditingExisting(true)
			console.log(
				'%c fetching data: ',
				'background: #149414; color: #FFFFFF',
				res.data
			)
		} catch (err) {
			console.error(
				'%c fetching data: ',
				'background: #c60022; color: #FFFFFF',
				err
			)
		} finally {
			console.groupEnd()
			setLoading(false)
		}
	}

	const writeData = async (values: Data) => {
		const reqType = editingExisting ? 'create' : 'registra'

		const req = {
			path: `${process.env.backend}/${reqType}/${props.url.write}`,
			body: {
				p_cod_empresa: auth.user.p_cod_empresa,
				p_cod_sucursal: auth.user.p_cod_sucursal,
				p_clase_persona: auth.user.p_clase_persona,
				...values
			},
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Credentials': 'true'
			}
		}

		console.group('useIndex')
		console.log('request config: ', req)
		setLoading(true)

		try {
			const res = await axios.post(req.path, req.body, {
				headers: req.headers
			})

			console.log(
				'%c writing data: ',
				'background: #149414; color: #FFFFFF',
				res.data
			)
		} catch (err) {
			console.error(
				'%c writing data: ',
				'background: #c60022; color: #FFFFFF',
				err
			)
		} finally {
			console.groupEnd()
			setLoading(false)
		}
	}

	const state = {
		data,
		setData,
		getData,
		writeData,
		editingExisting,
		setEditingExisting,
		showNavigation,
		setShowNavigation,
		searchResults,
		setSearchResults,
		loading,
		setLoading
	}

	React.useDebugValue(state)

	return { ...state }
}

export default useIndex
