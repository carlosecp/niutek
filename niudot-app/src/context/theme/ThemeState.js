import React, { useState } from 'react'
import themeContext from './themeContext'

function ThemeState(props) {
	const [isDarkTheme, setIsLightTheme] = useState(false)

	function toggleTheme() {
		setIsLightTheme(!isDarkTheme)
	}

	return (
		<themeContext.Provider value={{ theme: isDarkTheme, toggleTheme }}>
			{props.children}
		</themeContext.Provider>
	)
}

export default ThemeState
