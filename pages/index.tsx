import * as React from 'react'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0'

const Index = () => {
	const { user, error, isLoading } = useUser()

	React.useEffect(() => {
		console.log(user)
	}, [user])

	if (isLoading) return <div>Loading...</div>
	if (error) return <div>{error.message}</div>

	if (user) {
		return (
			<div>
				Welcome {user.name}! <a href='/api/auth/logout'>Logout</a>
				<div className='flex'>
					<Link href='/app/clientes/persona_natural'>
						<a className='rounded p-1 bg-blue-500'>Ir a Persona Natural</a>
					</Link>
				</div>
			</div>
		)
	}

	return <a href='/api/auth/login'>Login</a>
}

export default Index
