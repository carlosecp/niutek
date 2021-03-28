import type { GlobalSearchResults } from '../lib/interfaces'
import * as React from 'react'

interface Props<SearchResult> {
	results: SearchResult[]
	loading: boolean
	setCurrentId: (x: string | number) => void
	getDescription: (
		result: SearchResult
	) => { accessor: string | number; description: string }
	getData: (x: string | number) => void
}

const Results = <SearchResult extends GlobalSearchResults>(
	props: Props<SearchResult>
) => {
	return (
		<ul className='h-full p-2 flex flex-col gap-1 overflow-y-auto'>
			{props.results.map &&
				props.results.map((result) => {
					const { accessor, description } = props.getDescription(result)
					return (
						<li
							key={accessor}
							className={`flex items-center gap-2 p-2 hover:bg-gray-100 transition rounded ${
								props.loading ? 'cursor-wait' : 'cursor-pointer'
							}`}
							onClick={() => {
								if (!props.loading) {
									props.getData(accessor)
									props.setCurrentId(accessor)
								}
							}}
						>
							<span className='whitespace-nowrap text-xs px-2 py-1 bg-primary text-white rounded'>
								{accessor}
							</span>
							<span className='text-sm text-gray-700'>{description}</span>
						</li>
					)
				})}
		</ul>
	)
}

export default Results
