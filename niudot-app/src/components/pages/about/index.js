import React from 'react'
import Navbar from '../../routing/Navbar'
import AboutIntro from './AboutIntro'
import Certificates from './Certificates'
import Clients from './Clients'
import Contability from './Contability'
import Credit from './Credit'
import Savings from './Savings'
import Collections from './Collections'
import Register from './Register'
import Inventory from './Inventory'
import Billing from './Billing'
import Checks from './Checks'
import Appointments from './Appointments'
import Pendings from './Pendings'

function About() {
	return (
		<>
			<Navbar
				prompt='¿Aún no tienes una cuenta?'
				tag='Regístrate'
				link='/register'
			/>
			<div className='pt-20'>
				<AboutIntro />
				<Clients />
				<Credit />
				<Contability />
				<Certificates />
				<Savings />
				<Collections />
				<Register />
				<Inventory />
				<Billing />
				<Checks />
				<Appointments />
				<Pendings />
			</div>
		</>
	)
}

export default About
