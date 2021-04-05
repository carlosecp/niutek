import type {
	PersonaNaturalValues,
	PersonaNaturalSearchResult,
	PersonaNaturalValidationSchema
} from '@/data/persona_natural'
import type { TablaOptions, DeptosOption } from '@/lib/interfaces'
import * as React from 'react'
import useForm from '@/lib/hooks/useForm'
import useNavigation from '@/lib/hooks/useNavigation'
import { navLinks, initialValues } from '@/data/persona_natural'
import { Navbar, Navigation, Results, Alerts } from '@/layouts/index'
import NewSearch from '@/layouts/NewSearch'
import Form from '@/components/forms/NewForm'
import {
	PersonaNatural,
	DatosProfesionales,
	OrigenFondos,
	RefComerciales,
	RefBancarias,
	RefPersonales
} from '../persona_natural/components'

export interface Props {
	options: {
		tabla: TablaOptions
		deptos_municipios: DeptosOption[]
	}
	children?: React.ReactNode
}

const index = (props: Props) => {
	const navigation = useNavigation()

	const [loading, setLoading] = React.useState(false)
	const state = useForm<PersonaNaturalValues>({
		initialValues: initialValues.values
	})

	return (
		<main className='sm:ml-64 relative bg-light'>
			<div className='flex flex-col py-4 lg:pr-64'>
				<Form<PersonaNaturalValues, PersonaNaturalValidationSchema>
					values={state.values}
					validations={initialValues.validations}
					writeData={() => {}}
				>
					<PersonaNatural options={props.options} />
					<DatosProfesionales />
					<OrigenFondos />
					<RefComerciales />
					<RefBancarias options={props.options} />
					<RefPersonales options={props.options} />
					<button
						type='button'
						className='flex justify-center'
						onClick={() =>
							state.getValues({
								requestBody: {
									p_cod_cliente: 3,
									p_cod_empresa: 1,
									p_cod_sucursal: 0
								}
							})
						}
					>
						Press Me
					</button>
					<button
						type='button'
						className='flex justify-center'
						onClick={() =>
							state.writeValues({ p_cod_empresa: 1, p_cod_sucursal: 0 })
						}
					>
						Write
					</button>
				</Form>
				<Navigation
					navLinks={navLinks}
					showNavigation={navigation.showNavigation}
					toggleNavigation={() =>
						navigation.setShowNavigation(!navigation.showNavigation)
					}
				>
					<NewSearch<PersonaNaturalSearchResult>
						config={{
							placeholder: 'Buscar test',
							url: 'clientes_natural'
						}}
						loading={loading}
						setLoading={setLoading}
						setSearchResults={() => {}}
					/>
				</Navigation>
			</div>
		</main>
	)
}

export default index
