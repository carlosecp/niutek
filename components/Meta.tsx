import Head from 'next/head'
import { useRouter } from 'next/router'

interface Props {
	title?: string
	description?: string
}

const defaults = {
	title: 'Niudot',
	description: 'Niudot es una aplicación administrativa para cooperativas.'
}

const Meta = ({
	title = defaults.title,
	description = defaults.description
}: Props) => {
	const router = useRouter()

	return (
		<Head>
			<title>{title}</title>
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<meta name='description' content={description} />
			<meta name='robots' content='follow, index' />
			<meta name='googlebot' content='index,follow' />
			<meta property='og:url' content={`https://niutek.dev${router.asPath}`} />
			<meta property='og:site_name' content='niutek' />
			<meta property='og:description' content={description} />
			<meta property='og:title' content={title} />
			<link rel='canonical' href={`https://niutek.dev${router.asPath}`} />
		</Head>
	)
}

export default Meta
