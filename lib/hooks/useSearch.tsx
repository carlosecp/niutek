import * as React from 'react'
import getSearchResults from '@/lib/api/getSearchResults'

interface Args {
	debug?: boolean
	endpoint: string
	loading: boolean
	setLoading: (x: boolean) => void
}

interface SearchConfig {
	searchValue: string
	extraKeys?: { [x: string]: any }
}

interface DefaultProps<SearchResult> {
	searchBarPlaceholder: string
	getDescription: (
		result: SearchResult
	) => { accessor: string | number; description: string }
	callback: (accessor: string | number) => void
	setEditing: (x: boolean) => void
}

const useSearch = <SearchResult,>(args: Args) => {
	const [results, setResults] = React.useState<SearchResult[]>([])

	const getResults = async (config: SearchConfig) => {
		args.setLoading(true)
		const data = await getSearchResults<SearchResult>({
			endpoint: args.endpoint,
			debug: args.debug || false,
			body: { ...config.extraKeys, search: config.searchValue }
		})

		setResults(data)
		args.setLoading(false)
	}

	const getDefaultProps = (defaultProps: DefaultProps<SearchResult>) => ({
		search: {
			placeholder: defaultProps.searchBarPlaceholder,
			loading: args.loading,
			callback: (searchValue: string) => {
				getResults({ searchValue })
			}
		},
		results: {
			results,
			loading: args.loading,
			getDescription: defaultProps.getDescription,
			callback: (accessor: string | number) => {
				defaultProps.callback(accessor)
				defaultProps.setEditing(true)
			}
		}
	})

	const state = { results, getResults, getDefaultProps }

	React.useDebugValue({ results })

	return state
}

export default useSearch
