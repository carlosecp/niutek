import * as React from 'react'
import { SearchType } from '../../interfaces/layout'
import Topbar from '../layout/Topbar'
import Search from '../search/Search'

interface Props {
	searchConfig: SearchType
}

const PageIndex = ({ searchConfig }: Props) => {
	const [searchValues, setSearchValues] = React.useState<>()

	return (
		<div className='min-h-screen bg-gray-100'>
			<Topbar />
			<main className='container'>
				<section className='text-center'>
					<article className='mb-4'>
						<h1 className='font-semibold text-2xl'>
							{searchConfig.title}
						</h1>
						<p className='text-gray-700'>
							{searchConfig.description}
						</p>
					</article>
					<Search searchConfig={searchConfig} />
				</section>
			</main>
		</div>
	)
}

export default PageIndex
