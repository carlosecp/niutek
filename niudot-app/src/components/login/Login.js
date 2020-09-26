import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
	const [abajoElImperialismo, setAbajoElImperialismo] = useState(false)

	return (
		<div className='login-container'>
			This is the login
			<button
				className='btn rounded form-btn-primary'
				onClick={() => setAbajoElImperialismo(!abajoElImperialismo)}
			>
				Acceder 1
			</button>
			<Link to='/inicio'>
				<button
					className='btn rounded form-btn-primary'
					onClick={() => setAbajoElImperialismo(!abajoElImperialismo)}
				>
					Acceder 2
				</button>
			</Link>
			{abajoElImperialismo && (
				<h1 style={{ fontSize: 64 }}>ABAJO EL IMPERIALISMO</h1>
			)}
		</div>
	)
}

export default Login
