import React from 'react'
import Navbar from '../Navbar'
import AboutIntro from './AboutIntro'

function About() {
	return (
		<>
			<Navbar
				prompt='¿Aún no tienes una cuenta?'
				tag='Regístrate'
				link='/register'
			/>
			<div className='pt-24'>
				<AboutIntro />
			</div>
		</>
	)
}

export default About
