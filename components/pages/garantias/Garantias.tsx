import type { AuthStateType } from '@/context/auth/authContext'
import * as React from 'react'
import axios from 'axios'
import authContext from '@/context/auth/authContext'
import { navLinks, NavLinks } from '@/data/garantias'
import { Text, Select, TextArea } from '@/components/forms'

const SECTION_NAME = NavLinks.Garantias

type CurrentId = string | number | null

const getGarantias = async (
	auth: AuthStateType,
	setLoading: (x: boolean) => void,
	currentId: CurrentId
) => {
	const req = {
		path: `${process.env.backend}/proc/lee/lista_garantias_cliente`,
		body: {
			p_cod_empresa: auth.user.p_cod_empresa,
			p_cod_sucursal: auth.user.p_cod_sucursal,
			p_cod_cliente: currentId
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

		return res.data as number[]
	} catch (err) {
		return []
	} finally {
		console.groupEnd()
		setLoading(false)
	}
}

interface Props {
	currentId: CurrentId
	loading: boolean
	setLoading: (x: boolean) => void
}

const Garantias = (props: Props) => {
	const [garantias, setGarantias] = React.useState<number[]>()

	const auth = React.useContext(authContext)

	const getInfo = async () => {
		const garantiasData = await getGarantias(
			auth,
			props.setLoading,
			props.currentId
		)
		setGarantias(garantiasData)
	}

	React.useEffect(() => {
		if (props.currentId) {
			getInfo()
		}
	}, [props.currentId])

	return (
		<section id={navLinks[SECTION_NAME].anchor}>
			<a
				href='#!'
				id={`_${navLinks[SECTION_NAME].anchor}`}
				className='anchor'
			></a>
			<h1 className='font-medium text-xl text-gray-900'>
				{navLinks[SECTION_NAME].name}
			</h1>
			<article className='form-section my-2 flex justify-between items-center'>
				<div className='text-sm font-medium text-gray-700'>
					{props.currentId
						? `Cliente seleccionado: ${props.currentId}`
						: 'Ningun cliente seleccionado'}
				</div>
			</article>
			<article className='form-section my-2 grid grid-cols-12 gap-4'>
				<Select
					name='p_cod_gar'
					label='Seleccionar garantía'
					classes={{
						container: 'fc-lg md:fc break-line',
						input: 'w-full block form-input form-input-border'
					}}
				>
					{garantias &&
						garantias.map((garantia) => <option value={1}>Opcion 1</option>)}
				</Select>
				<Select
					name='p_cod_gar'
					label='Tipo de garantía'
					classes={{
						container: 'fc-lg md:fc break-line',
						input: 'w-full block form-input form-input-border'
					}}
				>
					<option value={1}>Opcion 1</option>
					<option value={2}>Opcion 2</option>
				</Select>
				<Select
					name='p_cod_cla'
					label='Clasificación'
					classes={{
						container: 'fc-lg md:fc break-line',
						input: 'w-full block form-input form-input-border'
					}}
				>
					<option value={1}>Opcion 1</option>
					<option value={2}>Opcion 2</option>
				</Select>
				<Select
					name='p_cod_cat'
					label='Categoría'
					classes={{
						container: 'fc-lg md:fc break-line',
						input: 'w-full block form-input form-input-border'
					}}
				>
					<option value={1}>Opcion 1</option>
					<option value={2}>Opcion 2</option>
				</Select>
				<Text
					name='p_marca'
					label='Marca'
					classes={{
						container: 'fc-lg md:fc break-line',
						input: 'w-full block form-input form-input-border'
					}}
				/>
				<Text name='p_modelo' label='Modelo' />
				<Text name='p_annio' label='Año' />
				<Text name='p_color' label='Color' />
				<Text name='p_motor' label='Motor' />
				<Text name='p_chasis' label='Chasis' />
				<Text name='p_no_serie' label='No. serie' />
				<Text name='p_valor' label='Valor' />
				<TextArea name='p_descripcion' label='Descripción' />
			</article>
		</section>
	)
}

export default Garantias
