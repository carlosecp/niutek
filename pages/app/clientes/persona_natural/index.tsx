import type { InferGetStaticPropsType } from 'next'
import type { DeptosOption, TablaOptions } from '../../../../interfaces'
import * as React from 'react'
import axios from 'axios'
import Index from '../../../../components/app/pages/clientes/persona_natural/Index'

interface OptionsTypes {
	tabla: TablaOptions
	deptos_municipios: DeptosOption[]
}

const index = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
	console.log(props)

	const indexProps = {
		options: props.options
	}

	return <Index {...indexProps} />
}

export const getStaticProps = async () => {
	const req = {
		path: `${process.env.backend}/procs`,
		body: {
			lee: { tabla: { p_tipo: '*' }, deptos_municipios: { codigo: '0' } }
		},
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Credentials': 'true'
		}
	}

	const res = await axios.post(req.path, req.body, { headers: req.headers })
	console.log(res.data)

	return {
		props: {
			options: res.data.lee as OptionsTypes
		}
	}
}

export default index
