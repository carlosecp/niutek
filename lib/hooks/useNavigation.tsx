import * as React from 'react'

const useNavigation = () => {
	const [showNavigation, setShowNavigation] = React.useState(false)

	const toggleNavigation = () => {
		setShowNavigation(!showNavigation)
	}

	React.useDebugValue(showNavigation)

	return { showNavigation, toggleNavigation }
}

export default useNavigation
