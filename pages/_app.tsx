import type { AppProps } from 'next/app'
import { Layout } from '../components/layout/'
import '../styles/index.css'

const MyApp = ({ Component, pageProps, router }: AppProps) => {
	if (router.pathname.startsWith('/app')) {
		return (
			<Layout>
				<Component {...pageProps} />
			</Layout>
		)
	}

	return <Component {...pageProps} />
}

export default MyApp
