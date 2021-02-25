import * as React from 'react'

interface Props {
	navLinks: { name: string; anchor: string }[]
	showNavigation: boolean
	toggleNavigation: () => void
	children: React.ReactNode
}

const Navigation = (props: Props) => {
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
					props.showNavigation ? 'right-0 shadow-xl' : '-right-full'
				} sm:shadow-none lg:right-0 w-64 h-screen bg-white border-l overflow-y-scroll no-scrollbar`}
			>
				<section className='flex flex-col'>
					<div className='h-14 flex flex-center border-b'>Navegación</div>
					<ul id='navigation' className='flex flex-col'>
						{props.navLinks.map((link) => (
							<li
								key={link.anchor}
								className='px-4 py-3 hover:bg-gray-50 hover:text-primary transition duration-100 text-sm text-gray-600  transition-colors duration-100 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500'
							>
								<a href={`#${link.anchor}`}>{link.name}</a>
							</li>
						))}
					</ul>
				</section>
				<section id='search'>{props.children}</section>
			</aside>
		</>
	)
}

export default Navigation
