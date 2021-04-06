import type { MuniOption } from './interfaces'
import * as React from 'react'
import axios from 'axios'

const getMunicipio = async (
	codDepto: number,
	setMunicipios: React.Dispatch<React.SetStateAction<MuniOption[]>>,
	setLoading: (x: boolean) => void
) => {
	const req = {
		path: `${process.env.BACKEND_URL}/procs`,
		body: {
			lee: { deptos_municipios: { codigo: codDepto } }
		},
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Credentials': 'true'
		}
	}

	const res = await axios.post(req.path, req.body, { headers: req.headers })
	setMunicipios(res.data.lee.deptos_municipios)
	setLoading(false)
}

export default getMunicipio
