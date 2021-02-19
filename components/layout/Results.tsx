import type { SearchResults } from '../../interfaces/search'
import * as React from 'react'

interface Props<Result> {
	results: Result[]
	getDescription: (
		result: Result
	) => { accessor: string | number; description: string }
	getData: (x: string | number) => void
}

const Results = <Result extends SearchResults>(props: Props<Result>) => {
	return (
		<ul className='h-full p-2 flex flex-col gap-1 overflow-y-auto'>
			{props.results.map((result) => {
				const { accessor, description } = props.getDescription(result)
				return (
					<li
						key={accessor}
						className='flex items-center gap-2 p-2 hover:bg-gray-100 transition rounded cursor-pointer'
						onClick={() => props.getData(accessor)}
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