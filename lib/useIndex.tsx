import type { GlobalValues, GlobalSearchResults, Alert } from './interfaces'
import * as React from 'react'
import axios from 'axios'
import authContext from '@/context/auth/authContext'
import { v4 as uuidv4 } from 'uuid'

interface Args<Values> {
	url: {
		fetch: string
		write: string
	}
	key: string // key to make the request to fetch client/product/check...
	initialValues: Values // Formik initialValues que esperamos recibir.
}

const useIndex = <
	Values extends GlobalValues,
	SearchResult extends GlobalSearchResults
>(
	props: Args<Values>
) => {
	const [showNavigation, setShowNavigation] = React.useState(false)
	const [searchResults, setSearchResults] = React.useState<SearchResult[]>([])

	const [data, setData] = React.useState<Values>(props.initialValues)
	const [loading, setLoading] = React.useState(false)
	const [editingExisting, setEditingExisting] = React.useState(false)
	const [currentId, setCurrentId] = React.useState<string | number | null>(null)

	const [alerts, setAlerts] = React.useState<Alert[]>([])

	const closeAlert = (id: string) => {
		setAlerts(alerts.filter((alert) => alert.id !== id))
	}

	const auth = React.useContext(authContext)

	const getData = async (accessor: string | number) => {
		const req = {
			path: `${process.env.backend}/proc/lee/${props.url.fetch}`,
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

		console.group(
			'%cGetting Data',
			'font-weight: bold; font-size: 16px; text-transform: uppercase; text-decoration: underline'
		)
		console.log(
			'%c config ',
			'background: #06B6D4; color: #FFFFFF; font-weight: bold',
			req
		)
		setLoading(true)

		try {
			const res = await axios.post(req.path, req.body, {
				headers: req.headers
			})

			setData(res.data)
			setEditingExisting(true)

			console.log(
				'%c success ',
				'background: #149414; color: #FFFFFF; font-weight: bold',
				res.data
			)
		} catch (err) {
			setAlerts([
				...alerts,
				{
					id: uuidv4(),
					message: `${err.message}`,
					type: 'warning'
				}
			])

			console.error(
				'%c error ',
				'background: #c60022; color: #FFFFFF; font-weight: bold',
				err
			)
		} finally {
			console.groupEnd()
			setLoading(false)
		}
	}

	const writeData = async (values: Values, key: string) => {
		const reqType = editingExisting ? 'modifica' : 'registra'

		const req = {
			path: `${process.env.backend}/proc/${reqType}/${props.url.write}`,
			body: {
				p_cod_empresa: auth.user.p_cod_empresa,
				p_cod_sucursal: auth.user.p_cod_sucursal,
				p_clase_persona: auth.user.p_clase_persona,
				[key]: currentId,
				...values
			},
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Credentials': 'true'
			}
		}

		console.group(
			'%cWriting Data',
			'font-weight: bold; font-size: 16px; text-transform: uppercase; text-decoration: underline'
		)
		console.log(
			'%c config ',
			'background: #06B6D4; color: #FFFFFF; font-weight: bold',
			req
		)
		setLoading(true)

		try {
			const res = await axios.post(req.path, req.body, {
				headers: req.headers
			})

			console.log(
				'%c success ',
				'background: #149414; color: #FFFFFF; font-weight: bold',
				res.data
			)
			setAlerts([
				...alerts,
				{
					id: uuidv4(),
					message: `${res.data.success}`,
					type: 'success'
				}
			])
		} catch (err) {
			setAlerts([
				...alerts,
				{
					id: uuidv4(),
					message: `${err.message}`,
					type: 'warning'
				}
			])

			console.error(
				'%c error ',
				'background: #c60022; color: #FFFFFF; font-weight: bold',
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
		currentId,
		setCurrentId,
		editingExisting,
		setEditingExisting,
		showNavigation,
		setShowNavigation,
		searchResults,
		setSearchResults,
		loading,
		setLoading,
		alerts,
		closeAlert
	}

	React.useDebugValue(state)

	return { ...state }
}

export default useIndex
