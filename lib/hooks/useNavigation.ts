import * as React from 'react'

const useNavigation = () => {
	const [showNavigation, setShowNavigation] = React.useState(false)

	React.useDebugValue(showNavigation)

	return { showNavigation, setShowNavigation }
}

export default useNavigation
