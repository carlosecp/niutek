import * as React from 'react'
import axios from 'axios'
import { log } from '@/lib/Debug'

interface Args {
	debug?: boolean
	endpoint: string
	loading: boolean
	setLoading: (x: boolean) => void
}

interface SearchConfig {
	searchValue: string
	extraKeys?: { [x: string]: any }
	extraHeaders?: { [x: string]: any }
}

interface DefaultProps<SearchResult> {
	searchBarPlaceholder: string
	getDescription: (
		result: SearchResult
	) => { accessor: string | number; description: string }
	resultsCallback: (accessor: string | number) => void
	setEditing: (x: boolean) => void
}

const useSearch = <SearchResult,>(args: Args) => {
	const [results, setResults] = React.useState<SearchResult[]>([])

	const getResults = async (config: SearchConfig) => {
		args.setLoading(true)

		const req = {
			endpoint: `${args.debug ? 'debug' : 'proc'}/busca/${args.endpoint}`,
			body: { ...config.extraKeys, search: config.searchValue },
			headers: {
				...config?.extraHeaders
			}
		}

		try {
			const res = await axios.post<SearchResult[]>('/api/forms/search', req)

			log.response(res)
			setResults(res.data)
		} catch (err) {
			log.error(err)
		} finally {
			log.close()
			args.setLoading(false)
		}
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
			callback: async (accessor: string | number) => {
				defaultProps.resultsCallback(accessor)
				defaultProps.setEditing(true)
			}
		}
	})

	const state = { results, getResults, getDefaultProps }

	React.useDebugValue({ results })

	return state
}

export default useSearch
