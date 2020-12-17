import React from 'react'
import Navbar from './Navbar'

function About() {
	return (
		<Navbar
			prompt='¿Aún no tienes una cuenta?'
			tag='Regístrate'
			link='/register'
		/>
	)
}

export default About
