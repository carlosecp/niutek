import { searchResults } from '../../../interfaces'

interface Props<T> {
	results: T[]
	getDescription: (x: T) => { idKey: number; description: string }
}

const SearchResults = <T extends searchResults>({
	results,
	getDescription,
}: Props<T>) => {
	return (
		<div className='mt-4 flex flex-col gap-3'>
			{results.map((result) => {
				const { idKey, description } = getDescription(result)
				return (
					<div
						key={idKey}
						className='p-2 rounded bg-blue-400 shadow-sm text-white cursor-pointer transition transform hover:scale-102 hover:shadow-md'
					>
						{description}
					</div>
				)
			})}
		</div>
	)
}

export default SearchResults
