import { useUser } from '@auth0/nextjs-auth0'

const Index = () => {
	const { user, error, isLoading } = useUser()

	if (user) {
		return <div>Niudot - Logged In</div>
	}

	return <div>Niudot - Not Logged In</div>
}

export default Index
