import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import AuthState from '@/context/auth/AuthState'
import { UserProvider } from '@auth0/nextjs-auth0'
import '../styles/index.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<UserProvider user={pageProps.user}>
			<ThemeProvider attribute='class'>
				<AuthState>
					<Component {...pageProps} />
				</AuthState>
			</ThemeProvider>
		</UserProvider>
	)
}

export default MyApp
