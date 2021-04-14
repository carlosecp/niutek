import type { InferGetStaticPropsType } from 'next'
import type { DeptosOption, TablaOptions } from '@/lib/interfaces'
import axios from 'axios'
import { AppPage } from '@/layouts/index'
import Index from '@/components/pages/productos_ahorro/Index'
import { ProductosDeAhorro } from '@/components/pages/productos_ahorro/components'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

interface OptionsTypes {
	tabla: TablaOptions
	deptos_municipios: DeptosOption[]
}

const index = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<AppPage title='Productos de Ahorro'>
			<Index>
				<ProductosDeAhorro options={props.options} />
			</Index>
		</AppPage>
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

export default withPageAuthRequired(index)
