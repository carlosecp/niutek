import type { SearchResults, SearchConfig } from '../../../interfaces/search'
import { useEffect } from 'react'
import Search from './Search'
import Results from './Results'

interface Props<SearchResult> {
	showNavigation: boolean
	toggleNavigation: () => void
	getData: (x: string | number) => void
	navLinks: { name: string; anchor: string }[]
	config: SearchConfig
	updateResults: (x: SearchResult[]) => void
	results: SearchResult[]
	getDescription: (
		result: SearchResult
	) => { accessor: string | number; description: string }
}

const Navigation = <SearchResult extends SearchResults>(
	props: Props<SearchResult>
) => {
	useEffect(() => {
		console.log('results from Navigation.tsx: ', props.results)
	}, [props.results])

	return (
		<>
			{props.showNavigation && (
				<div
					className='absolute top-0 z-20 w-full h-full'
					onClick={props.toggleNavigation}
				/>
			)}
			<aside
				className={`fixed z-30 top-0 transition-right duration-500 ${
					props.showNavigation ? 'right-0' : '-right-full'
				} lg:right-0 w-64 h-screen bg-white border-l overflow-y-scroll no-scrollbar`}
			>
				<section className='flex flex-col'>
					<div className='h-14 flex flex-center border-b'>
						Navegación
					</div>
					<ul id='navigation' className='p-4 flex flex-col gap-2'>
						{props.navLinks.map((link) => (
							<li
								key={link.anchor}
								className='text-gray-700 hover:text-primary transition'
							>
								<a href={`#${link.anchor}`}>{link.name}</a>
							</li>
						))}
					</ul>
				</section>
				<section id='search'>
					<Search<SearchResult>
						config={props.config}
						updateResults={props.updateResults}
					/>
					<Results<SearchResult>
						results={props.results}
						getData={props.getData}
						getDescription={props.getDescription}
					/>
				</section>
			</aside>
		</>
	)
}

export default Navigation
