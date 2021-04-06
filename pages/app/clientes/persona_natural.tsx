import type { InferGetStaticPropsType } from 'next'
import type { DeptosOption, TablaOptions } from '@/lib/interfaces'
import axios from 'axios'
import Meta from '@/components/Meta'
import Index from '@/components/pages/persona_natural/Index'
import {
	PersonaNatural,
	DatosProfesionales,
	OrigenFondos,
	RefComerciales,
	RefBancarias,
	RefPersonales
} from '@/components/pages/persona_natural/components'

interface OptionsTypes {
	tabla: TablaOptions
	deptos_municipios: DeptosOption[]
}

const index = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<Meta title='Persona Natural' />
			<Index>
				<PersonaNatural options={props.options} />
				<DatosProfesionales />
				<OrigenFondos />
				<RefComerciales />
				<RefBancarias options={props.options} />
				<RefPersonales options={props.options} />
			</Index>
		</>
	)
}

export const getStaticProps = async () => {
	const req = {
		path: `${process.env.BACKEND_URL}/procs`,
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
