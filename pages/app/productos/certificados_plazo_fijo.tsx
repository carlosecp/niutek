import type { InferGetStaticPropsType } from 'next'
import type { DeptosOption, TablaOptions } from '@/lib/interfaces'
import * as React from 'react'
import axios from 'axios'
import Meta from '@/components/Meta'
import Index from '@/components/pages/certificados_plazo_fijo/Index'

interface OptionsTypes {
	tabla: TablaOptions
	deptos_municipios: DeptosOption[]
}

const index = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
	const indexProps = {
		options: props.options
	}

	return (
		<>
			<Meta title='Certificados a Plazo Fijo' />
			<Index {...indexProps} />
		</>
	)
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

	return {
		props: {
			options: res.data.lee as OptionsTypes
		}
	}
}

export default index
