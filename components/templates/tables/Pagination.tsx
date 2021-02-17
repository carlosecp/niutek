const Pagination = ({ data }) => {
	return (
		<div className='px-4 py-3 bg-white rounded-b-lg'>
			{data.length === 0 ? (
				<div className='flex justify-center'>No hay resultados</div>
			) : (
				<div className='flex-1 flex justify-between'>
					<button
						type='button'
						className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500'
					>
						Anterior
					</button>
					<button
						type='button'
						className='ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500'
					>
						Siguiente
					</button>
				</div>
			)}
		</div>
	)
}

export default Pagination
