import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/main.min.css'
import 'reactjs-popup/dist/index.css'
import 'react-datepicker/dist/react-datepicker.css'
import ThemeState from './context/theme/ThemeState'

ReactDOM.render(
	<ThemeState>
		<App />
	</ThemeState>,
	document.getElementById('root')
)
