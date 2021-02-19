import type { SearchResults } from '../../../interfaces/search'
import React from 'react'
import getRequest from '../../../utils/getRequest'

interface Props<SearchResult> {
	results: SearchResult[]
	getDescription: (
		result: SearchResult
	) => { accessor: string | number; description: string }
	getData: (x: string | number) => void
}

const Results = <SearchResult extends SearchResults>({
	results,
	getDescription,
	getData,
}: Props<SearchResult>) => {
	return (
		<ul className='h-full p-2 flex flex-col gap-1 overflow-y-auto'>
			{results.map((result) => {
				const { accessor, description } = getDescription(result)
				return (
					<li
						key={accessor}
						className='flex items-center gap-2 p-2 hover:bg-gray-100 transition rounded cursor-pointer'
						onClick={() => getData(accessor)}
					>
						<span className='whitespace-nowrap text-xs px-2 py-1 bg-primary text-white rounded'>
							{accessor}
						</span>
						<span className='text-sm text-gray-700'>
							{description}
						</span>
					</li>
				)
			})}
		</ul>
	)
}

export default Results
