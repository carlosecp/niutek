import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Layout } from '@/layouts/index'
import '../styles/index.css'
import AuthState from '@/context/auth/AuthState'
import { UserProvider } from '@auth0/nextjs-auth0'

const MyApp = ({ Component, pageProps, router }: AppProps) => {
	if (router.pathname.startsWith('/app')) {
		return (
			<ThemeProvider attribute='class'>
				<UserProvider>
					<AuthState>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</AuthState>
				</UserProvider>
			</ThemeProvider>
		)
	}

	return <Component {...pageProps} />
}

export default MyApp
