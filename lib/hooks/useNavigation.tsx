import * as React from 'react'

const useNavigation = () => {
	const [showNavigation, setShowNavigation] = React.useState(false)

	const toggleNavigation = () => {
		setShowNavigation(!showNavigation)
	}

	const state = { showNavigation, toggleNavigation }

	React.useDebugValue({ showNavigation })

	return state
}

export default useNavigation
