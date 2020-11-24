import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './assets/main.css'
import ThemeState from './context/theme/ThemeState'

ReactDOM.render(
	<ThemeState>
		<App />
	</ThemeState>,
	document.getElementById('root')
)
