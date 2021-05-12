import type { InferGetStaticPropsType } from 'next'
import type { TablaCreOptions, TablaOptions } from '@/lib/interfaces'
import axios from 'axios'
import { AppPage } from '@/layouts/index'
import Index from '@/components/pages/garantias/Index'
import { Garantias } from '@/components/pages/garantias/components'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

interface OptionsTypes {
	tabla: TablaOptions
	tablas_cre: TablaCreOptions
}

const index = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<AppPage title='Garantias'>
			<Index>
				<Garantias options={props.options} />
			</Index>
		</AppPage>
	)
}

export const getStaticProps = async () => {
	const req = {
		path: `${process.env.BACKEND_URL}/procs`,
		body: {
			lee: {
				tabla: { p_tipo: '*' },
				tablas_cre: { p_tipo: '*' }
			}
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
