import axios from 'axios'
import { InferGetStaticPropsType } from 'next'
import Crear from '../../../components/pages/clientes/persona_natural/_crear'

const crear = ({ options }: InferGetStaticPropsType<typeof getStaticProps>) => {
	console.log(options)

	return (
		<>
			<Crear options={options} />
		</>
	)
}

export const getStaticProps = async () => {
	const config = {
		dep: { codigo: '0' },
		table: { p_tipo: '*' },
	}

	const format = [
		'dep',
		['p_tipo_doc', 'p_moneda', 'p_sexo', 'p_cod_nac', 'pct_cod_banco'],
	]

	const req = {
		path: `${process.env.backend}/read`,
		body: config,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Credentials': 'true',
		},
	}

	try {
		const res = await axios.post(req.path, req.body, {
			headers: req.headers,
		})

		const options = {}

		res.data.forEach((table, index: string) => {
			if (!Array.isArray(format[index])) {
				options[format[index]] = table
			} else if (Array.isArray(format[index])) {
				table.forEach((subTable, subIndex) => {
					options[format[index][subIndex]] = subTable
				})
			}
		})

		return {
			props: {
				options,
			},
		}
	} catch (err) {
		console.error(err)
	}
}

export default crear
