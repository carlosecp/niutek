import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Layout } from '../layout'
import '../styles/index.css'

const MyApp = ({ Component, pageProps, router }: AppProps) => {
	if (router.pathname.startsWith('/app')) {
		return (
			<ThemeProvider attribute='class'>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		)
	}

	return <Component {...pageProps} />
}

export default MyApp
