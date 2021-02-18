import type { SearchResults, SearchConfig } from '../../interfaces/search'
import { useState, useContext } from 'react'
import { sidebarCtx } from '../layout/Layout'
import { FaBars, FaPlus } from 'react-icons/fa'
import Search from '../templates/search/Search'

interface Props<SearchResult> {
	config: SearchConfig
	updateResults: (x: SearchResult[]) => void
}

const Navbar = <SearchResult extends SearchResults>({
	config,
	updateResults,
}: Props<SearchResult>) => {
	const { toggleSidebar } = useContext(sidebarCtx)

	return (
		<header className='sticky top-0 z-10 flex flex-col'>
			<div className='h-14 bg-white border-b flex items-center px-2'>
				<button
					type='button'
					className='block sm:hidden text-indigo-700 mx-2'
					onClick={toggleSidebar}
				>
					<FaBars size={20} />
				</button>
				<Search config={config} updateResults={updateResults} />
				<button className='h-9 btn btn-outline-primary'>
					<p className='hidden sm:block mr-1'>Nuevo</p>
					<FaPlus className='fill-current' />
				</button>
			</div>
		</header>
	)
}

export default Navbar
