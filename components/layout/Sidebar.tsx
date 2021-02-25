import Link from 'next/link'
import sidebar from './data/sidebar'

interface Props {
	showSidebar: boolean
	toggleSidebar: () => void
}

const Sidebar = ({ showSidebar, toggleSidebar }: Props) => {
	return (
		<>
			{showSidebar && (
				<div className='absolute z-20 w-full h-full' onClick={toggleSidebar} />
			)}
			<aside
				className={`fixed z-30 ${
					showSidebar ? 'left-0' : '-left-full'
				} transition-left shadow-xl sm:shadow-none sm:transition duration-500 sm:left-0 transition flex flex-col top-0 w-64 bg-white h-full border-r`}
			>
				<div className='top-0 flex items-center justify-center h-14 border-b'>
					<div className='h-14 flex flex-center'>niudot</div>
				</div>
				<div className='overflow-y-auto overflow-x-hidden'>
					<div className='flex flex-col py-4 space-y-1'>
						{sidebar.map((section) => (
							<ul key={section.path} className='list-none'>
								<li className='px-5'>
									<div className='flex flex-row items-center h-8'>
										<div className='text-sm font-light tracking-wide text-gray-500'>
											{section.name}
										</div>
									</div>
								</li>
								{section.items.map((item) => (
									<li key={item.subpath}>
										<Link href={`/app/${section.path}/${item.subpath}`}>
											<a className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600  transition-colors duration-100 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6'>
												<span className='inline-flex justify-center items-center ml-4'>
													{item.icon}
												</span>
												<span className='ml-2 text-sm tracking-wide truncate'>
													{item.anchor}
												</span>
											</a>
										</Link>
									</li>
								))}
							</ul>
						))}
					</div>
				</div>
			</aside>
		</>
	)
}

export default Sidebar
