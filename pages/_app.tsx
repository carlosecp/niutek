import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Provider } from 'react-redux'
import store from '@/lib/store'
import { Layout } from '@/layouts/index'
import '../styles/index.css'

const MyApp = ({ Component, pageProps, router }: AppProps) => {
	if (router.pathname.startsWith('/app')) {
		return (
			<Provider store={store}>
				<ThemeProvider attribute='class'>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</ThemeProvider>
			</Provider>
		)
	}

	return <Component {...pageProps} />
}

export default MyApp
