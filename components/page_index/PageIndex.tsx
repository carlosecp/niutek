import { SearchType } from '../../interfaces/layout'
import Topbar from '../layout/Topbar'
import Search from '../search/Search'

interface Props {
	searchConfig: SearchType
}

const PageIndex = ({ searchConfig }: Props) => {
	return (
		<div className='min-h-screen bg-gray-100'>
			<Topbar />
			<main className='container mx-auto'>
				<section className='text-center'>
					<article className='mb-4'>
						<h1 className='font-semibold text-2xl'>
							{searchConfig.title}
						</h1>
						<p>{searchConfig.description}</p>
					</article>
					<Search searchConfig={searchConfig} />
				</section>
			</main>
		</div>
	)
}

export default PageIndex
