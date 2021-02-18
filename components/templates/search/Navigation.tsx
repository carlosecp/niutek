import { useEffect } from 'react'
import type { SearchConfig, SearchResults } from '../../../interfaces/search'
import Search from './Search'

interface Props<SearchResult> {
	config: SearchConfig
	updateResults: (x: SearchResult[]) => void
	results: SearchResult[]
	getDescription: (
		result: SearchResult
	) => { accessor: string | number; description: string }
}

const Navigation = <SearchResult extends SearchResults>({
	config,
	updateResults,
	results,
	getDescription,
}: Props<SearchResult>) => {
	useEffect(() => {
		console.log('results from Navigation.tsx: ', results)
	}, [results])

	return (
		<aside className='fixed top-0 -right-full lg:right-0 w-64 h-full bg-white border-l overflow-y-auto no-scrollbar'>
			<section className='flex flex-col'>
				<div className='h-14 flex flex-center border-b'>Navegación</div>
				<ul id='navigation'>
					<li>
						<a href='#persona_natural_anchor'>Persona Natural</a>
					</li>
					<li>
						<a href='#datos_profesionales_anchor'>
							Datos Profesionales
						</a>
					</li>
					<li>
						<a href='#origen_fondos_anchor'>Origen de Fondos</a>
					</li>
				</ul>
			</section>
			<section id='search'>
				<Search config={config} updateResults={updateResults} />
				<ul className=''>
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
			</section>
		</aside>
	)
}

export default Navigation
