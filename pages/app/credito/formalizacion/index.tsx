import type { InferGetStaticPropsType } from 'next'
import Index from '../../../../components/app/pages/clientes/persona_natural/Index'

const index = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
	const indexProps = {
		options: props.options
	}

	return <Index {...indexProps} />
}

export const getStaticProps = async (context) => {
	// Aca se supone que se hace la request para pedir los campos de las options.
	// const res = await axios.post()

	return {
		props: {
			options: {
				p_sexo: []
			}
		}
	}
}

export default index
