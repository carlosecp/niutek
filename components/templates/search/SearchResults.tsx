interface Props<Response> {
	results: Response[]
	getDescription: (x: Response) => { accessor: string; description: string }
}

const SearchResults = <Response,>({
	results,
	getDescription,
}: Props<Response>) => {
	return (
		<div className='w-full flex flex-col px-4'>
			{results.map((result) => {
				const { accessor, description } = getDescription(result)
				return (
					<div
						key={accessor}
						className='flex gap-2 p-2 hover:bg-gray-100 transition rounded cursor-pointer'
					>
						<span className='text-xs px-2 py-1 bg-indigo-500 text-white rounded'>
							{accessor}
						</span>
						<span className='text-sm text-gray-700'>
							{description}
						</span>
					</div>
				)
			})}
		</div>
	)
}

export default SearchResults
