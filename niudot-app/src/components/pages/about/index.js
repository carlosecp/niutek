import React from 'react'
import Navbar from '../../routing/Navbar'
import AboutIntro from './AboutIntro'
import Clients from './Clients'
import Credit from './Credit'

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
				<Clients />
				<Credit />
			</div>
		</>
	)
}

export default About
