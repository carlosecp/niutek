interface Props {
	showSidebar: boolean
	toggleSidebar: () => void
}

const Sidebar = ({ showSidebar, toggleSidebar }: Props) => {
	return (
		<>
			{showSidebar && (
				<div
					className='absolute z-20 w-full h-full transition-colors bg-blue-500'
					onClick={toggleSidebar}
				></div>
			)}
			<div
				className={`fixed z-30 ${
					showSidebar ? 'left-0' : '-left-full'
				} transition-left sm:transition duration-500 sm:left-0 transition flex flex-col top-0 w-64 bg-white h-full border-r`}
			>
				<div className='flex items-center justify-center h-14 border-b'>
					<div>Sidebar Navigation By iAmine</div>
				</div>
			</div>
		</>
	)
}

export default Sidebar
