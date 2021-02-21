import Head from 'next/head'

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
	return (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="description" content={description} />
			<title>{title}</title>
		</Head>
	)
}

export default Meta
