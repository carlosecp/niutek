import type { Alert } from '@/lib/interfaces'
import * as React from 'react'
import { Navbar, Navigation, Search, Results, Alerts } from '@/layouts/index'
import Form from '@/components/forms'
import useNavigation from '@/lib/hooks/useNavigation'

interface Props<Values, Validations, SearchResult> {
	children?: React.ReactNode
	form: {
		values: Values
		validations: Validations
		writeValues: (x: Values) => void
	}
	navigation: {
		children?: React.ReactNode
		navLinks: { name: string; anchor: string }[]
	}
	navbar: {
		title: string
		loading: boolean
		onReset: () => void
		setEditingExisting: (x: boolean) => void
	}
	search: {
		placeholder: string
		loading: boolean
		callback: (searchValue: string) => void
	}
	results: {
		results: SearchResult[]
		loading: boolean
		getDescription: (
			result: SearchResult
		) => { accessor: string | number; description: string }
		callback: (accessor: string | number) => void
	}
	alerts: {
		alerts: Alert[]
		add: (msg: string, type: 'success' | 'warning') => void
		remove: (id: string) => void
	}
}

const Index = <Values, Validations, SearchResult>(
	props: Props<Values, Validations, SearchResult>
) => {
	const navigation = useNavigation()

	return (
		<main className='sm:ml-64 relative bg-light'>
			<Navbar
				{...props.navbar}
				toggleNavigation={navigation.toggleNavigation}
			/>
			<div className='flex flex-col py-4 lg:pr-64'>
				<Alerts alerts={props.alerts.alerts} remove={props.alerts.remove} />
				<Form<Values, Validations> {...props.form}>
					{props.children}
					<button
						type='submit'
						className='btn btn-primary'
						disabled={props.search.loading}
					>
						Guardar
					</button>{' '}
				</Form>
				<Navigation navLinks={props.navigation.navLinks} {...navigation}>
					{props.navigation.children || (
						<>
							<Search {...props.search} />
							<Results {...props.results} />
						</>
					)}
				</Navigation>
			</div>
		</main>
	)
}

export default Index
