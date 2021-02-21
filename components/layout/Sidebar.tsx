import React from 'react'

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
					<ul className='flex flex-col py-4 space-y-1'>
						<li className='px-5'>
							<div className='flex flex-row items-center h-8'>
								<div className='text-sm font-light tracking-wide text-gray-500'>
									Clientes
								</div>
							</div>
						</li>
						<li>
							<a
								href='#'
								className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6'
							>
								<span className='inline-flex justify-center items-center ml-4'></span>
								<span className='ml-2 text-sm tracking-wide truncate'>
									Persona Natural
								</span>
							</a>
						</li>
						<li>
							<a
								href='#'
								className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6'
							>
								<span className='inline-flex justify-center items-center ml-4'></span>
								<span className='ml-2 text-sm tracking-wide truncate'>
									Persona Jurídica
								</span>
								<span className='px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full'>
									New
								</span>
							</a>
						</li>
						<li className='px-5'>
							<div className='flex flex-row items-center h-8'>
								<div className='text-sm font-light tracking-wide text-gray-500'>
									Productos
								</div>
							</div>
						</li>
						<li>
							<a
								href='#'
								className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6'
							>
								<span className='inline-flex justify-center items-center ml-4'></span>
								<span className='ml-2 text-sm tracking-wide truncate'>
									Ahorro
								</span>
							</a>
						</li>
						<li>
							<a
								href='#'
								className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6'
							>
								<span className='inline-flex justify-center items-center ml-4'></span>
								<span className='ml-2 text-sm tracking-wide truncate'>
									Certificados a Plazo Fijo
								</span>
								<span className='px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full'>
									15
								</span>
							</a>
						</li>
						<li>
							<a
								href='#'
								className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6'
							>
								<span className='inline-flex justify-center items-center ml-4'></span>
								<span className='ml-2 text-sm tracking-wide truncate'>
									Crédito
								</span>
								<span className='px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full'>
									15
								</span>
							</a>
						</li>
						<li className='px-5'>
							<div className='flex flex-row items-center h-8'>
								<div className='text-sm font-light tracking-wide text-gray-500'>
									Settings
								</div>
							</div>
						</li>
						<li>
							<a
								href='#'
								className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6'
							>
								<span className='inline-flex justify-center items-center ml-4'></span>
								<span className='ml-2 text-sm tracking-wide truncate'>
									Profile
								</span>
							</a>
						</li>
						<li>
							<a
								href='#'
								className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6'
							>
								<span className='inline-flex justify-center items-center ml-4'></span>
								<span className='ml-2 text-sm tracking-wide truncate'>
									Settings
								</span>
							</a>
						</li>
						<li>
							<a
								href='#'
								className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6'
							>
								<span className='inline-flex justify-center items-center ml-4'></span>
								<span className='ml-2 text-sm tracking-wide truncate'>
									Logout
								</span>
							</a>
						</li>
					</ul>
				</div>
			</aside>
		</>
	)
}

export default Sidebar
