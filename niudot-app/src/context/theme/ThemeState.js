import React, { useState } from 'react'
import themeContext from './themeContext'

function ThemeState(props) {
	const [isLightTheme, setIsLightTheme] = useState(false)

	function toggleTheme() {
		setIsLightTheme(!isLightTheme)
	}

	return (
		<themeContext.Provider value={{ theme: isLightTheme, toggleTheme }}>
			{props.children}
		</themeContext.Provider>
	)
}

export default ThemeState
