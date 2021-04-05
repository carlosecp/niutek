import * as React from 'react'
import { Navbar, Navigation } from '@/layouts/index'
import Form from '@/components/forms/NewForm'
import useNavigation from '@/lib/hooks/useNavigation'

interface Props<Values, Validations> {
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
		loading: boolean
		title: string
		onReset: () => void
		setEditingExisting: (x: boolean) => void
	}
}

const FormPage = <Values, Validations>(props: Props<Values, Validations>) => {
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
					{props.navigation.children}
				</Navigation>
			</div>
		</main>
	)
}

export default FormPage
