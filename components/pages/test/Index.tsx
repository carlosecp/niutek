// Types
import type {
	PersonaNaturalValues,
	PersonaNaturalSearchResult,
	PersonaNaturalValidationSchema
} from '@/data/persona_natural'
import * as React from 'react'
// Hooks
import useForm from '@/lib/hooks/useForm'
import useNavigation from '@/lib/hooks/useNavigation'
// Values
import { navLinks, initialValues } from '@/data/persona_natural'
// Components
import { Navbar, Navigation, Results, Alerts } from '@/layouts/index'
import NewSearch from '@/layouts/NewSearch'
import Form from '@/components/forms/NewForm'
import {
	DatosProfesionales,
	OrigenFondos,
	RefComerciales
} from '../persona_natural/components'

const index = () => {
	const [loading, setLoading] = React.useState(false)
	const state = useForm<PersonaNaturalValues>({
		initialValues: initialValues.values
	})

	const navigation = useNavigation()

	return (
		<main className='sm:ml-64 relative bg-light'>
			<div className='flex flex-col py-4 lg:pr-64'>
				<Form<PersonaNaturalValues, PersonaNaturalValidationSchema>
					values={state.values}
					validations={initialValues.validations}
					writeData={() => {}}
				>
					<DatosProfesionales />
					<RefComerciales />
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
