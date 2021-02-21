import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../store/store'
import { Layout } from '../components/layout/'
import '../styles/index.css'

const MyApp = ({ Component, pageProps, router }: AppProps) => {
	if (router.pathname.startsWith('/app')) {
		return (
			<Provider store={store}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Provider>
		);
	}

	return <Component {...pageProps} />
}

export default MyApp
