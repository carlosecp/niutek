import * as React from 'react'
import getSearchResults from '@/lib/api/getSearchResults'

interface SearchConfig {
	searchValue: string
	extraKeys?: { [x: string]: any }
}

const useSearch = <SearchResult,>() => {
	const [results, setResults] = React.useState<SearchResult[]>([])

	const getResults = async (config: SearchConfig) => {
		const data = await getSearchResults<SearchResult>({
			endpoint: 'clientes_natural',
			body: { ...config.extraKeys, search: config.searchValue }
		})

		setResults(data)
	}

	return { results, getResults }
}

export default useSearch
