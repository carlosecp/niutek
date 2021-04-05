import * as React from 'react'
import getSearchResults from '@/lib/api/getSearchResults'

interface Args {
	debug?: boolean
	endpoint: string
}

interface SearchConfig {
	searchValue: string
	extraKeys?: { [x: string]: any }
}

const useSearch = <SearchResult,>(args: Args) => {
	const [results, setResults] = React.useState<SearchResult[]>([])

	const getResults = async (config: SearchConfig) => {
		const data = await getSearchResults<SearchResult>({
			endpoint: args.endpoint,
			debug: args.debug || false,
			body: { ...config.extraKeys, search: config.searchValue }
		})

		setResults(data)
	}

	return { results, getResults }
}

export default useSearch
