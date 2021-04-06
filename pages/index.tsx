import { useAuth0 } from '@auth0/auth0-react'

const Index = () => {
	const { user, error, isLoading } = useAuth0()

	if (user) {
		return <div>Niudot - Logged In</div>
	}

	return (
		<div>
			Niudot - Not Logged In - <a href='/api/auth/login'>Login</a>
		</div>
	)
}

export default Index
