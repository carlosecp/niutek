interface Props<SearchResult> {
	results: SearchResult[]
	getDescription: (
		result: SearchResult
	) => { accessor: string | number; description: string }
}

const Navigation = <SearchResult,>({
	results,
	getDescription,
}: Props<SearchResult>) => {
	return (
		<div className='fixed top-0 -right-full lg:right-0 w-64 h-full bg-white border-l overflow-y-auto no-scrollbar'>
			<ul className='bg-white rounded-b'>
				{results.map((result) => {
					const { accessor, description } = getDescription(result)
					return (
						<li
							key={accessor}
							className='flex gap-2 p-2 hover:bg-gray-100 transition rounded cursor-pointer'
						>
							<span className='text-xs px-2 py-1 bg-primary text-white rounded'>
								{accessor}
							</span>
							<span className='text-sm text-gray-700'>
								{description}
							</span>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Navigation
