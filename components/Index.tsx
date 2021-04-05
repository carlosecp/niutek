import * as React from 'react'
import { Navbar, Navigation } from '@/layouts/index'
import Form from '@/components/forms/NewForm'
import Search from '@/layouts/NewSearch'
import Results from '@/layouts/NewResults'
import useNavigation from '@/lib/hooks/useNavigation'

interface Props<Values, Validations, SearchResult> {
	children?: React.ReactNode
	form: {
		values: Values
		validations: Validations
		writeData: (x: Values) => void
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
				<Form<Values, Validations> {...props.form}>{props.children}</Form>
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
