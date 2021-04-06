import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import '../styles/index.css'
import AuthState from '@/context/auth/AuthState'
import { UserProvider } from '@auth0/nextjs-auth0'

const MyApp = ({ Component, pageProps }: AppProps) => {
	const { user } = pageProps

	return (
		<UserProvider user={user}>
			<ThemeProvider attribute='class'>
				<AuthState>
					<Component {...pageProps} />
				</AuthState>
			</ThemeProvider>
		</UserProvider>
	)

	return <Component {...pageProps} />
}

export default MyApp
